import { Outlet } from "react-router";
import Navvar from "../compononets/Navvar";



const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
     <Navvar/>

      <main className="lg:ml-72 p-5 md:p-8">
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
