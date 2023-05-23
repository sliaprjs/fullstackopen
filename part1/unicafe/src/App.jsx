import { useState } from 'react'

const Header = () => {
  return <h1>Give Feedback</h1>
}

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const StatLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0) return;
  return (
    <>
    <h2>Statistics</h2>
    <table>
      <tbody>
      <StatLine text="Good" value={good}/>
      <StatLine text="Neutral" value={neutral}/>
      <StatLine text="Bad" value={bad}/>
      <StatLine text="All" value={total}/>
      <StatLine text="Average" value={((good * 1) + (bad * -1)) / total}/>
      <StatLine text="Positive %" value={good / total * 100}/>
      </tbody>
    </table>
    
  </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header/>
      <Button handler={handleGood} text="Good"/>
      <Button handler={handleNeutral} text="Neutral"/>
      <Button handler={handleBad} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
