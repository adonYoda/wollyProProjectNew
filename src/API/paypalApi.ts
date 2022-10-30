import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrlPayPalSandbox } from "../utils/constants";



export const paypalApi = createApi({
baseQuery: fetchBaseQuery({
    baseUrl: baseUrlPayPalSandbox,
}),
endpoints:(build) =>({
    
})
})