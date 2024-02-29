'use client'
import {useState} from "react";
import { Toaster } from "react-hot-toast";
import HandleUpdatePost from "./HandleUpdate";
import HandleDelete from "./HandleDelete";
const Buttons = (user_id:any) =>{
    const [appear,setAppear] = useState(false);
    const [name,setName] = useState('');
    return (
        <>
        <button onClick={async ()=>{
            const data = await HandleUpdatePost(name,user_id.value,0);
            setAppear(!appear);
            setName(data);
            }} className="bg-green-400 p-2 text-white">Update</button>
        <button onClick={()=>HandleDelete(user_id.value)} className="bg-red-400 p-2 mx-2 text-white">Delete 
        <Toaster />
        </button>
        {!appear ? '' : 
        <div className="w-fit absolute bottom-[62%] left-[55%]">
            <input className="border border-black rounded-xl p-2 font-bold" type="text" onChange={(e)=>setName(e.currentTarget.value)} name="update_name" id="update_name" value={name} />
            <button onClick={() => HandleUpdatePost(name,user_id.value,1)} className="px-8 py-2 bg-blue-800 text-white mt-2 rounded-full">
            Submit
            <Toaster />
          </button>
        </div>
        }
        </>
    )

}
export default Buttons;