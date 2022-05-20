import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { SearchContext } from "../../context/SearchContext";
//@ts-ignore
import logo from '../../assets/ic_Search.png';


export const SearchBox = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { searchData, setSearchData } = useContext(SearchContext)

    const { search } = queryString.parse(location.search)

    const initialValue = search ? search : ''

    const [formValues, handleInputChange, reset] = useForm({
        search: initialValue
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { search } = formValues
        navigate({
            pathname: '/items',
            search: `?search=${search}`
        })
        setSearchData({ ...searchData, query: search })
        reset
    }

    return (
        <form onSubmit={handleSubmit} className="navBar__container--search">
            <input
                type="text"
                placeholder="Nunca dejes de buscar"
                name="search"
                onChange={handleInputChange}
                value={formValues.search}
                className="navBar__container--box"
            />
            <button type="submit" className="navBar__container--btn-search">
                <img src={logo} alt="lens" width="18" height="18" loading="lazy" />
            </button>
        </form>
    )
}


