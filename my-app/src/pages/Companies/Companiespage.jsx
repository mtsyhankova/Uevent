import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { MainCardCompany } from '../../widgets/Company/MainCardCompany';
import { NewCompany, NewEvent } from '../../widgets/Company/ButtonNew';
import { ProductItemsCat } from '../../widgets/Product/EventItemCat';


export const CompaniesPage = () => {
    return (
        <div >
            <NavBar />
            <MainCardCompany />
            <NewCompany />
            <NewEvent />
            <ProductItemsCat areYouAuthor={true} />
        </div>
    )
}
export default CompaniesPage;