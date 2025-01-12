
"use client"
import sessionUtil from "./sessionUtil";
import { toast } from 'react-toastify';

/**
 * POST请求
 * @param url 请求的URL

 * @param params 请求参数
 * @returns 
 */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;
export async function post(url: string, params: any = {}) {
    url=url.replace("/api", BASE_URL);
    try {
        const response = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + sessionUtil.getItem('token')
            },
            body: JSON.stringify(params),
        });
        if (!response.ok) {
            return new Error("未登录");
        }
        const data = await response.json();
        if (data.error) {
            return { error: data.message };
        }
        return data; 
    } catch (error) {
        console.log(error);
    return error;
  }
}

/**
 * PUT请求
 * @param url 请求的URL
 * @param params 请求参数
 * @returns 
 */
export async function put(url: string, params: any = {}) {
     url=url.replace("/api", BASE_URL);
    try {
        const response = await fetch(`${url}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + sessionUtil.getItem('token')
            },
            body: JSON.stringify(params),
        });
        if (!response.ok) {
            return new Error("未登录");
        }
        const data = await response.json();
        if (data.error) {
            return { error: data.message };
        }
        return data; 
    } catch (error) {
        console.log(error);
    return error;
  }
}


/**
 * GET请求
 * @param url 请求的URL
 * @returns 
 */
export async function get(url: string, params: any = {}) {
    url=url.replace("/api", BASE_URL);
    if (params) {
        url=url+JSON.stringify(params).replace(/:/g, '=').replace(/,/g, '&').replace(/{/g, '?').replace(/}/g, '').replace(/"/g, '').substring(8);
    }
    try {
        const response = await fetch(`${url}`, {
            method: "GET",
            headers: {
                "Authorization": 'Bearer ' + window.sessionStorage.getItem('token')
            },
        });
        if (!response.ok) {
            return new Error("未登录");
        }
        const data = await response.json();
        if (data.code != 2000) {
            toast.error(data.message, {
                position: 'top-right',
            });
        }
        if (data.error) {
            return { error: data.message };
        }
        return data; 
    } catch (error) {
        console.log(error);
    return error;
  }
}
