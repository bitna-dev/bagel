import Club from '@pages/Club'
import Community from '@pages/Community'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import SellNBuy from '@pages/SellNBuy'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/club" Component={Club} />
        <Route path="/community" Component={Community} />
        <Route path="/sellnbuy" Component={SellNBuy} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </>
  )
}

export default App
