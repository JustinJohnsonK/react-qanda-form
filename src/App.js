import React, { Component } from 'react';
import './App.css';
import UniqueId from 'react-html-id';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Route from 'react-router-dom/Route';

import Questions from './pages/Questions';

class App extends Component {

  constructor() {
    super();
    UniqueId.enableUniqueIds(this);

    this.state = {
      text: "",
      temp: "",
      ansId: null,
      no: 3,
      qanda: [
        {
          id: this.nextUniqueId(),
          ques: "What is Gravity?",
          ans: ["Gravity is the force by which a planet or other body draws objects toward its center. The force of gravity keeps all of the planets in orbit around the sun.", 
                "Gravity, or gravitation, is a natural phenomenon by which all things with mass are brought toward (or gravitate toward) one another, including objects ranging from electrons and atoms, to planets, stars, and galaxies. Since energy and mass are equivalent, all forms of energy (including photons and light) cause gravitation and are under the influence of it.",
                "Gravity is the force by which a planet or other body draws objects toward its center.The force of gravity keeps all of the planets in orbit around the sun."]
        },
        {
          id: this.nextUniqueId(),
          ques: "What is NLP?",
          ans: ["Natural Language Prcessing"]
        },
        {
          id: this.nextUniqueId(),
          ques: "What is Data Science?",
          ans: ["Analyis of Data", "Exploiting data"]
        }
      ]
    }
  }

  deleteQuestionHandler(index, event) {
    var qanda = Object.assign([], this.state.qanda);
    qanda.splice(index, 1);
    this.setState({qanda: qanda});
  }

  editQuestionHandler(id, event) {
    var index = this.state.qanda.findIndex((pack) => {
      return pack.id === id;
    });

    var qanda = Object.assign([], this.state.qanda[index]);
    qanda.ques = event.target.value;
    var newQ = Object.assign([], this.state.qanda);
    newQ.ques = newQ;
    this.setState({qanda: newQ});
  }

  addQuestionHandler(event) {
    this.setState({
      text: event.target.value
    });
  }

  onQuestionSubmit(e) {
    e.preventDefault();
    var ques = this.state.text;
    if(!ques){
      alert("Please enter a valid question");
    }
    else{
      for(var i = 0; i <= this.state.n; i++){var id = this.nextUniqueId()}
      var newQ = {
        id: id, 
        n: this.state.n+1,
        ques: ques,
        ans: []
      }
      this.setState({ qanda: this.state.qanda.concat(newQ)});
      console.log(this.state.qanda);
    }
  }

  addAnswer(event) {
    this.setState({
      temp: event.target.value
    });
  }

  addAnswerSubmit(id, e){
    var index = this.state.qanda.findIndex((pack) => {
      return (pack.id === id);
    });
    // e.preventDefault();
    var ans = this.state.temp;
    if(!ans){
      alert("Enter a valid answer");
    }
    else{
      var thisq = Object.assign([], this.state.qanda[index]);
      thisq.ans.push(ans);
      console.log("This Question ",thisq);
      var trimQanda = Object.assign([], this.state.qanda);
      trimQanda.splice(index, 1);
      console.log("trimmed: ", trimQanda);
      this.setState({ qanda: this.state.qanda});
    }
  }

  // deleteAnswerHandler(event, index) {
  //   var qanda = Object.assign([], this.state.qanda);
  //   console.log("question ", event);
  //   console.log("answer ", this.state.removeAnswer);
  //   var q = new Questions();
  //   // console.log("answer(q.temp)", q.returnAnswerId("babe"));
  // }

  changeAnswerId(newId){
    this.setState({
      ansId: newId
    });
    console.log("new id = ", newId);
    console.log("Changed answer id = ", this.state.ansId);
  }

  render() {
    const {qanda} = this.state;

    return (
      <div className="App container">

        <form className="AddQuestion">
          <input className="inputAddQuestion"
            placeholder="Add a new question" 
            value={this.state.text} 
            onChange={e => this.addQuestionHandler(e)}/>
          <button className="inputButton" onClick={e => this.onQuestionSubmit(e)}>Submit</button>
        </form>

        <ol>
          {qanda.map((pack, index) => {
            return(
              <div className="QuestionBox">
                {/* displays both question and answer */}
                <Questions className="" question={pack.ques}
                  answer={pack.ans} 
                  key={pack.id} 
                  temp={pack.temp}
                  ansId={pack.removeAnswer}
                  addAnswer={e => this.addAnswer(e)}
                  addAnswerSubmit={this.addAnswerSubmit.bind(this, pack.id)}
                  deleteQuestion={this.deleteQuestionHandler.bind(this, index)}
                  answerId = {this.changeAnswerId.bind(this)}>
                    {pack.ques}
                </Questions>
              </div>
            );
          })
          }
        </ol>
      </div>
    );
  }
}

export default App;