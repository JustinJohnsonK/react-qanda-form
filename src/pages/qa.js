import React from 'react';

const oneBox = {
    width: "80%",
    height: "50px",
    display: "block",
    allign: "center",
    margin: "auto",
};

const textBox = {
    width: "70%",
    row: "1",
    float: "left"
};

const bottonStyle = {
    margin: "auto",
    display: "block",
    allign: "center",
    float: "right"
};

const qa = (props) => {
    return(
        <li>
            <h2>{props.question}</h2>
            <div style={oneBox}>
                {/* <textarea name="" id="" cols="30" rows="10">{props.question}</textarea> */}
                <textarea style={textBox} onChange={props.editQuestion}> 
                    {this.props.children}
                </textarea>
                <button style={bottonStyle} onClick={this.props.editQuestion}>Edit Question</button>
                <button style={bottonStyle} onClick={this.props.deleteQuestion}>Delete Question</button>
            </div>
            <div style={oneBox}>
                <h4>Answer: {props.answer}</h4>
            </div>
        </li>
    );
}

export default qa;