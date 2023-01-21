import PropTypes from "prop-types";

import Button from "../../../shared/components/Button/Button";

const VoteVariants = ({ leaveVote }) => {
        return (
            <>
                <Button onClick={() => leaveVote("good")} type="button">Good</Button>
                <Button onClick={() => leaveVote("neutral")} type="button">Neutral</Button>
                <Button onClick={() => leaveVote("bad")} type="button">Bad</Button>
            </>
        )
    }
export default VoteVariants;

VoteVariants.propTypes = {
    leaveVote: PropTypes.func.isRequired,
    
}