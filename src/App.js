
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';

import Blog from './Components/Blog/Blog';
import Context from './Components/Context/Context';
import Dashboard from './Components/Dashboard/Dashboard';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';
import Semantic from './Components/Semantic/Semantic';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        {/* <Route path='/areachart' element={<AreaChart></AreaChart>}></Route> */}
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/semantic' element={<Semantic/>}></Route>
        <Route path='/context' element={<Context/>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
