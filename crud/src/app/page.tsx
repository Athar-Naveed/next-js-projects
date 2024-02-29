import Form from "./files/Form";
import UserData from "./files/UserData";
import { Navigation } from "./files/Navigation";
export default function Home() {
  return (
    <>
      <Navigation />
      <h1 className="text-center text-2xl font-semibold">
        Testing CRUD operations
      </h1>
      <div className="my-10">
        <Form />
      </div>
      <div className="display-data">
        <div className="heading text-2xl text-center font-semibold">
          <span>Display Data</span>
        </div>

        <UserData />
      </div>
    </>
  );
}
