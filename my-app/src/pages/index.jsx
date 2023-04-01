import { Routes, Route } from "react-router";
// import { lazy } from "react";
import Homepage from "./Home/Homepage"
import Notfoundpage from "./Notfound/Notfoundpage"
import Productspage from "./Products/Productpage";
import Authpage from "./Authotization/Authpage"
import Regpage from "./Registration/Regpage"

// const Homepage = lazy(() => import("./Home/Homepage"));
// const Notfoundpage = lazy(() => import("./Notfound/Notfoundpage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<Authpage />} />
            <Route path="/reg" element={<Regpage />} />
            <Route path="*" element={<Notfoundpage />} />
            <Route path="/products/:idCAt" element={<Productspage />} />
        </Routes>
    );
};