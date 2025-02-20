
import { BrowserRouter, Routes, Route } from 'react-router'

import UserAuth from './components/user/UserAuth';
import Home from './components/Home';

import AdminAuth from './components/admin/AdminAuth';
import Dashboard from './components/admin/Dashboard';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userAuth' element={<UserAuth />} />

        <Route path='/adminAuth' element={<AdminAuth />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </ BrowserRouter>
  )
}

export default App;