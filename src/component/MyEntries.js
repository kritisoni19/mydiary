

import { useSelector } from "react-redux";
import DiaryEntryList from './DiaryEntryList';
import { Link } from "react-router-dom";
function MyEntries() {
  const entries = useSelector((state) => state.cart.diaryList);

 


  return (
    <>
      <div className="max-w-2xl mx-auto pt-24 mb-5">
      <div className="mb-6">
    <Link
                    to="/addentry"
                    className=" bg-[antiquewhite] text-black focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Add New Entry
                  </Link>
    </div>
      {
      entries.map((entry)=>{
        return(
          <DiaryEntryList
            key={entry.id}
            id={entry.id} 
            title={entry.title}
            date={entry.date}
            desc={entry.desc}
           
           ></DiaryEntryList>
        )
      })
    }
      
      </div>
    </>
  );
}
export default MyEntries;
