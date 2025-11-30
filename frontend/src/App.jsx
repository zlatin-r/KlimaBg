import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <HomePage />
        </div>
    );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
//
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 {/* You can add more routes here later */}
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;
