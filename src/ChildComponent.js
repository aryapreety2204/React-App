const ChildComponent = (props) =>

    {
        const sentToParent = () =>
            {
                let message = document.getElementById("message").value
                console.log("message",message); 
                props.callback(message)          
            }
        return <div>
            ---------------------<br/>

            child componenet<br/>
            data: {props.data}<br/>
            <input type="text" placeholder="Enter msg here..." id="message"></input>
            <button onClick={sentToParent}>send to parents</button><br/>
            ----------------------
        </div>
    }
    export default ChildComponent