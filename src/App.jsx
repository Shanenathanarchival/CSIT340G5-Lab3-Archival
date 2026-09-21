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

const Content = (props) => {
  
  return (
    <div className="subject-row">
      <p className="subject-name">{props.subject}</p>
      <span className="subject-badge">{props.units} Units</span>
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
      <Content subject={subject1} units={unitCount1}/>
      <Content subject={subject2} units={unitCount2}/>
      <Content subject={subject3} units={unitCount3}/>
      <Total units1={unitCount1} units2={unitCount2} units3={unitCount3}/>
    </>
  )
}

export default App