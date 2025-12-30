import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-red-500 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/create">Add Listing</Link>
    </nav>
  );
}
