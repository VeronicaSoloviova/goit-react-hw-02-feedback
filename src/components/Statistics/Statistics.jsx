export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <ul><li>good: { good }</li>
        <li>neutural: { neutral }</li>
        <li>bad: { bad }</li>
        <li>total: { total }</li>
        <li>positivePercentage: { positivePercentage }%</li></ul>
}