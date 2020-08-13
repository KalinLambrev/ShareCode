import React from 'react';
import './CreateSnippet.css';
import api from '../../api/index';
import { Card, CardContent, TextField, CardMedia, Divider, TextareaAutosize } from '@material-ui/core';

class CreateSnippet extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tags: [],
            likes: 0,
            code: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        console.log(name);
        this.setState({ name: name })
    }

    handleChangeInputTags = async event => {
        const tags = event.target.validity.valid
            ? event.target.value
            : this.state.tags
        const arrayTags = tags.split(', ');
        console.log(arrayTags);
        this.setState({ tags: arrayTags });
    }

    handleChangeInputCode = async event => {
        const code = event.target.value;
        console.log(code);
        this.setState({ code: code });
    }

    handleAddSnippet = async () => {
        const { name, tags, code, likes } = this.state;
        console.log(tags);
        const arrayTags = tags + '';
        const sendTags = arrayTags.split(', ')

        const payload = { name, tags: sendTags, code, likes };

        console.log(payload);

        await api.addSnippet(payload).then(res => {
            window.alert(`Snippet inserted successfully`);
            this.setState({
                name: '',
                tags: [],
                code: '',
                likes: 0
            });
        });
    }

    render() {
        return (
            <div>
                <h2 className="create-snippet-header">Create Snippet</h2>
                <h5 className="second-header">Hier you cann add a nue snippet</h5>
                <div className="card-wrapper">
                    <Card>
                        <CardContent className="card-content">
                            <form className="form-content" noValidate autoComplete="off">
                                <div className="input-wrapper">
                                    <TextField label="Snippet name" onChange={this.handleChangeInputName} />
                                    <Divider />
                                    <TextField label="Add tags" onChange={this.handleChangeInputTags} />
                                    <Divider />
                                    <TextareaAutosize rowsMin={3} type="text" label="Snippet code" onChange={this.handleChangeInputCode} />
                                    <Divider />
                                </div>

                            </form>
                            <div className="create-snippet-button">
                                <button onClick={this.handleAddSnippet}>Create</button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CreateSnippet;