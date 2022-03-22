import * as React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
    return (
        <header className="font-Titillium">
            <div className="flex justify-around hover:bg-black hover:text-white">
                <h3 className="font-black text-4xl tracking-widest text-justify">
                    <Link to="/">{title}</Link>
                </h3>
            </div>
            <nav className="">
                <ul className="grid grid-cols-2 divide-x boder-solid text-center">
                    <li className="border-y">
                        <Link to="/">TOP</Link>
                    </li>
                    <li className="border-y">
                        <Link to="/">LOG</Link>
                    </li>
                    <li className="border-b">
                        <Link to="/">TEXTS</Link>
                    </li>
                    <li className="border-b">
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header