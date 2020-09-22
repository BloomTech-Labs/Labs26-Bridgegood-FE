import React from 'react';
import './WelcomeBoard.less';
import { useHistory } from 'react-router-dom';



function WelcomeBoard() {
    let history = useHistory();
    
    function handleClick() {
        history.push("/make-res-amount");
    }
    
    return (
        <div className="dashboard">
            <p>WELCOME TO THE FAMILY!</p>
            <button type="button" onClick={handleClick}>Reserve a studio space now</button>
        </div>
    );
};

export default WelcomeBoard;