export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-12 py-4 flex justify-between items-center">
            <div className="font-bold text-2xl">KlimaBg</div>
            <div className="space-x-6 text-lg">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Products</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </nav>
    );
}
