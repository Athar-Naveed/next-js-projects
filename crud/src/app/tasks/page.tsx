import { Navigation } from "../files/Navigation";
import { client } from "@/lib/sanityClient";
const revalidate = 30;
const getData = async () => {
  const resp = await client.fetch(`*[_type == 'data']`, {
    revalidate: revalidate,
  });
  return resp;
};
export default async function Tasks() {
  const data = await getData();
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="text-center text-lg italic underline uppercase font-bold my-10">
        All the Tasks will be displayed here.
      </div>
      <div className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 mx-4">
        {data.map((task: any) => (
          <div
            key={task._id}
            className="bg-gray-900 border border-blue-500 p-4 mx-1"
          >
            <div className="image"></div>
            <div className="description">
              <span>{task.description}</span>
            </div>
            <div className="heading">
              <span>~{task.first_name}</span>
              <span>&nbsp;{task.last_name}</span>
            </div>
            <div className="time">
              <span>Time: {task.time}</span> <br />
              <span>Updated at: {task._updatedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
