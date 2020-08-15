import React from 'react';
import api from '../../api/index';
import SnippetAccordion from '../../components/SnippetAccordion/SnippetAccordion';
import { getUserParams } from '../../helpers/user-helper';

class OwnSnippetList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            snippets: [],
            columns: [],
            isLoading: false,
            user: {
                role: ''
            }
        }
    }

    componentDidMount = async () => {
        this.setState({
            isLoading: true,
            user: {
                role: getUserParams()
            }
        });
        this.getSnippets();
    }

    getSnippets = async () => {
        await api.getSnippetByUserId(1).then(snippets => {
            this.setState({
                snippets: snippets.data.data,
                isLoading: false,
            });
        });
    }

    render() {
        const snippets = this.state.snippets;
        const role = this.state.user.role;

        return (
            <div className="list-wrapper">
                {snippets.map(snipp => <div key={snipp.name}> {<SnippetAccordion snippet={snipp} role={role} />} </div>)}
            </div>
        );
    }
}

export default OwnSnippetList;