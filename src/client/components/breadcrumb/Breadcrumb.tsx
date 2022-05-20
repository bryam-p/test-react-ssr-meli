import { useEffect, useState } from "react"
import { Value } from "../../types/search"

interface Props {
    breadName: Value[];
}

export const Breadcrumb = ({ breadName }: Props) => {

    const [breads, setBreads] = useState(undefined as Value[] | undefined)

    useEffect(() => {
        setBreads(breadName)
    }, [breadName])

    const separator =
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" className="breadcrumb__category--separator">
            <path fill="none" stroke="#666" d="M1 0l4 4-4 4">
            </path>
        </svg>

    return (
        <section className="breadcrumb">
            {
                breads?.map(({ id, name }) => (
                    <span
                        key={id}
                        className="breadcrumb__category">
                        {name} {name && separator}
                    </span>
                ))
            }
        </section >
    )
}
