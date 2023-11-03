import {showEditForm} from "../utils/uiSlice"
import { useDispatch ,useSelector } from "react-redux";
import {getEntry,deleteEntry} from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";


function DiaryEntryList(props) {
  const navigate = useNavigate();
    const entry = useSelector((state) => state.cart.DiaryItem);

  const dispatch = useDispatch();
  const showEditFormHandler = () => {
    //show entry data
    dispatch(showEditForm());
    // for editing
    dispatch(getEntry(props.id));
    console.log(entry);
    navigate('/editentry')
  };
  
  const deleteHandler = () => {
    dispatch(deleteEntry(props.id));
  };

  return (
    <>
   
      <div className="max-w-2xl mx-auto pb-2">
          <div className="w-full  p-6 bg-purple-200  rounded-lg shadow" >
          <div>
          <h3 className="mb-3 border-b-2  border-gray-700 pb-3"><b>Date:</b> {props.date}</h3>
          <h2 className="mb-3 text-lg "><b>Title:</b> {props.title}</h2>
          <p className="mb-5"><b>Content:</b> {props.desc}</p>
          </div>
        <div className="">
          <button
            type="button"
            onClick={showEditFormHandler}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete
          </button>
        
        </div>
      </div>
      </div>
    </>
  );
}
export default DiaryEntryList;
