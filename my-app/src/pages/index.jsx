import { Routes, Route } from "react-router";
// import { lazy } from "react";
import Homepage from "./Home/Homepage"
import NotFoundPage from "./NotFound/NotFoundPage"
import Productspage from "./Products/Productpage";
import Authpage from "./Authotization/Authpage"
import Regpage from "./Registration/Regpage"
import Recovery from "./Recovery/Recovery";
import Profile from "./Profile/Profile";
import EventOpened from "./EventOpened/EventOpened";
import CompaniesPage from "./Companies/CompaniesPage";
import NotificationsPage from "./Notifications/NotificationsPage";
import EventNewPage from "./EventNew/EventNewPage";

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
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />


            <Route path="/event/open/:date/:name/:location/:city/:price" element={<EventOpened />} />
            {/* потом тут будет только /:id */}

            <Route path="/products/:idCAt" element={<Productspage />} />
        </Routes>
    );
};