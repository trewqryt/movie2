import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import BasketList from './pages/BasketList.jsx';
import BasketDetail from './pages/BasketDetail.jsx';
import CreateOrder from './pages/CreateOrder.jsx';
import UpdateOrder from './pages/UpdateOrder.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/basket" element={<BasketList />} />
          <Route path="/basket/:id" element={<BasketDetail />} />
          <Route path="/order/create" element={<CreateOrder />} />
          <Route path="/order/update/:id" element={<UpdateOrder />} />
          <Route path="/orders" element={<UpdateOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;