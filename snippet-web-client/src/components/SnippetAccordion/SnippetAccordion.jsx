import React, { useState } from 'react';
import './SnippetAccordion.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import api from '../../api/index';
import Can from '../Can/Can';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '23.33%',
        flexShrink: 0,
        color: theme.palette.text.secondary,
    },
}));

export default function SnippetAccordion(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [count, setCount] = useState(props.snippet.likes);
    const [disable, disableButton] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const displayTags = (tags) => {

        const returnTags = [];
        if (tags) {
            tags
                .map((tag, index) => {
                    if (index !== tags.length - 1) {
                        return returnTags.push(<span key={tag}>{tag}, </span>);
                    } else {
                        return returnTags.push(<span key={tag}>{tag} </span>);
                    }
                });
        } else {
            console.log('No data');
        }
        return returnTags;
    }

    const likeSnippetNew = async () => {
        let newLike = count + 1;

        setCount(newLike);
        disableButton(true);
        api.updateSnippetById(props.snippet._id, { name: props.snippet.name, tags: props.snippet.tags, likes: newLike, code: props.snippet.code });
    }

    const deleteSnippet = async () => {
        api.deleteSnippetById(props.snippet._id)
            .then(() => {
                window.location.assign(`/all-snippets?role=${props.role}`);
            });
    }

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography className={classes.heading} component={'span'}>
                        <h6 className="code-section-header">Snippet name</h6>
                        {props.snippet.name}
                    </Typography>
                    <Typography className={classes.secondaryHeading} component={'span'}>
                        <h6 className="code-section-header">Tags</h6>
                        {/* {displayTags(props.snippet.tags)} */}
                    </Typography>
                    <Typography className={classes.secondaryHeading} component={'span'}>
                        <h6 className="code-section-header">Likes</h6>
                        {count}
                    </Typography>
                    <Typography className={classes.secondaryHeading} component={'span'}>
                        <Can
                            role={props.role}
                            perform="snippets:like"
                            yes={() => (
                                <div className="like-delete-button">
                                    <button disabled={disable} onClick={likeSnippetNew} >Like</button>
                                </div>
                            )}
                        />
                        <Can
                            role={props.role}
                            perform="snippets:delete"
                            yes={() => (
                                <div className="like-delete-button">
                                    <button onClick={deleteSnippet} >Delete</button>
                                </div>
                            )}
                        />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <div className="code-section">
                            <h5 className="code-section-header">Snippet Code:</h5>
                            <p className="sniped-code-paragraph">{props.snippet.code}</p>
                        </div>
                        <Can
                            role={props.role}
                            perform="snippets:delete"
                            yes={() => (
                                <div className="admin-report-section">
                                    <h5 className="admin-section-header">Admin Report:</h5>
                                    <p className="admin-report">Tags per snippet</p>
                                </div>
                            )}
                        />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}