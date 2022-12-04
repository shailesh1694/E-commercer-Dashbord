import React,{useEffect,useState} from 'react'
import Header from './Header';
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  
  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate("/addproduct");
    }

  },[]);
 async function loginHandler(e){
  e.preventDefault();
    let item ={email,password}
    
            localStorage.setItem("user-info",JSON.stringify(item))
            console.log(item)
            navigate('/addproduct');

//     let data=  await fetch("http://localhost:3000/user",{
//       method:"POST",headers:{
//         "Content-Type":"application/json",
//         "accept":"application/json"
//       },body:JSON.stringify(item)
//     }); 
//     data= await data.json(); 
//       localStorage.setItem("user-info",JSON.stringify(data));
//       navigate("/addproduct");
 }

 
 
  return (
    <>
    <Header />
    <div className='container'>
    <div className='row my-2'>
    <form className='col-md-3 offset-md-4' onSubmit={loginHandler} >
        <h4 className='text-center'>Login</h4>
        <div className="mb-3">
          <label  className="form-label">Email address:</label>
          <input type="email" className="form-control"  name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
       
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        
        <button type="submit" className="btn btn-secondary">login</button>
      </form>
      </div>
      </div>



    </>
  )
}

export default Login