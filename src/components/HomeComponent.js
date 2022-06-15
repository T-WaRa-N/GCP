import React, {useState} from "react";
import image from '../images/cutting.jpg'
import "./HomeComponent.css"
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

// Functional component utilizing reactHooks
const HomeComponent = () => {

  //const[count, setCount] = useState(0)

  //styling buttons
  const buttonStyle = {
    backgroundColor:' #299f16', 
    border: '1px solid  #299f16', 
    borderRadius: '10px', 
    width: '80%',
    margin: '10px'
  }

  return(
    
    <div className="main-pages text-center">
        <img src={image} alt="image"/>
        <div>
            <p>Singakuchebela <br/> ingca</p>
        </div>
        <div className="number-of-customers">
            <h1 style={{fontSize: "100px"}}>15</h1>
        </div>
        <Button style={buttonStyle}>COFA UBIZE UBIZE UMNTU AZOCHEBA</Button>
        <Button style={buttonStyle}>COFA UFUNDE KABANZI</Button>
    </div>
  )
}

export default HomeComponent;