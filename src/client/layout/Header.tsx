import { SearchBox } from "../components/search/SearchBox"
//@ts-ignore
import logo from '../assets/Logo_ML.png'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="navBar">
            <div className="navBar__container">
                <Link to="/" className="navBar__logo">
                    <img src={logo} alt="Mercado Libre logo" width="53" height="36" loading="lazy" />
                </Link>
                <SearchBox />
            </div>
        </header>
    )
}
