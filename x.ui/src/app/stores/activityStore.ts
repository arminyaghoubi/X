import { makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../models/activity";
import agent from "../api/agent";

export default class ActivityStore {
    activities: Activity[] = [];
    loading: boolean = false;
    selectedActivityDetails: Activity | undefined = undefined;
    selectedActivityForm: Activity | undefined = undefined;
    formMode: string = "Create";

    constructor() {
        makeAutoObservable(this);
    }

    getActivities = async () => {
        this.loading = true;
        const response = await agent.Activity.getAll();
        runInAction(() => {
            this.activities = response.data;
            this.loading = false;
        })
    }

    createActivity = async (activity: Activity) => {
        this.loading = true;
        const response = await agent.Activity.create(activity);
        runInAction(() => {
            if (response.status === 200) {
                this.getActivities();
            }
            this.loading = false;
        })
    }

    updateActivity = async (activity: Activity) => {
        this.loading = true;
        const response = await agent.Activity.update(activity);
        runInAction(() => {
            if (response.status === 204) {
                this.getActivities();
            }
            this.loading = false;
        })
    }

    deleteActivity = async (id: string) => {
        this.loading = true;
        const response = await agent.Activity.delete(id);
        runInAction(() => {
            if (response.status === 204) {
                this.getActivities();
            }
            this.loading = false;
        })
    }

    setSelectedActivityDetails = (activity: Activity | undefined) => {
        this.selectedActivityDetails = activity;
    }

    setSelectedActivityForm = (activity: Activity | undefined) => {
        this.selectedActivityForm = activity;
    }

    setFormMode = (mode: string) => {
        this.formMode = mode;
    }
}