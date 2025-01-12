import Link from "next/link";
import { ToastContainer } from "react-toastify";
export default function LoginForm() {
  return (
    <body
      suppressHydrationWarning
      className="antialiased bg-gradient-to-br from-green-100 to-white"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full lg:w-3/12">
            <div>
              <svg
                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold ">小星博客</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">XiaoXin Blog</p>
          </div>
          <div className="w-full md:w-full lg:w-4/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-4xl font-bold text-gray-800 text-left mb-5">
                登陆
              </h2>
              <form action="" className="w-full">
                <div className="flex flex-col w-full my-5" id="input">
                  <label className="text-gray-500 mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    id="username"
                    placeholder="Please insert your username"
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-full my-5" id="input">
                  <label className="text-gray-500 mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    id="password"
                    placeholder="Please insert your password"
                    type="password"
                  />
                </div>
                <div className="flex flex-col w-full my-5" id="button">
                  <button
                    className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                    type="button"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="font-bold">Sigin</div>
                    </div>
                  </button>
                  <div className="flex justify-evenly mt-5">
                    <Link
                      className="w-full text-center font-medium text-gray-500"
                      href="recover"
                    >
                      Recover password
                    </Link>
                    <Link
                      className="w-full text-center font-medium text-gray-500"
                      href="/signup"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </body>
  );
}
