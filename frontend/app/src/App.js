import './App.css';
import Header from './Components/header/Header1'
import Hello from './Hello';
import { Viewp } from './Pages/ViewProfile/Viewp';
import  Edit  from './Pages/EditProfile/Edit.jsx';
import Homepage from './Pages/login/login';
import Login from './Pages/login/login';
import Register from './Pages/register/register';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Phead/Fh';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setLoginUser] = useState({ _id: null });

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/">
              {user && user._id !== null ? (
                <Route index element = {<Homepage setLoginUser={setLoginUser} />}/>
                
              ) : (
                <Route path = "login" element = {<Login setLoginUser={setLoginUser} />}/>
              )}
              {console.log(setLoginUser)}
        </Route>

              
          < Route exact path="/login" element ={ <Login setLoginUser={setLoginUser}/>} />
          < Route exact path="/register" element = {<Register />}/>

        <Route exact path ="/" element={<Header/>}/>
        <Route exact path ="/hello" element={<Hello/>}/>
        <Route exact path ="/viewp" element={<Viewp/>}/>
        <Route exact path ="/edit" element={<Edit/>}/>
        <Route exact path ="/footer" element={<Footer/>}/>
        <Route exact path ="/navbar" element={<Navbar/>}/>


        



        </Routes>
      </Router>
      {/* <Header/> */}
    </div>
  );
}

export default App;
