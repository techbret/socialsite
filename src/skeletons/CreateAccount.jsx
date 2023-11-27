import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
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
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6 h-12"
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
                    placeholder="Password"
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
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 h-12"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-lime-600 hover:text-lime-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
