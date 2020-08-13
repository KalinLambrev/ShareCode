import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    console.log(props, 'OOOOHOOOO');
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const displayTags = (tags) => {
        const returnTags = [];
        if (tags) {
            tags
                .map((tag, index) => {
                    const end = tags.length;
                    if (index !== tags.length - 1) {
                        returnTags.push(<span>{tag}, </span>);
                    } else {
                        returnTags.push(<span>{tag} </span>);
                    }
                });
        } else {
            console.log('No data');
        }
        return returnTags;
    }

    const likeSnippet = () => {
        console.log('Liked');
    }
    console.log(props.snippet, 'OOOOHOOOO');

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography className={classes.heading}>{props.snippet.name}</Typography>
                    <Typography className={classes.secondaryHeading}>{displayTags(props.snippet.tags)}</Typography>
                    <Typography className={classes.secondaryHeading}>{props.snippet.likes}</Typography>
                    <Typography className={classes.secondaryHeading}>
                        <div className="like-button">

                            <button onClick={likeSnippet} >Like</button>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.snippet.code}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}