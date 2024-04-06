import mockData from "../../mock/data.ts";
import { defineStore } from "pinia";

export const useCommonStore = defineStore('commonStore', {
    state: () => ({
        statuses: mockData.statuses,
        tags: mockData.tags,
    }),
})
