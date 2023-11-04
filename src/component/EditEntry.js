import { useState } from "react";
import { updateEntry } from "../utils/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import {showEntries} from "../utils/uiSlice";
import { useNavigate } from "react-router-dom";

function EditEntry() {
    const navigate = useNavigate();
    const entry = useSelector((state) => state.cart.diaryItem);

    const [title,setTitle] = useState(entry.title);
    const [desc,setDesc] = useState(entry.desc);
    


    const dispatch = useDispatch();

    const saveBtn = (event)=>{
        event.preventDefault();
        console.log(title,desc)
        dispatch(updateEntry({
          id: entry.id,
          title: title,
          date: entry.date,
          desc: desc,
        }));
        dispatch(showEntries());
        navigate('/myentries')
   
    }
    const showEntriesHandler = () => {
        dispatch(showEntries());
           navigate('/myentries')
      };
  return (
    <>

      <div className="max-w-[50%] mx-auto mt-24 mb-5">
        <div className="w-full  p-6 bg-purple-200  rounded-lg shadow ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            Add Entry
            </h5>
         <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Title:
                </label>
                <input onChange={(e)=>setTitle(e.target.value)} name="title" value={title} className=" appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-300"  type="text" placeholder=""/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Content:
                </label>
                <textarea rows="4" name="desc" onChange={(e)=>setDesc(e.target.value)} value={desc} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." >

                </textarea>
               
            </div>
          
          <div className="">
           
            <button
              type="button"
              onClick={saveBtn}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Save
            </button>
           
  
            <button
              type="button"
              onClick={showEntriesHandler}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Cancel
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default EditEntry;
