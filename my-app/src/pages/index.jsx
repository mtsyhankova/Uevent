import { useContext } from 'react';
import { Routes, Route } from "react-router";
import React from 'react';
import { Context } from "../";
import Homepage from "./Home/Homepage";
import NotFoundPage from "./Notfound/Notfoundpage";
import Productspage from "./Products/Productpage";
import Authpage from "./Authotization/Authpage";
import Regpage from "./Registration/Regpage";
import Recovery from "./Recovery/Recovery";
import Profile from "./Profile/Profile";
import EventOpened from "./EventOpened/EventOpened";
import CompaniesPage from "./Companies/Companiespage";
import NotificationsPage from "./Notifications/NotificationsPage";
import SettingCompanyPage from "./SettingCompany/SettingCompanyPage";
import ProfileSettingsPage from "./ProfileSettings/ProfileSettingsPage";
import EventSettingsPage from "./EventSettings/EventSettingsPage";
import NewCompany from "./NewCompanyPage/NewCompany";
import PaymentPage from "./Payment/PaymentPage";
import { NewEvent } from "./NewEventPage/NewEvent";
import { AdminPanelPage } from "./AdminPanel/AdminPanelPage";

export const Routing = () => {
    const { store } = useContext(Context)

    return (

        <Routes>
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/auth" element={<Authpage />} />
            <Route path="/reg" element={<Regpage />} />
            <Route path="/reset_password" element={<Recovery />} />

            <Route path="/" element={<Homepage />} />

            <Route path="/admin/panel" element={store.isAuth ? <AdminPanelPage /> : <NotFoundPage />} />

            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile/settings" element={store.isAuth ? <ProfileSettingsPage /> : <Authpage />} />

            <Route path="/companies/:idUs/:id" element={<CompaniesPage />} />  {/* ------------------------------------------------dwd */}
            <Route path="/company/setting" element={store.isAuth ? <SettingCompanyPage /> : <Authpage />} />
            <Route path="/company/new" element={store.isAuth ? <NewCompany /> : <Authpage />} />

            <Route path="/event/payment/:date/:name/:location/:city/:price" element={store.isAuth ? <PaymentPage /> : <Authpage />} />
            <Route path="/event/open/:date/:name/:location/:city/:price/:isSubscribed" element={<EventOpened />} />
            <Route path="/event/edit/:date/:name/:location/:city/:price" element={store.isAuth ? <EventSettingsPage /> : <Authpage />} />
            {/* потом тут будет только /:id и /:token */}
            <Route path="/event/:idCAt" element={<Productspage />} />
            <Route path="/event/new" element={store.isAuth ? <NewEvent /> : <Authpage />} />
        </Routes>

    );
};