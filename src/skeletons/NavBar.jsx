import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-green-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center text-white">
              Social Media Site
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                type="button"
                to="/login"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-lime-500 px-3 py-2 text-sm font-semibold text-green-950 shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
              >
                <ArrowRightOnRectangleIcon
                  className="-ml-0.5 h-5 w-5"
                  aria-hidden="true"
                />
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
