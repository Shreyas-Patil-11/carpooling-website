import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { Button } from "./components/ui/button"
import Home from "./pages/Home"
import Error from "./pages/Error"
import OfferSeat from "./pages/OfferSeat"
import RideDetail from "./pages/RideDetail"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"
import SearchPage from "./pages/SearchPage"

function App() {

  return (
    <div className="min-h-screen bg-muted/30">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<Error />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/offer-seat" element={<OfferSeat />}/>
        <Route path="/ride/:rideId" element={<RideDetail />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
