import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import PostBox from "../components/PostBox";
import Posts from "../components/Posts";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-2 p-4">
        <div className="col-span-3 bg-white shadow-sm shadow-lime-700 rounded-md p-4">
          <svg
              className="h-24 w-24 border border-gray-300 bg-white text-gray-300 mx-auto"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeWidth={1}
                d="M0 0l200 200M0 200L200 0"
              />
            </svg>
          <div className="text-center text-gray-900 font-bold">
            FirstName LastName
          </div>
          <div className="text-center text-gray-500">Birthday</div>
          <div className="text-center text-gray-500">Email</div>
          <div className="text-center mt-4">
          <Link
          to="/edit-profile" 
          className="mt-4 mx-auto rounded-md bg-lime-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 h-12">
            Edit Profile
          </Link>
          </div>
          <button className="w-full text-lime-600 hover:text-lime-500 px-3 py-1.5 text-sm font-semibold ">
            Logout
          </button>
        </div>
        <div className="col-span-9 row-span-3 bg-white shadow-sm shadow-lime-700 rounded-md p-4">
          <PostBox />
          <Posts />
        </div>
        <div className="col-span-3 bg-white shadow-sm shadow-lime-700 rounded-md p-4">
          <div className="text-center text-gray-900 font-bold">City, State</div>
          <div className="text-center text-gray-500">Bio</div>
        </div>
      </div>
    </div>
  );
}
