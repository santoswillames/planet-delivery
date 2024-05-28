import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateAddress } from './pages/CreateAddress'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-address" element={<CreateAddress />} />
    </Routes>
  )
}
