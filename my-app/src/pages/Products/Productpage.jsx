import React from 'react';
// import { Link } from 'react-router-dom'
import { ProductItemsCat } from '../../widgets/Product/EventItemCat/product-item-cat';
import { SortCategoru } from '../../widgets/Product/FormSortCat';
import { NavBar } from '../../widgets/User/NavBar'

// import "./style.css"

export const Productspage = () => {
    return (
        <div >
            <NavBar />
            <SortCategoru />
            <ProductItemsCat areYouAuthor={false} />
        </div>
    )
}
export default Productspage;