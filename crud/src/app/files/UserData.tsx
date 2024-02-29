import Buttons from "./Buttons";
const UserData = async () => {
const resp = await fetch('http://localhost:3000/api/get',{cache:'no-cache'});
  if (resp.ok){
const data = await resp.json();

return (
    <>
      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-black">
          {/* Rendering data here */}
          <tbody>
            {data.users.rows.map((user: any) => (
              // Putting user_id as the unique key to access and display data
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                  {user.user_name}
                </th>
                <td className="px-6 py-4">
                  <Buttons value={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
else{
  return(
  <div className="text-lg font-semibold font-serif ml-2">
    No Data to Show
    </div>
  ) 
}
};
export default UserData;
