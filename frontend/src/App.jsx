import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

function App() {

    return (
        <Router>
            <Navbar/>

            {/* Add top padding so content is not hidden behind navbar */}
            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
