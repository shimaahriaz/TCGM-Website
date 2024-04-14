import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader";


const Home = lazy(() => import("../Pages/Home/Home"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));


const RouterPages = () => {

    return(
     <>
     <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "*" element= {<NotFound />} />
      </Routes>
      <Footer />
      </Suspense>
    </>
    );
}

export default RouterPages;