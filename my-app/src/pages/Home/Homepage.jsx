import React from 'react';
// import { Link } from 'react-router-dom'
import { NavBar } from '../../widgets/User/NavBar'
import { HeaderBaner } from '../../widgets/User/HeaderBaner'
import { MainPageCatList } from '../../widgets/Product/MainPageCatList/mainpage_cat_list'
import { Footer } from '../../widgets/User/Footer';
import { AdminButton } from '../../widgets/User/AdminButton';
const Homepage = () => {
    return (
        <div >
            <NavBar />
            <HeaderBaner />
            <MainPageCatList />
            <AdminButton />
            <Footer />
        </div>
    )
}
export default Homepage;