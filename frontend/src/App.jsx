
import { BrowserRouter, Routes, Route } from 'react-router'

import UserAuth from './components/UserAuth';
import Home from './components/Home';
import AdminLogin from './components/admin/AdminLogin';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userAuth' element={<UserAuth />} />

        <Route path='/adminLogin' element={<AdminLogin />} />
      </Routes>

    </ BrowserRouter>
  )
}

export default App;