import React,{useState} from 'react';
import Header from './Header';

function Addproduct() {


  const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');




  async function addhandler (e){
    e.preventDefault();
    console.log(name,price,description);
    let obj={name,price,description}
    if(!name || !price || !description){
      alert("Add product data !")
    } else{
    
    let data = await fetch("http://localhost:3000/user",{
          method:"POST",body:JSON.stringify(obj),
          headers:{
            "Content-Type":"application/json",
            "accept":"application/json"
          }
    });
    data= await data.json();
    console.log(data);
    setName("");
    setPrice("");
    setDescription("");
  }}
    




  return (
    <>
      <Header />
      <h4 className='text-center my-2'>AddProduct</h4>
      <div className='container'>
        <div className='row my-3'>
          <form className='col-md-6 offset-md-3' onSubmit={addhandler}>
          <input type="text" className="form-control" name='name' value={name} placeholder='Product Name' onChange={(e)=>{setName(e.target.value)}} />
          <input type="text" className="form-control my-3" name='price' placeholder='Price' value={price}  onChange={(e)=>{setPrice(e.target.value)}}/>
          <input type="text" className="form-control my-3" name='description' placeholder='Description' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
          <button type='submit' className='btn btn-primary'> submit</button>
          </form>
        </div>
      </div>
    </>
)

          



}

export default Addproduct