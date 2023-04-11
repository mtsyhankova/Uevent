import { Routes, Route } from "react-router";
// import { lazy } from "react";
import Homepage from "./Home/Homepage"
import Notfoundpage from "./Notfound/Notfoundpage"
import Productspage from "./Products/Productpage";
import Authpage from "./Authotization/Authpage"
import Regpage from "./Registration/Regpage"
import Recovery from "./Recovery/Recovery";
import Profile from "./Profile/Profile";
import EventOpened from "./EventOpened/EventOpened";
import Companies from "./Companies/Companiespage";

// const Homepage = lazy(() => import("./Home/Homepage"));
// const Notfoundpage = lazy(() => import("./Notfound/Notfoundpage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="*" element={<Notfoundpage />} />

            <Route path="/auth" element={<Authpage />} />
            <Route path="/reg" element={<Regpage />} />
            <Route path="/reset_password" element={<Recovery />} />

            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/companies" element={<Companies />} />


            <Route path="/event/open/:date/:name/:location/:city/:price" element={<EventOpened />} />
            {/* потом тут будет только /:id */}

            <Route path="/products/:idCAt" element={<Productspage />} />
        </Routes>
    );
};