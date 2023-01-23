const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {

    return (
        <>
            {props.parts.map((part) => (
                <div key={part.name}>
                    <Part part={part} />
                </div>
            ))}
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => {
    let total = 0
    props.parts.forEach(part => {
        total += part.exercises
    })

    return (
        <div>
            <p>
                Number of exercises {total}
            </p>
        </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
          },
          {
            name: 'State of a component',
            exercises: 14,
          }
      ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App
