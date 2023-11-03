
import Menu from './component/Menu';
import { Route,  Routes} from 'react-router-dom';
import AddEntry from './component/AddEntry';
import MyEntries from './component/MyEntries';
import { Provider } from 'react-redux';
import store from './utils/store';
import DiaryEntryList from './component/DiaryEntryList';
import EditEntry from './component/EditEntry';
import Home from './component/Home';
import SignIn from './component/SignIn';

function App() {
  return (

    <div className="">
    
      <div className="w-full bg-no-repeat bg-cover bg-center h-[100%] min-h-[100vh]" style={{backgroundImage:'url("../images/bg-diary.png")'}}> 
    
        <Provider store={store}>
        <Menu/>
          <Routes>
            <Route path="/addentry" element={<AddEntry />} />
            <Route path="/myentries" element={<MyEntries/>} />
            <Route path="/entrylist" element={<DiaryEntryList/>} />
            <Route path="/editentry" element={<EditEntry/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </Provider>
      </div>
    </div>
  );
}

export default App;
