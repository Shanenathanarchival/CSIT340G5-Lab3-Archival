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
        <Parts subject={props.subject1} units={props.units1}/>
        <Parts subject={props.subject2} units={props.units2}/>
        <Parts subject={props.subject3} units={props.units3}/>
    </div>
  )
}
const App = () => {
  const course = 'Information Technology'
  const subject1 = {
    name: 'CSIT340-Industry Elective 1',
    unitCount: 3
  }
  const subject2 = {
    name: 'FL033-Nihongo 1',
    unitCount: 3
  }
  const subject3 = {
    name: 'CSIT342-Industry Elective 3',
    unitCount: 3
  }

  return (
    <>
      <Header course={course}/>
      <Content subject1={subject1.name} units1={subject1.unitCount}
               subject2={subject2.name} units2={subject2.unitCount}
               subject3={subject3.name} units3={subject3.unitCount}/>
      <Total units1={subject1.unitCount} units2={subject2.unitCount} units3={subject3.unitCount}/>
    </>
  )
}

export default App