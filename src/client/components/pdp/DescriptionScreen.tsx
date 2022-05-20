import React from 'react'

interface Props {
    description: string
}

export const DescriptionScreen = ({ description }: Props) => {
    return (
        <>
            <div className="title">
                Descripción del producto
            </div>
            <div className="info">
                {description}
            </div>
        </>
    )
}
