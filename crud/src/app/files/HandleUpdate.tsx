import toast from "react-hot-toast";
const HandleUpdatePost = async (name:any,id:any,token:any)=>{
    const resp = await fetch('http://localhost:3000/api',{
        method:'POST',
        cache:'no-cache',
        body:JSON.stringify({
            'name':name,
            'user_id':id,
        })
    })
    const response = await resp.json();
    if(response.data.rowCount < 1){
        toast.error("No Data Found!",{
            duration : 1500,
            position:'top-center'
        })
    }
    else if(resp.status == 201){
        toast.success("Data Updated Successfully!",{
            duration : 1500,
            position:'top-center'
        })
        location.reload();
    }
    const respond = response.data.rows.map((item:any)=>item.user_name);
    return respond;
}

export default HandleUpdatePost;