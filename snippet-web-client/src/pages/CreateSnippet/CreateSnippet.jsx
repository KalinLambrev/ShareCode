import React from 'react';
import './CreateSnippet.css';
import api from '../../api/index';
import { Card, CardContent, TextField, Divider, TextareaAutosize } from '@material-ui/core';
import { getUserParams } from '../../helpers/user-helper';

class CreateSnippet extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tags: [],
            likes: 0,
            code: '',
            userId: 1
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value;
        this.setState({ name: name });
    }

    handleChangeInputTags = async event => {
        const tags = event.target.validity.valid ? event.target.value : this.state.tags;
        const arrayTags = tags.split(', ');
        this.setState({ tags: arrayTags });
    }

    handleChangeInputCode = async event => {
        const code = event.target.value;
        this.setState({ code: code });
    }

    checkIfDuplicateExists = (rawArray) => {
        let realArr = [];

        rawArray.forEach((element, index) => {
            if (rawArray.indexOf(element) != index) {
                realArr.push(element);
            }
        });
        return realArr;
    }

    handleAddSnippet = async () => {
        const role = getUserParams();

        const { name, tags, code, likes, userId } = this.state;
        const arrayTags = tags;

        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);

        const sendTags = findDuplicates(arrayTags);
        const payload = { name, tags: sendTags, code, likes, userId };

        await api.addSnippet(payload).then(res => {
            window.alert(`Snippet inserted successfully`);
            this.setState({
                name: '',
                tags: [],
                code: '',
                likes: 0,
                userId: 1
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