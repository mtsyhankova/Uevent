import { Routes, Route } from "react-router";
import React from 'react';
import Homepage from "./Home/Homepage";
import NotFoundPage from "./NotFound/NotFoundPage";
import Productspage from "./Products/Productpage";
import Authpage from "./Authotization/Authpage";
import Regpage from "./Registration/Regpage";
import Recovery from "./Recovery/Recovery";
import Profile from "./Profile/Profile";
import EventOpened from "./EventOpened/EventOpened";
import CompaniesPage from "./Companies/CompaniesPage";
import NotificationsPage from "./Notifications/NotificationsPage";
import SettingCompanyPage from "./SettingCompany/SettingCompanyPage";
import ProfileSettingsPage from "./ProfileSettings/ProfileSettingsPage";
import EventSettingsPage from "./EventSettings/EventSettingsPage";
import NewCompany from "./NewCompanyPage/NewCompany";
import PaymentPage from "./Payment/PaymentPage";
import { NewEvent } from "./NewEventPage/NewEvent";

export const Routing = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/auth" element={<Authpage />} />
            <Route path="/reg" element={<Regpage />} />
            <Route path="/reset_password" element={<Recovery />} />

            <Route path="/" element={<Homepage />} />

            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile/settings" element={<ProfileSettingsPage />} />

            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/company/setting" element={<SettingCompanyPage />} />
            <Route path="/company/new" element={<NewCompany />} />

            <Route path="/event/payment/:date/:name/:location/:city/:price" element={<PaymentPage />} />
            <Route path="/event/open/:date/:name/:location/:city/:price/:isSubscribed" element={<EventOpened />} />
            <Route path="/event/edit/:date/:name/:location/:city/:price" element={<EventSettingsPage />} />
            {/* потом тут будет только /:id и /:token */}
            <Route path="/event/:idCAt" element={<Productspage />} />
            <Route path="/event/new" element={<NewEvent />} />
        </Routes>
    );
};