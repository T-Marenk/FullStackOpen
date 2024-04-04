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
        </div>)
        )
      }
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

const Total = ({ parts }) => {
  const total = parts.reduce(
    (s, c) => s + c.exercises,
    0,
  );

  return (
    <div>
      <p>
        <b>Number of exercises {total}</b>
      </p>
    </div>
  )
}

const Course = ({ course }) => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
