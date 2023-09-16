import { makeAutoObservable } from "mobx";
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

    getActivities = () => {
        this.loading = true;
        agent.Activity.getAll().then(response => {
            this.activities = response.data;
            this.loading = false;
        })
    }

    createActivity = (activity: Activity) => {
        this.loading = true;
        agent.Activity.create(activity).then(response => {
            if (response.status === 200) {
                this.getActivities();
            }
            this.loading = false;
        })
    }

    updateActivity = (activity: Activity) => {
        this.loading = true;
        agent.Activity.update(activity).then(response => {
            if (response.status === 204) {
                this.getActivities();
            }
            this.loading = false;
        })
    }

    deleteActivity = (id: string) => {
        this.loading = true;
        agent.Activity.delete(id).then(response => {
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