import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const zeroVotes = Array(anecdotes.length).fill(0);
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(zeroVotes);

  const handleSelection = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  }

  const handleAddVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  }

  const maxVote = anecdotes[votes.indexOf(Math.max(...votes))];
  console.log(maxVote);

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleAddVote}>Vote</button>
      <button onClick={handleSelection}>Next</button>

      <h2>Top Rated</h2>
      <p>{maxVote}</p>
      <p>Has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App
