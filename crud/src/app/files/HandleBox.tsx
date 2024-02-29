import toast from "react-hot-toast";
const HandleCart = async (user:any,message:any) =>{
const res = await fetch('api/',{
    method:"POST",
    body:JSON.stringify({
        'name':user,
        'message':message,
    })
})
if(res.ok){
    toast.success('Data Insertion Success!',{
        duration:1500,
        position:'top-center'
    })
    
    location.reload();
}
else{
    toast.error('Data Insertion Failed!',{
        duration:1500,
        position:'top-center'
    })
    location.reload();
}
}

export default HandleCart;