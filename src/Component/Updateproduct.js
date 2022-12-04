import React, { useEffect, useState } from 'react'
import Header from './Header'
import {  useNavigate,useLocation } from "react-router-dom"

function Updateproduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('')

    const navigate = useNavigate();
  const location = useLocation();


  console.log(location.state);
  let item = location.state;

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPrice(item.price);
      setDescription(item.description);
      setId(item.id)
    } 

  }, []);



   async function update(e) {
    e.preventDefault();
    let updateobj={name,price,description}
    let data = await fetch(`http://localhost:3000/user/${id}`,{method:"PUT",headers:{"Accept":"application/json",'Content-Type':"application/json"},body:JSON.stringify(updateobj)});
    data= await data.json();
    console.log(data);
    navigate ("/productlist");
    

  }

  return (
    <>
      <Header />
      <h4 className='text-center my-2'>UpdateProduct</h4>

      <div className='container'>
        <div className='row my-3'>
          <form className='col-md-6 offset-md-3' onSubmit={update}>
            <input type="text" className="form-control" name='name' value={name} placeholder='Product Name' onChange={(e) => { setName(e.target.value) }} />
            <input type="text" className="form-control my-3" name='price' placeholder='Price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
            <input type="text" className="form-control my-3" name='description' placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <button type='submit' className='btn btn-primary'> UPDATE</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Updateproduct