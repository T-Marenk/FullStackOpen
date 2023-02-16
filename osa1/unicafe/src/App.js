import { useState } from "react";

const Title = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.clickHandler}>
            {props.text}
        </button>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const allCalculator = () => {
        const all = good+neutral+bad
        return all
    }

    const averageCalculator = () => {
        const all = allCalculator()
        const sum = good - bad
        const average = sum/all
        return average
    }

    const positiveCalculator = () => {
        const all = allCalculator()
        const percentage = (good/all)*100
        const percentagestring = percentage.toString() + ' %'
        return percentagestring
    }

    if (allCalculator() === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    <StatisticsLine text={ 'Good' } value={ good } />
                    <StatisticsLine text={ 'Neutral' } value={ neutral } />
                    <StatisticsLine text={ 'Bad' } value={ bad } />
                    <StatisticsLine text={ 'All' } value={ allCalculator() } />
                    <StatisticsLine text={ 'Average' } value={ averageCalculator() } />
                    <StatisticsLine text={ 'Positive' } value={ positiveCalculator() } />
                </tbody>
            </table>
        </div>
    )
}

const StatisticsLine = (props) => {
    return (
        <tr>
            <td>{ props.text }</td><td>{ props.value }</td>
        </tr>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClick = (setter, value, text) => {
        const handler = () => {
            setter(value + 1)
        }
        return handler
    }

    return (
        <div>
            <Title title={ 'Give Feedback' } />
            <Button clickHandler={handleClick(setGood, good, 'good')} text={'good'} />
            <Button clickHandler={handleClick(setNeutral, neutral, 'neutral')} text={'neutral'} />
            <Button clickHandler={handleClick(setBad, bad, 'bad')} text={'bad'} />
            <Title title={ 'Statistics' }/>
            <Statistics good={ good } neutral={ neutral } bad={ bad }/>
        </div>
    )
}

export default App;
