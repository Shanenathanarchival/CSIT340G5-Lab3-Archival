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
        <Parts subject={props.subject[0].name} units={props.subject[0].unitCount}/>
        <Parts subject={props.subject[1].name} units={props.subject[1].unitCount}/>
        <Parts subject={props.subject[2].name} units={props.subject[2].unitCount}/>
    </div>
  )
}
const App = () => {
  const course = 'Information Technology'
  const subjects = [
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

  return (
    <>
      <Header course={course}/>
      {/* <Content subject1={subjects[0].name} units1={subjects[0].unitCount}
               subject2={subjects[1].name} units2={subjects[1].unitCount}
               subject3={subjects[2].name} units3={subjects[2].unitCount}/> */}
      <Content subject = {subjects}/>
      <Total units1={subjects[0].unitCount} units2={subjects[1].unitCount} units3={subjects[2].unitCount}/>
    </>
  )
}

export default App