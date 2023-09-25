import { fakeUserData } from "./Chance";
import UserDelete from "./UserDelete";
import { addUser, removeUser, clearUsers } from "./UserSlice";
import { useDispatch, useSelector } from "react-redux";

function UserDetails() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.users);
  console.log(data);

  function addNewUser(name) {
    dispatch(addUser(name));
  }

  function deleteSingleUser(id) {
    dispatch(removeUser(id));
  }

  function clearAllUser() {
    dispatch(clearUsers());
  }

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="border-2 rounded-xl border-black shadow-2xl p-6 ">
        <h1 className="m-1 font-bold text-xl">Redux Toolkit Practice</h1>
        <button
          className="p-2 m-2 my-4 ml-12 rounded-2xl border-2 bg-slate-400 text-white   "
          onClick={() => addNewUser(fakeUserData())}
        >
          Add New User
        </button>
        <div>
          <ul>
            <h1 className="text-center font-bold text-white bg-emerald-600 rounded-2xl p-2">
              List of Users
            </h1>
            {data.length > 0 &&
              data.map((obj, id) => (
                <li key={id}>
                  {obj}
                  <button
                    className="p-1 rounded-2xl m-1  border-2 bg-slate-400 text-white"
                    onClick={(id) => deleteSingleUser(id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
          <hr />
        </div>
        <button
          className="p-2 ml-12 m-2 my-4 rounded-2xl  border-2 bg-slate-400 text-white  "
          onClick={() => clearAllUser()}
        >
          Clear All User
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
