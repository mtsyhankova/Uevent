import { Routes, Route } from "react-router";
import { lazy } from "react";

const Homepage = lazy(() => import("./Home/Homepage"));
const Notfoundpage = lazy(() => import("./Notfound/Notfoundpage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Notfoundpage />} />
        </Routes>
    );
};