import React from 'react';
import './WelcomeBoard.css';
import { withRouter } from 'react-router-dom';



class WelcomeBoard extends React.Component {
    MakeReserv(path) {
        this.props.history.push(path);
    }
    render(){
        return (
            <div className="dashboard">
                <p>WELCOME TO THE FAMILY!</p>
                <button onClick={() => this.MakeReserv("/make-res-amount")}>Reserve a studio space now</button>
            </div>
        );
    }
};

export default withRouter (WelcomeBoard);