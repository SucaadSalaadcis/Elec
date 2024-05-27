import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RegisterElec() {
    const [ImageURL, setImageURL] = useState('')
    const [title, settitle] = useState('')
    const [pcs, setpcs] = useState('')
    const [price, setprice] = useState('')

   // post
    const handlePost = (e) => {
        e.preventDefault();
        const data = {
            ImageURL,
            title,
            pcs,
            price,
        }
        axios.post("http://localhost:7000/electronic",data).then(()=> {
            toast("Electronic Created Successfuly...", {
                position: "top-right",
                autoClose: 2000,
            });
            window.location.reload();
        }).catch((error)=> console.log(error))
    }

      

  return (
    <div>
      <h1 className='ml-[590px] font-bold pt-[100px]'>Register Electronic</h1>
      <form className='mr-5 text-center pt-10'>
        <input value={ImageURL} onChange={(e) => setImageURL(e.target.value)} className='h-[50px] w-[530px] m-3 border-blue-600 border-2 pl-5 rounded-md' type="text" placeholder='Image URL' />
        <input value={title} onChange={(e) => settitle(e.target.value)} className='h-[50px] w-[230px] m-3 border-purple-600 border-2 pl-5 rounded-md' type="text" placeholder='Title' />
        <br/>
        <input value={pcs} onChange={(e) => setpcs(e.target.value)} className='h-[50px] w-[230px] m-3 border-blue-600 border-2 pl-5 rounded-md' type="text" placeholder='Pcs' />
        <input value={price} onChange={(e) => setprice(e.target.value)} className='h-[50px] w-[230px] m-3 border-blue-600 border-2 pl-5 rounded-md' type="text" placeholder='Price' />
    
        <br />
        <button className='text-white bg-purple-600 px-28 text-2xl py-3 mt-5  rounded-md' onClick={handlePost}>Save</button>
      </form>
    </div>
  )
}

export default RegisterElec