import { Navigation } from "../files/Navigation";
export default async function Wall() {
  const resp = await fetch("http://localhost:3000/api/get", {
    cache: "no-cache",
  });
  if (resp.ok) {
    const data = await resp.json();
    return (
      <>
        <Navigation />
        <div className="container">
          <h1 className="text-center text-2xl font-semibold font-serif">
            What Our Customers Say!
          </h1>
        </div>
        <div className="display-data grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {data.users.rows.map((user: any) => (
            <div
              key={user.id}
              className="mx-1 w-[90%] h-fit rounded-lg selection:text-black text-sm text-white my-12 p-4 bg-gradient-to-r from-blue-800 to-indigo-900"
            >
              <span>{user.message}</span>
              <br />
              <br />
              <span className="float-right">&quot;{user.user_name}&quot;</span>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navigation />
        <div className="text-center text-2xl font-medium">No Data Found!</div>
      </>
    );
  }
}
