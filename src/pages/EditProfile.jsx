import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <>
      <Link
        to="/dashboard"
        className="flex min-h-full items-center py-12 sm:px-6 lg:px-8 text-lime-600 hover:text-lime-700"
      >
        <ArrowLeftIcon className="h-6 w-6 mx-2" />
        Return to Dashboard
      </Link>
      <div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit your account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-4 shadow sm:rounded-lg sm:px-4 mx-2 sm:mx-0">
            <form className="space-y-2" action="#" method="POST">
              <div className="flex items-center gap-x-2">
                <div className="w-full">
                  <div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6 h-12"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="ml-auto w-full">
                  <div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6 h-12"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-medium leading-6 text-gray-900 ml-1"
                  >
                    Birthday
                  </label>
                  <input
                    id="birthday"
                    name="birthday"
                    type="date"
                    autoComplete="bday"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6 h-12"
                    placeholder="Birthday"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label
                    htmlFor="newpassword"
                    className="block text-sm font-medium leading-6 text-gray-900 ml-1"
                  >
                    Update Passwrod
                  </label>
                  <input
                    id="newpassword"
                    name="newpassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6 h-12"
                    placeholder="New Password"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6 h-12"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6 h-12"
                    placeholder="Current Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 h-12"
                >
                  Update Account
                </button>
              </div>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Your login email is{" "}
            <div
              to="/login"
              className="font-semibold leading-6 text-lime-600 hover:text-lime-500"
            >
              Email
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
