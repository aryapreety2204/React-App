// import logo from './logo.svg';
import './App.css';
import React from 'react' ;
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';


// function App() {
// const el1=<h2>this is a simple JSX code</h2>
// console.log(el1);


// const buttonHandler=()=>{
//   console.log("button is clicked")
// };

//   return (  // every text write in return its take as a textnot as tag {used curly braces }
//   //   <div>Hello preety ! ssi digital
//   //     {el1} 
//   //     <button onClick={buttonHandler}>Click me</button>
//   //   </div>
    
//   // 
// );

// return React.createElement("div",null,"hello Preety!"),
// React.createElement("p" ,null, "this is me preety"),
// React.createElement("ul" ,null, 
// React.createElement("li" ,null, "this is list item 1"),
// React.createElement("li" ,null, "this is list item 1"),
// React.createElement("li" ,null, "this is list item 1"),
// React.createElement("li" ,null, "this is list item 1"),
// React.createElement("li" ,null, "this is list item 1"),
 
// )

// return <div>
//   <p>this is paragraph</p>
//   <ul>
//     <li>this is first line 1</li>
//     <li>this is first line 2</li>
   
//   </ul>
//   <MyComponent color="green" size="medium"/>
// </div>



//   return <div>
//      <MyComponent Color="yellow" size="medium"/>
//      <br/>
//      {this.state.classComponenet}

//      <button onClick={componentWillUnmount()}></button>
//   </div>
    
// }
class App extends React.Component
{
  state = {classComponenet : <MyComponentClass Color="orange" size="medium" onclick={() => {
    console.log("this is executed in App.js")
  }}/> }
  unmountFunction=() =>{
    this.setState({classComponenet: "class componenet unmounted now:"})
    
    console.log("testing git commit")
  }
  render(){
    return <div>
          <p>this is paragraph</p>
          <ul>
              <li>this is first line 1</li>
              <li>this is first line 2</li>
          </ul>
            <MyComponent Color="yellow" size="medium"/>
            <br/>
            {this.state.classComponenet}
            <br/>
            <button onClick={this.unmountFunction}>unmounted class comp</button>
</div>
  }
}
export default App;
