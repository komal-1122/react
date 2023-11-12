
import React,{useState} from 'react'

export default function Cards(props) {
  // const [mybutton, setmybutton]=useState({"Enable Dark mode"})
  
  const [mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const darkmode=()=>{
  if (mystyle.color==='black') {
    setmystyle({
      color: 'White',
    backgroundColor: 'black'
    })
    setMybutton("Enable Dark Mode");
  }
  else {
    setmystyle({
      color:'black',
      backgroundColor:'white'
    })
    setMybutton("Enable Light Mode");
  }
  }

    const [mybutton, setMybutton]=useState("Enable Dark mode")
  return (
    <>
    <div className='container mt-4 py-4 ' >
    <h1>Cards</h1>
      <div className="card my-4 mx-4" style={mystyle}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
      </div>
      <div className="card my-4 mx-4" style={mystyle}>
            <img src="..." className="card-img-top" alt="..." /> 
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
      </div>
      <button onClick={darkmode} className="btn btn-dark mx-4 ">{mybutton}</button>

    </div>
    </>
  )
}
