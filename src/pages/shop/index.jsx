import React from 'react'
import { useParams } from 'react-router'

const Shop = () => {
    const category = useParams()
    console.log(category)
    return (
        <div>
            <h1>this is  page</h1>
        </div>
    )
}

export default Shop
