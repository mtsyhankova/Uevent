import { Routes, Route } from "react-router";
// import { lazy } from "react";
import Homepage from "./Home/Homepage";
import NotFoundPage from "./NotFound/NotFoundpage";
import Productspage from "./Products/Productpage";
import Authpage from "./Authotization/Authpage";
import Regpage from "./Registration/Regpage";
import Recovery from "./Recovery/Recovery";
import Profile from "./Profile/Profile";
import EventOpened from "./EventOpened/EventOpened";
import CompaniesPage from "./Companies/CompaniesPage";
import NotificationsPage from "./Notifications/NotificationsPage";
// import EventNewPage from "./EventNew/EventNewPage";
import SettingCompanyPage from "./SettingCompany/SettingCompanyPage";
import ProfileSettingsPage from "./ProfileSettings/ProfileSettingsPage";
import EventSettingsPage from "./EventSettings/EventSettingsPage";
import NewCompany from "./NewCompanyPage/NewCompany";
import { NewEvent } from "./NewEventPage/NewEvent";

// const Homepage = lazy(() => import("./Home/Homepage"));
// const Notfoundpage = lazy(() => import("./Notfound/Notfoundpage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/auth" element={<Authpage />} />
            <Route path="/reg" element={<Regpage />} />
            <Route path="/reset_password" element={<Recovery />} />

            <Route path="/" element={<Homepage />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile/settings" element={<ProfileSettingsPage />} />

            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/company/setting" element={<SettingCompanyPage />} />
            <Route path="/company/new" element={<NewCompany />} />


            <Route path="/event/open/:date/:name/:location/:city/:price" element={<EventOpened />} />
            <Route path="/event/edit/:date/:name/:location/:city/:price" element={<EventSettingsPage />} />
            {/* потом тут будет только /:id */}
            <Route path="/event/:idCAt" element={<Productspage />} />
            <Route path="/event/new" element={<NewEvent />} />
        </Routes>
    );
};