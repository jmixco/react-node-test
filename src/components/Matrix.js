import React from 'react';
import R from '../../server/app/controller/R';

const rif = new R();

class Matrix extends React.Component {
    constructor(props) {
        super(props);
        const rif = new R(40);
        rif.vote("mario", rif.rollAvailable());
        rif.vote("john", rif.rollAvailable());
        rif.vote("pedro", rif.rollAvailable());

        this.state = {
            rif
        };
    }
    render() {

        return (
            <div className="m col-md-6 col-md-offset-3">{
                this.state.rif.items.map((item, index, arr) => {
                    let classStr = "col-sm-2  m-item ";
                    if (this.state.rif.votes.get(item)) {
                        classStr += "act";
                    }
                    return (<div key={item} className={classStr}>{item}</div>);
                })

            }</div >
        );

    }
}
export default Matrix;