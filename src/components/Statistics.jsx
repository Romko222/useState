function Statistics ({state}) {
    return (
        <div>
            <p>Good: {state.good}</p>
            <p>Neutral: {state.neutral}</p>
            <p>Bad: {state.bad}</p>
            <p>Total: {state.total}</p>
            <p>Positive feedback: {state.persentage}%</p>
        </div>
    )
}

export default Statistics