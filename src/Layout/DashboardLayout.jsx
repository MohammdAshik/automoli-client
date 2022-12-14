import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";
import { AiOutlineFileAdd, AiFillHome } from "react-icons/ai";
import { MdSell } from "react-icons/md";
import { RiRoadsterFill } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Context/AuthProvider";
import useSeller from "../Hooks/useSeller";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div className="relative">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col p-3">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="menu w-72 bg-accent text-white">
            <p className="shadow">
              <Link
                to={"/"}
                className="btn flex items-center text-white btn-ghost normal-case text-2xl"
              >
                Aut <GiCarWheel className="w-[17px] mt-[5px] text-primary" /> m
                <GiCarWheel className="w-[17px] mt-[5px] text-primary" />
                li
              </Link>
            </p>

            <li className="my-1 btn btn-ghost">
              <Link to={"/"}>
                <AiFillHome />
                Home
              </Link>
            </li>
            <li className="my-1 btn btn-ghost">
              <Link to={"/dashboard/"}>
                <AiFillHome />
                My booking
              </Link>
            </li>
            {isSeller && (
              <>
                <li className="my-1 btn btn-ghost">
                  <Link to={"/dashboard/addpost"}>
                    <AiOutlineFileAdd />
                    post ad
                  </Link>
                </li>
                <li className="my-1 btn btn-ghost">
                  <Link to={"/dashboard/myads"}>
                    <RiRoadsterFill />
                    My Ads
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="my-1 btn btn-ghost">
                  <Link to={"/dashboard/allseller"}>
                    <MdSell />
                    All Seller
                  </Link>
                </li>
                <li className="my-1 btn btn-ghost">
                  <Link to={"/dashboard/allbuyer"}>
                    <BiUser />
                    All Buyer
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
