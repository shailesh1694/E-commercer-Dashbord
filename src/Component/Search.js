import {NavLink} from "react-router-dom";
import React, {useState } from 'react'
import Header from './Header';

function Search() {


    const [serchdata, setSerchdata] = useState([])
    const [getvalue, setgetvalue] = useState()
    async function search(key) {
        setgetvalue(key);


        let data = await fetch(`http://localhost:3000/user?q=${key}`);
        data = await data.json();
        console.log(data);
        setSerchdata(data);
    }
    function deletHandler (id){
        fetch(`http://localhost:3000/user/${id}`,{method:"DELETE"}).then((response)=>response.json().then((result)=>{search(getvalue)}));

    }
    


    return (
        <>
            <Header />
            <div className='container'>
                <h4 className='text-center my-2'>Search Product</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Product Here !" onChange={(e) => { search(e.target.value) }} aria-label="Recipient's username" aria-describedby="button-addon2" />
                    {/* <button className="btn btn-outline-secondary mx-1" type="button" id="button-addon2" >Search</button> */}
                </div>
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
                                        <th scope="col">DeLete</th>
                                        <th scope="col">Update</th>



                                    </tr>


                                </thead>
                                <tbody>
                                    {
                                        serchdata.map((item, index) => {

                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.description}</td>
                                                    <td ><span className='delet' onClick={() => { deletHandler(item.id) }}>DELETE</span></td>
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
            </div>
        </>
    )
}

export default Search;