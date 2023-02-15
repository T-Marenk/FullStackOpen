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

const Stats = (props) => {
    return (
        <p>{ props.text }: { props.value }</p>
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

    return (
        <div>
            <Title title={ 'Give Feedback' } />
            <Button clickHandler={handleClick(setGood, good, 'good')} text={'good'} />
            <Button clickHandler={handleClick(setNeutral, neutral, 'neutral')} text={'neutral'} />
            <Button clickHandler={handleClick(setBad, bad, 'bad')} text={'bad'} />
            <Title title={ 'Statistics' } />
            <Stats text={ 'Good' } value={ good } />
            <Stats text={ 'Neutral' } value={ neutral } />
            <Stats text={ 'Bad' } value={ bad } />
            <Stats text={ 'All' } value={ allCalculator() } />
            <Stats text={ 'Average' } value={ averageCalculator() } />
            <Stats text={ 'Positive' } value={ positiveCalculator() } />
        </div>
    )
}

export default App;
