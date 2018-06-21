import React, { Component } from 'react';
import './Question.css';

class Questions extends Component {

    constructor(){
        super();
        this.state = {
            temp: null
        }

    }

    // returnAnswerId(hot) {
    //     console.log("inside returnAnswer  i = ", this.state.temp);
    //     console.log("sexy",hot)
    //     return(this.state.temp);
    // }
    i = null;

    changeId() {
        this.props.answerId(this.state.temp);
        console.log("Inside Question -> changeAnswerId = ", this.state.temp);
    }

    render() {

        const answerList = this.props.answer.map(ans => {
            this.i = this.props.answer.indexOf(ans);
            return(
                <ul>
                    <li key={this.props.key} className="answerList">{ans}</li>
                    {/* <button className="answerButton" onClick={e => { this.setState({temp: i}); this.changeId.bind(this); console.log("button clicked")}}>
                       Delete Answer
                    </button> */}
                    <button className="answerButton" onClick={console.log("onClick ",this.i)}>Delete answer</button>
                </ul>
            );
        })

        return(
            <div className="QandASection">
                <li key="props.key">
                    <div className="QuestionSection">
                        <h2>{this.props.question}</h2>
                        <button className="BottonStyle" onClick={this.props.deleteQuestion}>Delete Question</button>
                        <button className="BottonStyle" onClick={this.props.addAnswerSubmit}>Add Answer</button>
                        <form>
                            <input className="addAnswerInput"
                             type="text"
                             placeholder="Add new answer" 
                             value={this.props.temp}
                             onChange={e => this.props.addAnswer(e)}/>
                        </form>
                    </div>
                    <div className="AnswerSection">
                        {answerList}
                    </div>
                </li>
            </div>
        )
    }
}

export default Questions;