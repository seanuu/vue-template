import axios from '../axios';

export const example = {
    requestSomeThing(): Promise<{data: any; code: number}> {
        return axios.post('url');
    }
};
