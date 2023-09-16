import axios, { AxiosResponse } from 'axios'
import { Activity } from '../models/activity';

axios.defaults.baseURL = "https://localhost:7274/api";

const responseBody = <T>(response: AxiosResponse<T>) => response;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const urls = {
    activityUrl: "/Activity"
}

const Activity = {
    getAll: () => requests.get<Activity[]>(urls.activityUrl),
    details: (id:string) => requests.get<Activity>(`${urls.activityUrl}/${id}`),
    create: (activity: Activity) => requests.post(urls.activityUrl, activity),
    update: (activity: Activity) => requests.put(urls.activityUrl, activity),
    delete: (id: string) => requests.delete(`${urls.activityUrl}/${id}`),
}

const agent = {
    Activity
}

export default agent;