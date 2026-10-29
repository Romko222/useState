import { useState } from 'react'
import Statistics from './components/Statistics'
import Feedback from './components/Feedback'
import Section from './components/Section'
import './App.css'

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const ratedGood = () => {
      setState((prevState) => ({
      ...prevState,
      good: prevState.good + 1
      }))
      countTotalFeedback()
      countPositiveFeedbackPercentage()
  }

  const ratedMid = () => {
      setState((prevState) => ({
      ...prevState,
      neutral: prevState.neutral + 1
      }))
      countTotalFeedback()
      countPositiveFeedbackPercentage()
  }

  const ratedBad = () => {
      setState((prevState) => ({
      ...prevState,
      bad: prevState.bad + 1
      }))
      countTotalFeedback()
      countPositiveFeedbackPercentage()
  }

  const countTotalFeedback = () => {
      setState((prevState) => ({
      ...prevState,
      total: prevState.bad + prevState.neutral + prevState.good
      }))
  }

  const countPositiveFeedbackPercentage = () => {
      setState((prevState) => ({
      ...prevState,
      persentage: Math.round(prevState.good / prevState.total * 100)
      }))
  }

  return (
    <>
      <Section title = "Please leave feedback">
        <Feedback
        ratedGood = {ratedGood}
        ratedMid = {ratedMid}
        ratedBad = {ratedBad}
        />
      </Section>
      <Section title = "Statistics">
        <Statistics state = {state} />
      </Section>
    </>
  )
}

export default App
