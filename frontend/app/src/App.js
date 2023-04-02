import './App.css';
import Header from './Components/header/Header1';
import Hello from './Hello';
import { Viewp } from './Pages/ViewProfile/Viewp';
import Edit from './Pages/EditProfile/Edit.jsx';
import Homepage from './Pages/login/login';
import Login from './Pages/login/login';
import Register from './Pages/register/register';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Phead/Fh';
import Home2 from './Pages/H2/Home2';
import ReviewsProfile from './Pages/ReviewsProfile/ReviewsProfile';
import CreatePost from './Pages/AddPost/Addpost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditPost from './Pages/EditPost/Editpost'

// Moez extra
import Viewpost from './Pages/Viewpost/Viewpost';
import Addpost from './Pages/AddPost/Addpost';

function App() {
  const [user, setLoginUser] = useState({ _id: null });

  return (
    <div className='App'>
      {/* <h1>Landing Page</h1> */}
      <Router>
        <Routes>
          <Route exact path='/'>
            {user && user._id !== null ? (
              <Route index element={<Homepage setLoginUser={setLoginUser} />} />
            ) : (
              <Route
                path='login'
                element={
                  <Login
                    style={{ background: '#FAFAF7' }}
                    setLoginUser={setLoginUser}
                  />
                }
              />
            )}
            {console.log(setLoginUser)}
          </Route>

          <Route
            exact
            path='/login'
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route exact path='/register' element={<Register />} />

          <Route exact path='/' element={<Header />} />
          <Route exact path='/hello' element={<Hello />} />
          <Route exact path='/viewp' element={<Viewp />} />
          <Route exact path='/edit' element={<Edit />} />
          <Route exact path='/footer' element={<Footer />} />
          <Route exact path='/navbar' element={<Navbar />} />
          <Route exact path='/home' element={<Home2 />} />
          <Route exact path='/createPost' element={<CreatePost />} />

          <Route exact path='/Viewpost' element={<Viewpost />} />
          <Route exact path='/Addpost' element={<Addpost />} />
          <Route exact path='/Editpost' element={<EditPost />} />

          <Route exact path='/ReviewsP' element={<ReviewsProfile />} />
        </Routes>
      </Router>
      {/* <Header/> */}
    </div>
  );
}

export default App;
