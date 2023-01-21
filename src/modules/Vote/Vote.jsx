import { Component } from "react";

import VoteVariants from "./VoteVariants/VoteVariants";
import VoteResults from "./VoteResults/VoteResults";
import VoteBlock from "./VoteBlock/VoteBlock";

import styles from "./vote.module.scss";


class Vote extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

     leaveVote = (name) => {
        this.setState(prevState => {
            console.log(prevState);
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
                <div className={styles.wrapper}>
                    <VoteBlock >
                        <VoteVariants leaveVote={this.leaveVote} />
                    </VoteBlock>
                    <VoteBlock title="Statistics">
                        <VoteResults  total={total} good={good} neutral={neutral} bad={bad} goodPercent={goodPercent} />
                    </VoteBlock>
    
                </div>
            </div>
        )
    }
}

export default Vote;
// 