"use client";
import { useState } from "react";
import { toast } from "react-toastify";

import UserInfo from "@/definition/userInfo";
import api from "@/api/api";

export async function handleSendValidationCode(userInfo: UserInfo) {
  if (userInfo.username == "") {
    toast.error("请填写邮箱地址", {
      position: "top-right",
    });

    return;
  }
  try {
    const res = await api.sendValidationCode(userInfo.username);
  } catch (error) {
    console.error("Error sending validation code:", error);
  }
}
export default function SignupForm() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    code: "",
    password: "",
  });

  return (
    <div className="bg-white relative lg:py-20">
      <div
        className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
      >
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="flex flex-col w-full lg:w-7/12">
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
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
            >
              <p className="w-full text-4xl text-center leading-snug  font-bold">
                注册
              </p>
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    邮箱
                  </p>
                  <input
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    placeholder="电子邮箱"
                    type="text"
                    value={userInfo.username}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, username: e.target.value })
                    }
                  />
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    验证码
                  </p>
                  <div className="flex flex-nowrap">
                    <input
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      placeholder="验证码"
                      type="text"
                      value={userInfo.code}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, code: e.target.value })
                      }
                    />
                    {/* TODO : fit size */}
                    <button
                      className="bg-sky-500 hover:bg-sky-700 border border-gray-300 rounded-md w-24 "
                      onClick={() => {
                        handleSendValidationCode(userInfo);
                      }}
                    >
                      发送
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                  >
                    Password
                  </p>
                  <input
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    placeholder="Password"
                    type="password"
                    value={userInfo.password}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, password: e.target.value })
                    }
                  />
                </div>
                <div className="relative">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                  >
                    提交
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
