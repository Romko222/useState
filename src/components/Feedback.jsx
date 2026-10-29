function Feedback({ratedGood, ratedMid, ratedBad}) {

    return (
        <div>
            <button onClick={ratedGood}>Good</button>
            <button onClick={ratedMid}>Neutral</button>
            <button onClick={ratedBad}>Bad</button>
        </div>
    )
}

export default Feedback