import Axios, {AxiosInstance} from 'axios';
import interceptors from './interceptors';

const aixos: AxiosInstance = Axios.create({
    baseURL: '',
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'DM-Request',
        'Cache-Control': 'no-cache'
    },
    timeout: 8000
});

interceptors(aixos);

export {aixos};
export default aixos;
