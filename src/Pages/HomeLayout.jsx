import { Link, Outlet } from "react-router-dom"

const HomeLayout=()=>{
    return (
        <div>
            {/* <h1>This Homepage is being opened through the file</h1>
            <h2>Sorry, through the external file</h2>
            <Link to='/Dashboard'>Dashboard Layout</Link><br></br>
            <Link to='/Login'>Login here</Link><br></br>
            <Link to='/Register'>Register here</Link><br></br>
            <Link to='/Landing'>Landing</Link><br></br> */}
            <Outlet/>

        </div>
    )
}

export default HomeLayout;