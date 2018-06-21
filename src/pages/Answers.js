import React from 'react';

const answers = (props) => {
    const findAnswer = props.children.map((ans, index) => {
        return(ans);
    } );
    if (findAnswer) {
        return (<h3>{findAnswer}</h3>);
    }
    else {
        return (<h4>No Answers Available!!!</h4>);
    }
}

export default answers;