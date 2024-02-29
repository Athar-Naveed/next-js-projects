'use client';
import { useState} from "react";
import HandleCart from "./HandleBox";
import {Toaster} from "react-hot-toast";
import {CldUploadButton} from "next-cloudinary";
const Form = ()=>{
    const [name, setName] = useState("");
    const [message,setMessage] = useState('');
    
    return (
        <>
<div className="w-[50%] mx-auto p-4 border bg-slate-600 text-white">
          <label htmlFor="name">Your Name:</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={(e)=>setName(e.currentTarget.value)}
            placeholder="Enter your name here..."
            className="p-2 rounded w-full mt-2 text-black"
          />
          <label htmlFor="message">Your Message:</label>
          <br />
          <textarea
          rows={10}
          style={{resize:'none'}}
            id="name"
            onChange={(e)=>setMessage(e.currentTarget.value)}
            placeholder="Your message here..."
            className="p-2 rounded w-full mt-2 text-black"
          ></textarea>
          <CldUploadButton uploadPreset="ujmy80la" />
          <br />
          <button onClick={() => HandleCart(name,message)} className="p-2 bg-slate-200 text-black mt-2 rounded">
            Submit
            <Toaster />
          </button>
        </div>
        </>
    )
}
export default Form;