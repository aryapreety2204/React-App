import { useState } from "react";

const A = () =>
    {
        const [student ,setStudent] = useState(
            {
                rollNumber:111,
                name:"preety",
                course:"MERN",
                contactNumber:"281319396",
                address:"raj NAgar"
            }
        )

        // const updateStudent = () =>
        //     { 
        //         var name = document.getElementById("studentName").value;
        //         console.log("studentName to be update!", name);
        //         setStudent({...student, name:name})
        //     }
        return <div>this is page A
            <br/>
            Name:<b>{student.name}</b><br/>
            Roll No :<b>{student.rollNumber}</b><br/>
            Course :<b>{student.course}</b><br/>
            ConatactNumber :<b>{student.contactNumber}</b><br/>
            Address :<b>{student.address}</b><br/>
            
            <div>
            <input type="text" placeholder="Name" onChange={(e) => setStudent({...student, name:e.target.value})}></input>
                {/* <input type="text" placeholder="Name" id="studentName"></input>
                <button onClick={updateStudent}>update student</button> */}
            </div>
            
         
        </div>

    }
    export default A