import mockData from "../../mock/data.ts";
import { defineStore } from "pinia";

export const useColumnsStore = defineStore('columnsStore', {
    state: () => ({
        columns: mockData.columns
    }),
})
