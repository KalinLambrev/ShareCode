import React from 'react';
import './ChooseUser.css';
import { Link } from 'react-router-dom';
import api from '../../api/index';
import { useHistory } from "react-router-dom";
import SnippetList from '../SnippetList/SnippetList';

class ChooseUser extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            role: '',
            id: null
        }
    }

    createUser = async (id, role) => {
        const payload = { id, role };

        await api.createUser(payload).then(res => {
            window.alert(`User inserted successfully`);
            this.setState({
                role: '',
                id: null
            });
            window.location.assign(`/all-snippets?id=${id}`);
        });
    }

    checkRole = (role) => {
        switch (role) {
            case 'member':
                return 1;
            case 'admin':
                return 2;
            case 'incognito':
                return 3;
            default:
                break;
        }
    }

    handleAddSnippet = async (e) => {
        e.preventDefault();

        const wantedRole = e.target.value
        const id = this.checkRole(wantedRole);

        await api.getUserById(id)
            .then((user => {
                let data = user.data.data;
                window.location.assign(`/all-snippets?role=${data.role}`);
            }), (error) => {
                console.log(error, 'There is no such of user. We created automaticaly');
                this.createUser(id, wantedRole);
            });
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