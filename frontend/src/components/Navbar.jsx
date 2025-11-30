import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        KlimaBg
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </div>

                </div>
            </div>
        </nav>

    );
}
