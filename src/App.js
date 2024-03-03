import './App.css';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/shop';
import Product from './pages/product';
import Footer from './component/Footer/Footer'
import Headphone from './pages/Headphone';
import Speaker from './pages/Speaker';
import Earphone from './pages/Earphone';
import CheckOut from './component/CheckOut/CheckOut.';

function App() {
  return (
     <div>
      <BrowserRouter>
       <NavBar />
       <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/headphone' element={<Headphone  category='headphones'/>}/>
        <Route path='/speaker' element={<Speaker category='speakers'/>}/>
        <Route path='/earphone' element={<Earphone category='earphones'/>}/>
        <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/checkout' element={<CheckOut />} />
       </Routes>
       <Footer />
       </BrowserRouter>
     </div>
  );
}

export default App;
