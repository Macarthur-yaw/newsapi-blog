import { useState } from "react";
// import { Form } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";
import SignForm from "./SignForm";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Forms = () => {
    
    
    const[display,setDisplay]=useState(false);
const[check,setCheck]=useState(false);
const[first,setFirst]=useState(true);
// const[signup,setSignUp]=useState(false);

// const[dis,setDis]=useState(false);
    const[name,setName]=useState("");

    const handleSubmit=(e)=>{
e.preventDefault();

    }

    function handleChange(e){
            setName(e.target.value);

        
    }

  

function nextPage(){
   
if(name.length===0)
{
    console.log("nothing typed");
    setDisplay(false);
    setCheck(true);
}    else{
    setDisplay(true);
setFirst(false);
    setCheck(false);
}

  
   
}
    

    return ( 

        < >
        
        <div className="container"> 
     
     
      
  

      
<div className="subAbout">

   <h2>WORLD NEWS</h2> 
        Welcome to our news website, 
        {/* <br></br> */}
        your one-stop destination for the latest updates in sports, entertainment, and business.
     

      Explore our articles, 

<br/>
      <button className="btnExplore">EXPLORE</button>
      </div> 
      




            <div className="formContainer">
     
    
<div>
<h2 style={{color:" rgb(49, 49, 245) "}}>WORLD!</h2>

<br></br>
<h3>Sign in</h3>
<br></br>
Subscribe to receive news update!
<form onSubmit={handleSubmit}>
     
    {first &&  (
    <div>   
       <h3>Username</h3> 
        <br></br>
           <input type="text" value={name} onChange={handleChange} placeholder="Name" className="input" required />
   
      <br />
      <br></br>
      <br></br>

      <button onClick={nextPage} className="button">Next</button>

      </div> )}

    
      <br></br>
      {display &&
(
<div>
    
    <h3>Email</h3>
    <br></br>
    
<input type="text" onChange={handleChange} placeholder="Email" className="input" />
      <br />
    
    <br></br>
      <button onClick={nextPage} className="button">Submit</button>

</div>
)
}   </form>
<br></br>



      {check&&
<div 
style={{textAlign:"center",color:"red"}}
>
<br></br>Please Fill the forms</div>
}
</div>

    
      
      <br />
    <button className="btnClicks">
      Create an account
        </button>
        <br></br>
 Or, continue with 


 <button className="btnGoogle">
    <FontAwesomeIcon className="icon" icon={faGoogle}/>
    &nbsp;
    Google</button>
    </div>
    <div>
            {/* {signup && <Signup/>} */}
        </div>

        </div>
{/* <a href="./SignForm">Click here</a> */}
        </> )
    
    
}



 
export default Forms;

