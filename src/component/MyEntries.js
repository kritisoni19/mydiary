

import { useSelector } from "react-redux";
import DiaryEntryList from './DiaryEntryList';

function MyEntries() {
  const entries = useSelector((state) => state.cart.diaryList);

 


  return (
    <>
      <div className="max-w-2xl mx-auto pt-24 mb-5">
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
