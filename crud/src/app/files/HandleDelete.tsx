import toast from "react-hot-toast";
const HandleDelete = async (id:any) =>{
    const resp = await fetch('http://localhost:3000/api/',{
        method:'DELETE',
        body:JSON.stringify({
            'user_id':id
        })
    })
    if(resp.ok){
        toast.success('Data Deleted Successfully!',{
            position:'top-center',
            duration:1500
        })
        location.reload();
    }
    else{
        toast.error('Data Not Found!',{
            position:'top-center',
            duration:1500
        })
        location.reload();
    }
}
export default HandleDelete;