

import Crypoto from './cryptoUtil'
export default {
    setItem: (key: string, value: any) => {
        if (!key) {
            return
        }
        const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
        if (isBrowser) {
            const cry: any = new Crypoto();
            try {
                window.sessionStorage.setItem(key, cry.encrypt(JSON.stringify(value)));
            } catch (error) {
                console.log("encrypt local session error: " + error);
            }
        }
    },
    getItem: (key: string) => {
        if (!key) {
            return
        }
        const cry: any = new Crypoto();
        const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
        if (isBrowser) {
            try {
                let encryptData = window.sessionStorage.getItem(key);
                let values = JSON.parse(cry.decrypt(encryptData));
                return values;
            } catch (error) {
                console.log("encrypt local session error: " + error);
            }
            } else {
                return "";
            }
    }
}