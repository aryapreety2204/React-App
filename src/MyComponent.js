import { useState } from "react";

const MyComponent = (props) =>
{
    const [counter, setCounter]=useState(1)
    const [myString, setMyString] = useState("Default")
    const [object,setObject] = useState({
        key1: "this is me Preety Arya",
        key2: 2,
        key3: true,
        key4:[{}],
        key5:{}
    })
    console.log("props",props);
    // console.log("Color",props.Color);
    
    const incerementCounter = () =>{
        setCounter(counter+1)
    }
    
    return <div>
        <h1>My functional component</h1>
        hello React
        <br/>
        Color : <label style={{backgroundColor:props.Color}}>{props.Color}<br/></label> {/* pink braces is used for object property*/}
        Size : {props.size} <br/>
             ------------------------  ------
        <br/> 
        counter:{counter} 
        <br/>
        <button  onClick={incerementCounter}>Update Counter</button>
    </div>
}
export default MyComponent