import PropTypes from "prop-types";

import Button from "../../../shared/components/Button/Button";

// const FeedbackOptions = ({ leaveVote }) => {
//         return (
//             <>
//                 <Button onClick={() => leaveVote("good")} type="button">Good</Button>
//                 <Button onClick={() => leaveVote("neutral")} type="button">Neutral</Button>
//                 <Button onClick={() => leaveVote("bad")} type="button">Bad</Button>
//             </>
//         )
//     }

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    const elements = options.map(name => 
    <p key={name} >
     <Button onClick={() => onLeaveFeedback(name)} type="button">{name}</Button>
      </p>)
    return (
        <>
           {elements}
        </>
    )
   
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    
}