import { Outlet } from "react-router-dom"
import Navbar from "../../common/components/Navbar"
import Footer from "../../common/components/Footer"

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard