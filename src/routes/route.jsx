import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Works from "../pages/Works"
import Sobre from "../pages/Sobre"
import ScrollToTop from "../components/ScrollToTop"

const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trabalhos" element={<Works />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </Router>
    )
}

export default AppRouter