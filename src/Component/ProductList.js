import React, { useEffect, useState } from 'react';
import Header from './Header';

import {NavLink} from "react-router-dom";
function ProductList()
{ 

  const [fetchdata, setFetchdata] = useState([]);

  async function fetchhis() {

    let data = await fetch('http://localhost:3000/user');
    data = await data.json();
    console.log(data);
    setFetchdata(data);
  }

  useEffect(() => { fetchhis() }, [])
function deletHandler(id)
{
  // console.log(id);
fetch(`http://localhost:3000/user/${id}`,{method:"DELETE"}).then((response)=>response.json().then((result)=>{console.log(result);fetchhis();}));
}








  return (
    <>
      <Header />
      <h4 className='text-center my-2'>ProductList</h4>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Delet Item</th>
                  <th scope="col">Update Item</th>
                </tr>


              </thead>
              <tbody>
                {
                  fetchdata.map((item, index) => {
                    
                    return (
                      <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td ><span className='delet' onClick={()=>{deletHandler(item.id)}}>DELETE</span></td>
                        <td><NavLink to="/updateproduct" className='update' state={item}>UPDATE</NavLink></td>
                      </tr>


                    )
                  })
                }




              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductList;