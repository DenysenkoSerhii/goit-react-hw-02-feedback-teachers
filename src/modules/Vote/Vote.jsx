import { Component } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

import styles from "./vote.module.scss";

const FeedbackOption = ["good", "neutral", "bad"];

class Vote extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    onLeaveFeedback = (name) => {
        this.setState(prevState => {
            // console.log(prevState);
            return {
                [name]: prevState[name] + 1
            }
        });
    }

    calcTotal() {
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total;
    }

    calcPercent(propName) {
        const total = this.calcTotal();
        if(!total) {
            return 0;
        }
        const value = this.state[propName]; 
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
    }

    render(){
        const total = this.calcTotal();
        const good = this.state.good;
        const neutral = this.state.neutral;
        const bad = this.state.bad;
        const goodPercent = this.calcPercent("good");
        
        return (
            <div>
                <h3 className={styles.title}>Please leave the feedback</h3>
                    <Section >
                    <div className={styles.wrap}>
                        <FeedbackOptions options={FeedbackOption} onLeaveFeedback={this.onLeaveFeedback} />
                        </div>
                    </Section>
                    <h3 className={styles.title}>Statistics</h3>
                    {this.calcTotal() !== 0 && (
                    <Section >
                        <Statistics  total={total} good={good} neutral={neutral} bad={bad} goodPercent={goodPercent} />
                    </Section>)}
                    {this.calcTotal() === 0 && (
                        <Section >
                    <Notification message="There is no feedback" />
                    </Section>)}
    
                
            </div>
        )
    }
}

export default Vote;
// 