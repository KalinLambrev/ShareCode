import React from 'react';
import api from '../../api/';
import SnippetAccordion from '../../components/SnippetAccordion/SnippetAccordion';
class SnippetList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            snippets: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllSnippets().then(snippets => {
            this.setState({
                snippets: snippets.data.data,
                isLoading: false,
            });
        });
    }

    render() {
        console.log(this.state.snippets);
        const snippets = this.state.snippets;
        return (
            <div className="list-wrapper">
                {snippets.map(snipp => <div key={snipp}> {<SnippetAccordion snippet={snipp} />} </div>)}
            </div>
        );
    }
}

export default SnippetList;