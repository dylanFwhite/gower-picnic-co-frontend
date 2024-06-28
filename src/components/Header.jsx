import { Link } from "react-router-dom";

export default function Header () {
    return (
        <div className="flex items-center justify-between bg-slate-300">
            <Link to="/">home</Link>
            <Link to="/shop">shop</Link>
            <Link to="/recipes">recipes</Link>
            <Link to="/about">about</Link>
        </div>
    )
}