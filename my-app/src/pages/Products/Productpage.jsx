import React from 'react';
import { Link } from 'react-router-dom'
import { ProductItemsCat } from '../../widgets/Product/EventItemCat/product-item-cat';
import { SortCategoru } from '../../widgets/Product/FormSortCat';
import { NavBar } from '../../widgets/User/NavBar'

import "./style.css"

export const Notfoundpage = () => {

    return (
        <div >
            <NavBar />
            <SortCategoru />
            <ProductItemsCat />

        </div>
    )
}
export default Notfoundpage;