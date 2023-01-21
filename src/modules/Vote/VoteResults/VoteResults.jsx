import PropTypes from "prop-types";

const VoteResults = ({ total, good, neutral, bad, goodPercent }) => {
    return (
        <>
            <p>Total: {total}</p>
            <p>Good: {good}</p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad} </p>
            <p>Positive feedback: {goodPercent}</p>
        </>
    )
}

export default VoteResults;

VoteResults.propTypes = {
    total: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    goodPercent: PropTypes.number.isRequired,
}