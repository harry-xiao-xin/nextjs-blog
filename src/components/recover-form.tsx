import Link from "next/link";
export default async function RecoverForm() {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-xl mt-20">
      <h1 className="text-4xl font-medium text-black">重置密码</h1>
      <p className="text-black">输入电子邮箱找回密码</p>
      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-white-500 hover:shadow"
              id="email"
              name="email"
              placeholder="电子邮箱"
              type="email"
            />
          </label>

          <button className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>重置密码</span>
          </button>
          <p className="text-center text-black">
            Not registered yet?{" "}
            <Link
              className="text-blue-600 font-medium inline-flex space-x-1 items-center"
              href="/[locale]/signup"
            >
              <span>Register now </span>
              <span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
