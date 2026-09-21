import './App.css'

const Header = (props) => {

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

  return (
    <div>
      <p className="subject-row">
        Subject: {props.subject}
        <p className="subject-badge">
        Units: {props.units}
        </p>
      </p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div className="">
        <Parts subject={props.subject1} units={props.units1}/>
        <Parts subject={props.subject2} units={props.units2}/>
        <Parts subject={props.subject3} units={props.units3}/>
    </div>
  )
}
const App = () => {
  const course = 'Information Technology'
  const subject1 = 'CSIT340-Industry Elective 1'
  const unitCount1 = 3
  const subject2 = 'FL033-Nihongo 1'
  const unitCount2 = 3
  const subject3 = 'CSIT342-Industry Elective 3'
  const unitCount3 = 3

  return (
    <>
      <Header course={course}/>
      <Content subject1={subject1} units1={unitCount1}
               subject2={subject2} units2={unitCount2}
               subject3={subject3} units3={unitCount3}/>
      <Total units1={unitCount1} units2={unitCount2} units3={unitCount3}/>
    </>
  )
}

export default App