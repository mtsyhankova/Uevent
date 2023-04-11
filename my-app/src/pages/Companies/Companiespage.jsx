import React from 'react';
// import { Link } from 'react-router-dom'
import { SortCategoru } from '../../widgets/Product/FormSortCat';
import { NavBar } from '../../widgets/User/NavBar'
import { MainCardCompane } from '../../widgets/Companie/MainCardCompane';
import { NewCompane, NewProduct } from '../../widgets/Companie/ButtonNew';
import { ProductItemsCat } from '../../widgets/Product/EventItemCat';

// import "./style.css"

export const Companies = () => {
    return (
        <div >
            <NavBar />
            <MainCardCompane />
            <NewCompane />
            <NewProduct />
            <ProductItemsCat areYouAuthor={true} />
        </div>
    )
}
export default Companies;