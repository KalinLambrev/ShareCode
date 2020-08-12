import React from 'react';
import ReactTable from 'react-table'
import api from '../../api'

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
        const { snippets, isLoading } = this.state
        console.log('TCL: SnippetList -> render -> snippets', snippets);

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Tags',
                accessor: 'tags',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: 'Likes',
                accessor: 'likes',
            },
        ]

        let showTable = true;
        if (!snippets.length) {
            showTable = false;
        }

        return (
            <div className="wrapper">
                {showTable && (
                    <ReactTable
                        data={snippets}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        minRows={0}
                    />
                )}
            </div>
        );
    }
}

export default SnippetList;