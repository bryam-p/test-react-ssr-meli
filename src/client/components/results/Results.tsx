import { useFetchSearch } from "../../hooks/useFetchSearch"
import { DataFetch } from "../../types/search"
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, memo } from "react"
import { SearchContext } from "../../context/SearchContext"
import { Breadcrumb } from "../breadcrumb/Breadcrumb"
import { ResultScreen } from "./ResultScreen"
import SkeletonSearch from "./SkeletonSearch"


export const Results = memo(function Results() {

    const location = useLocation()
    const searchParams = location.search.split('=')[1]

    const { searchData, setSearchData } = useContext(SearchContext)

    const searchValidation = searchData.query ? searchData.query : searchParams

    const { data: results, loading }: DataFetch = useFetchSearch(searchValidation)

    useEffect(() => {
        setSearchData({ ...searchData, data: results })
    }, [results])

    return (
        <>
            <Breadcrumb breadName={results?.categories?.values} />

            <section className="querySearch">
                Busqueda:
                <h1>{results?.query}</h1>
            </section>

            {
                loading ?
                    <>
                        <SkeletonSearch />
                        <SkeletonSearch />
                        <SkeletonSearch />
                        <SkeletonSearch />
                    </>
                    :
                    <ol className="results">
                        {results?.items?.map(item => (
                            <ResultScreen key={item.id} {...item} />
                        ))}
                    </ol>

            }
        </>
    )
})


