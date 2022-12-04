import React,{useEffect, useState} from 'react'
import { useNavigate} from "react-router-dom"
import Header from './Header';
function Register() {
  const navigate=useNavigate();
  const [data, setdata] = useState({
                      name:"",
                      password:"",
                      email:""
                    })



  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate("/addproduct");
    }

  },[]);

  console.log(navigate);
function changeHandler (event){
                      const name = event.target.name;
                      const value = event.target.value;
                      setdata({
                        ...data,[name]:value
                      });
                    // console.log(name,value);
                    }
// const [record, setrecord] = useState([]);

function submitHandler(e){
            e.preventDefault();
            localStorage.setItem("user-info",JSON.stringify(data))
            console.log(data)
            navigate('/addproduct');
          //   fetch("http://localhost:3000/user",{
          //     method:"POST",
          //     body:JSON.stringify(data),headers:{
          //       "Accept":"application/json",
          //       "Content-Type":"application/json"
          //     }
          //   }).then((response)=>response.json().then((result)=>{console.log("post result",result)
          //   localStorage.setItem("user-info",JSON.stringify(result));
          // navigate('/addproduct')}))
            
}
  return (
    <>
    <Header />
    <div className='container'>
    <div className='row my-2'>
      <form className='col-md-3 offset-md-4' onSubmit={submitHandler}>
        <h4 className='text-center'>SinUp</h4>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name='name' value={data.name} onChange={changeHandler} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" name='password' value={data.password} onChange={changeHandler}/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Email address:</label>
          <input type="email" className="form-control"  name='email' value={data.email} onChange={changeHandler} />
          <div  className="form-text"></div>
        </div>
        <button type="submit" className="btn btn-secondary">SinUp</button>
      </form>
      </div>
      </div>
    </>
  );
}


export default Register;