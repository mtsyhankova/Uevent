import React from 'react';
// import { Link } from 'react-router-dom'
import { NavBar } from '../../widgets/User/NavBar'
// import { HeaderBaner } from '../../widgets/User/HeaderBaner'
// import { EventList } from '../../widgets/Product/EventList'
import { Footer } from '../../widgets/User/Footer';
import { ProfileCard } from '../../widgets/User/ProfileCard/profile-card';
// import UncontrolledExample from '../../widgets/User/HeaderBaner/header-baner'

const Profile = () => {
    return (
        <div >
            <NavBar />
            <ProfileCard />
            <Footer />
        </div>
    )
}
export default Profile;