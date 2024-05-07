// import logo from './logo.svg';
import './App.css';
import React from 'react' ;
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';
import ChildComponent from './ChildComponent';
import A from './Componenet/A';


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
  state = {email: "", password: ""}
  // state = {classComponenet : <MyComponentClass Color="orange" size="medium" onclick={() => {
  //   console.log("this is executed in App.js")
  // }}/> }
  unmountFunction=() =>{
    this.setState({classComponenet: "class componenet unmounted now:"})
    
    console.log("testing git commit")
    console.log("testing second commit on github")
  }
  parentCallbackFunction = (data)=>{
    console.log("data in parents:",data);
  }
  handleSubmit = (event) =>
  {
    event.preventDefault();
    console.log("email:",this.state.email)
    console.log("password:",this.state.password)
    console.log("form is submited");
  }

  render(){
    return<div>
      <A/>
    </div>
//     return <div>
//           <p>this is paragraph</p>
//           <ul>
//               <li>this is first line 1</li>
//               <li>this is first line 2</li>
//           </ul>
//             <MyComponent Color="yellow" size="medium"/>
//             <br/>
//             {this.state.classComponenet}
//             <br/>
//             <button onClick={this.unmountFunction}>unmounted class comp</button>
//             <br/>
//             <ChildComponent data="this is my data from parents" callback={this.parentCallbackFunction}/>

//             <br/>

//             <form  onSubmit={this.handleSubmit}>
//               <h2>Login</h2>
//               <label>
//                 Email:
//                 <input type="email" placeholder='enter email' onChange={event => this.setState({email:event.target.value,password:this.state.password})}></input>
//               </label><br/>
//               <label>
//                 Password:
//                 <input type="password" placeholder='enter password' onChange={event => this.setState({password:event.target.value,email:this.state.email})}></input>
//               </label><br/>
//               <button>Submit</button>
//             </form>

            
// </div>
  }
}
export default App;
