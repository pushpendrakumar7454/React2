import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navvar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {!loading && <Navbar />}

      {!loading && (
        <main>
          <Outlet />
        </main>
      )}
      <Footer/>
      

    </div>
  );
};

export default Layout;