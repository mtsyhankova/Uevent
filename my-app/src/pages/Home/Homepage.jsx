import React from 'react';
// import { Link } from 'react-router-dom'
import { NavBar } from '../../widgets/User/NavBar'
import { HeaderBaner } from '../../widgets/User/HeaderBaner'
import { EventList } from '../../widgets/Product/EventList'
import { Footer } from '../../widgets/User/Footer';
// import UncontrolledExample from '../../widgets/User/HeaderBaner/header-baner'

const Homepage = () => {
    return (
        <div >
            <NavBar />
            {/* {UncontrolledExample()}
            <UncontrolledExample /> */}
            <HeaderBaner />
            <EventList />
            <Footer />
        </div>
    )
}
export default Homepage;