import { useState } from "react";

const Button = (props) => {
    return (
        <button onClick={ props.clickHandler }>
            { props.text }
        </button>
    )
}

const MostVoted = ({ votes, anecdotes }) => {
    const index = votes.indexOf(Math.max(...votes))

    return (
        <div>
            <p>{ anecdotes[index] }</p>
            <p>With { votes[index] } votes</p>
        </div>
    )


}
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        'The only way to go fast, is to go well.'
    ]
   
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = (useState(Array(8).fill(0)))
    
    const clickHandleNext = () => {
        var index = selected
        while (index === selected) {  
            var index = Math.floor(Math.random() * anecdotes.length)
        }
        setSelected(index)
    }
    
    const clickHandleVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes([...copy])
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>Has { votes[selected] } votes</p>
            <Button clickHandler={ clickHandleVote } text={ 'vote' }/>
            <Button clickHandler={ clickHandleNext } text={ 'Next anecdote' }/>
            <h1>Anecdote with the most votes</h1>
            <MostVoted anecdotes={ anecdotes } votes={ votes } />
        </div>
    )
}

export default App;
