import { Link, Outlet } from "react-router-dom"

const Navigation = () =>
    {
        return <div>this is Navigation page
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">A</Link></li>
                        <li><Link to="/b">B</Link></li>
                        <li><Link to="/c">C</Link></li>
                        <li><Link to="/d">D</Link></li>

                    </ul>
                </nav>
           </div>    
               <Outlet/>
        </div>
        
    }
    export default Navigation  