import './App.css'

const Header = (props) => {
console.log(props)
  console.log(props)
  return (
    <div>
      <p className="header-title">
        Bachelor of Science in {props.course}
      </p>
    </div>
  )
}

const Total = (props) => {
console.log(props)
  return (
    <div className="total-box">
      <p className="total-label">Total Units</p>
      <span className="total-count">
        {props.units1 + props.units2 + props.units3} Units
      </span>
    </div>
  )
}

const Parts = (props) => {
console.log(props)
  return (
    <div>
      <div className="subject-row">
        Subject: {props.subject}
        <p className="subject-badge">
        Units: {props.units}
        </p>
      </div>
    </div>
  )
}

const Content = (props) => {
console.log(props)
  return (
    <div className="">
        <Parts subject={props.course.subjects[0].name} units={props.course.subjects[0].unitCount}/>
        <Parts subject={props.course.subjects[1].name} units={props.course.subjects[1].unitCount}/>
        <Parts subject={props.course.subjects[2].name} units={props.course.subjects[2].unitCount}/>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Information Technology',
    subjects: [
    {
      name: 'CSIT340-Industry Elective 1',
      unitCount: 3
    },
    {
      name: 'FL033-Nihongo 1',
      unitCount: 3
    },
    {
      name: 'CSIT342-Industry Elective 3',
      unitCount: 3
    }
  ]
  }

  return (
    <>
      <Header course={course.name}/>
      <Content course = {course}/>
      <Total units1={course.subjects[0].unitCount} units2={course.subjects[1].unitCount} units3={course.subjects[2].unitCount}/>
    </>
  )
}

export default App