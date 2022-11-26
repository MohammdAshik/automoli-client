import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProfileCard from "../Shared/ProfileCard";

const AllBuyer = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["allbuyer"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allbuyer");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="sticky top-0 bg-white">
        <h2 className="text-2xl font-semibold mb-1">All Buyer</h2>
        <hr />
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost drawer-button text-primary absolute top-[-8px] right-1 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {buyers.map((buyer) => (
          <ProfileCard key={buyer._id} userData={buyer} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AllBuyer;