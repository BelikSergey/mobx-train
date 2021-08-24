import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import { observer } from "mobx-react";
import { observable } from "mobx";

const MockButtonFeadback = ["Good", "Neutral", "Bad"];

const state = observable({
  good: 0,
  neutral: 0,
  bad: 0,
  countPercent: 0,
});

const countTotalFeedback = state.good + state.neutral + state.bad;

state.Percentage = () => {
  this.countPercent(Math.round((this.good * 100) / countTotalFeedback));
};

state.counterFeadbacks = function (e) {
  if (e.target.textContent === "Good") {
    state.good++;
    state.Percentage();
  } else if (e.target.textContent === "Neutral") {
    state.neutral++;
    state.Percentage();
  } else if (e.target.textContent === "Bad") {
    state.bad++;
    state.Percentage();
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          {/* <FeedbackOptions
                        // key={but}
                        onLeaveFeedback={this.counterFeadbacks}
                    /> */}

          <FeedbackOptions
            buttonNames={MockButtonFeadback}
            onLeaveFeedback={state.counterFeadbacks}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positivePercentage={this.state.countPercent}
            />
          ) : (
            "No feedback given"
          )}
        </Section>
      </div>
    );
  }
}

export default observer(App);
