import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AddressContextProvider } from './contexts/AddressContext'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <BrowserRouter>
      <AddressContextProvider>
        <div className="flex min-h-screen items-center justify-center flex-col bg-gradient-to-br from-[#1a1a2e] to-[#16213e] px-4 py-12 sm:px-6 lg:px-8">
          <Router />
        </div>
        <Toaster />
      </AddressContextProvider>
    </BrowserRouter>
  )
}

export default App
