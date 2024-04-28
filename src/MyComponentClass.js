import React from "react"

class MyComponentClass extends React.Component

{
    Counter = 0;
    state = {count:0}


    constructor(props){
        super(props)
        console.log("constructor of MycomponentClass");
    }
    static getDerivedStateFromProps(){
      console.log("getDerivedStateFromProps")
    }
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate")
      return true
    }
    incerement = () => {
        this.setState({count:this.state.count+1})
        console.log("count",this.state.count)
    }
    incerementCounter = () => {
        this.Counter +=1
        console.log("counter",this.Counter)
    }

    render(){
        console.log("render")
        console.log("class props:",this.props); 
   return <div>
   <h1> My class component</h1>
        hello React Student's!!!
      <br/>
      color : <label style={{backgroundColor: this.props.Color}}>{this.props.Color}</label>
      <br/>
      <button onClick={this.props.onclick}>click me</button><br/>
      ------------------------------
      <br/>
      <div>
        count:{this.state.count}<br/>
        <button onClick={this.incerement}>incerement</button>
      </div><br/>
      <div>
        Counter : {this.Counter}<br/>
        <button onClick={this.incerementCounter}>incerement</button>
      </div>
   </div>
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("getSnapshotBeforeUpdate");

      console.log("prevProps:" ,prevProps)
      console.log("this.Props:",this.Props)

      console.log("prevState:" , prevState)
      console.log("this.state" , this.state)
      return true 

    }
    componentDidUpdate(){
      console.log("componentDidUpdate")
    }
    componentDidMount(){
      console.log("componenetDidMount")
    }
    componentWillUnmount(){
      console.log("componenetWillUnmount");
    }
    
}
export default MyComponentClass 
