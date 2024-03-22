import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Home = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex flex-col transition-all dark:text-white duration-300 dark:transition-all dark:duration-500 dark:bg-gray-700 min-h-screen">
      <div className="dark:bg-slate-900  h-[70px] bg-zinc-200 duration-300">
        <Header
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
      <div className="flex flex-1">
        <div className="min-h-screen">
          <Sidebar sidebarToggle={sidebarToggle} />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
