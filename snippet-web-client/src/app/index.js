
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { CreateSnippet, SnippetList, OwnSnippetList, ChooseUser } from '../pages';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/all-snippets" exact component={SnippetList} />
                <Route path="/own-snippets" exact component={OwnSnippetList} />
                <Route
                    path="/create-snippet"
                    exact component={CreateSnippet}
                />
                <Route path="/" exact component={ChooseUser} />
            </Switch>
        </Router>
    )
}

export default App;