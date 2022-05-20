import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Product } from "../components/pdp/Product";
import { Results } from "../components/results/Results";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Welcome } from "../components/welcome/Welcome";
import { SearchContext } from "../context/SearchContext";
import { NotFound } from "../components/notfound/NotFound";

export const AppRouter = () => {

    const [searchData, setSearchData] = useState({ query: '', data: '' })

    return (
        <SearchContext.Provider value={{
            searchData,
            setSearchData
        }}>
            <Header />
            <main>
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path="/" element={<Welcome />} />
                    <Route path="/items" element={<Results />} />
                    <Route path="/items/:id" element={<Product />} />
                </Routes>
            </main>
            <Footer />

        </SearchContext.Provider>
    )
}
