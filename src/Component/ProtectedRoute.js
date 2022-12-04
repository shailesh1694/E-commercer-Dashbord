import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


function ProtectedRoute(props) {


  const navigate=useNavigate();
  const Component =props.cmp;
  useEffect(()=>{
    if(!localStorage.getItem("user-info")){
      navigate("/register");
    } else{
      navigate("/addproduct");
    }

  },[]);

  return (
    <>
    <Component />
    </>
  )
}

export default ProtectedRoute