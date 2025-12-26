import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-0">
                        <img src="/media/logo/klima-logo.png" alt="KlimaBg" className="h-26 w-auto" />
                        <span className="text-3xl font-bold text-blue-600">KlimaBg</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Начало</Link>
                        <Link to="/products" className="text-gray-700 hover:text-blue-600">Продукти</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Контакти</Link>
                    </div>

                </div>
            </div>
        </nav>

    );
}
