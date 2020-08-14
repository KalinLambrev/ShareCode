import React from 'react';
import './ChooseUser.css';
import { Link } from 'react-router-dom';
import api from '../../api/index';
import { useHistory } from "react-router-dom";

class ChooseUser extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            role: ''
        }
    }

    handleAddSnippet = async (e) => {
        e.preventDefault();

        const val = e.target.value
        const payload = { role: val };

        await api.createUser(payload).then(res => {
            window.alert(`User inserted successfully`);
            this.setState({
                role: ''
            });
        });
        window.location.assign('/all-snippets');
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="user-header">Choose a User</h2>
                <div className="user-buttons">
                    <div className="choose-button">
                        <button onClick={this.handleAddSnippet} value="member">
                            As Member
                            </button>
                    </div>
                    <div className="choose-button">
                        <button onClick={this.handleAddSnippet} value="admin">
                            As Admin
                            </button>
                    </div>
                    <div className="choose-button">
                        <button onClick={this.handleAddSnippet} value="incognito">
                            Incognito
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseUser;