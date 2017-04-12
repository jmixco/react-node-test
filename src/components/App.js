import React, { PropTypes } from 'react';
import Matrix from './Matrix';
import R from '../../server/app/controller/R';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rif: new R(40)
        };
    }
    render() {
        return (
            <div>
                <h1>Hello from r</h1>
                <Matrix rif={this.state.rif} />
                <button>ejecutar</button>
            </div>
        );
    }
}

export default App;

