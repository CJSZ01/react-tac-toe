export default function Log({ turns }) {
    return <ol id='log' className="log-box"> {turns.map(turn => <h1> {turn.player} | {turn.square.row} / {turn.square.col}</h1>)} </ol>
}