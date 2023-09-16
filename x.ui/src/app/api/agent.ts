import axios, { AxiosResponse } from 'axios'
import { Activity } from '../models/activity';

axios.defaults.baseURL = "https://localhost:7274/api";

const responseBody = (response: AxiosResponse) => response;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const urls = {
    activityUrl: "/Activity"
}

const Activity = {
    getAll: () => requests.get(urls.activityUrl),
    create: (activity: Activity) => requests.post(urls.activityUrl, activity),
    update: (activity: Activity) => requests.put(urls.activityUrl, activity),
    delete: (id: string) => requests.delete(`${urls.activityUrl}/${id}`),
}

const agent = {
    Activity
}

export default agent;