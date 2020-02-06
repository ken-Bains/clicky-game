import React, { Component } from "react";
import Navbar from "./components/navbar";
import CardWrapper from "./components/cardWrapper";
import list from "./list.json";
import Card from "./components/card";

class App extends Component {
  state = {
    answerText: "Make a Guess!",
    score: 0,
    topScore: 0,
    list,
    clickedIds: []
  };

  getClicked = (clicked) => {

    if (this.state.clickedIds.includes(clicked)) {
      this.setState({ answerText: "You Loose!" });
      if (this.state.topScore < this.state.score) {
        this.setState({ topScore: this.state.score })
      }
      this.setState({ score: 0 })
      this.setState({ clickedIds: [] });
    } else {
      this.setState({ clickedIds: [...this.state.clickedIds, clicked] })
      this.setState({ answerText: "You Guess correctly!!" });
      this.setState({ score: this.state.score + 1 })
    }
    var newList = this.state.list;
    this.shuffle(newList)

  };

  shuffle = (newList) =>{
    let i = newList.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newList[i];
      newList[i] = newList[j];
      newList[j] = temp;
    }
    this.setState({ list: newList })
  }

  render() {
    return (
      <div>
        <Navbar
          answerText={this.state.answerText}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="jumbotron text-center">
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
        <CardWrapper>
          {this.state.list.map((el) => {
            return <Card
              id={el.id}
              key={el.id}
              img={el.name}
              getClicked={this.getClicked}
            />
          })}
        </CardWrapper>

      </div>
    );
  }

}

export default App;
