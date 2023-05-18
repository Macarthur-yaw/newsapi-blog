import { faUser,faSearch,faBars,faBell,faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";
import { Route,Link,Routes,useNavigate } from "react-router-dom";
import Body from "./Body";
import Headlines from "./Headlines";
import Business from "./Business";
import Entertainment from "./Entertainment";
import Sports from "./Sports";
import Forms from "./Forms";


const Navbar = () => {
   
    const[display,setDisplay]=useState(false);

const navigate=useNavigate();




function changeScreen(){
    navigate("/forms");
}
 const ChangeDisplay=()=>{
setDisplay((prevState)=>
    !prevState


);
    }

    // console.log(news);
    return ( 
        <> 
        <div className="navBar">
            <div className="navBarItems1">
            <FontAwesomeIcon
            onClick={ChangeDisplay}
            icon={faBars}/>

    

         <FontAwesomeIcon className="icons3" icon={faSearch}/>

         <FontAwesomeIcon className="icons3" icon={faBell}/>
         </div>
<h2>Gh-Higlights</h2>

<div className="navBarItems2">
    <button onClick={changeScreen}>
        
       <FontAwesomeIcon icon={faUser}/> 
     
     
     
     </button>

</div>

        </div>
<div className={display? 'Show':'Hide'}>

<Link className="link" to="/">Home</Link>
<Link className="link" to="/headlines">Top  Headlines</Link>
<Link className="link" to="/business">Business</Link>
<Link className="link" to="/entertainment">Entertainment</Link>
<Link className="link" to="/Sports">Sports</Link>


 <FontAwesomeIcon className="closeIcon" onClick={ChangeDisplay} icon={faClose}/>

</div>

{/* {move && 
<Redirect to= "/src/Components/Forms.js"/> } */}

<Routes>

<Route path="/forms" element={<Forms/>}/>
    <Route path="/" element={<Body/>}/>
    <Route path="/headlines" element={<Headlines/>}/>
    <Route path="/business" element={<Business/>}/>
    <Route path="/entertainment" element={<Entertainment/>}/>
    <Route path="/Sports" element={<Sports/>}/>
</Routes>

        </>
    );
}
 
export default Navbar;