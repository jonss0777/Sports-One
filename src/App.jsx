import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header'
import Profile from './Profile';
import Login from './Login';
import { Routes } from 'react-router-dom';
import Register from './Register';
import Search from './Search';
import About from './About'
import LeagueInformation from './LeagueInformation'
import Dashboard from './Dashboard';
import Settings from './Settings';
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route element={<AuthLayout />}> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* </Route> */}
        <Route element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search/:country/:sportName" element={<Search />} />
          <Route path="leagueinformation" element={<LeagueInformation />} />


          <Route path="settings" element={<Settings />}></Route>

        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App