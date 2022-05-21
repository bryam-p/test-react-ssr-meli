import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

export const Footer = () => {

    const { searchData } = useContext(SearchContext)

    const { data } = searchData

    console.log(searchData)

    return (
        <footer className="footer">Autor: {data?.author?.name} {data?.author?.lastname}</footer>
    )
}
