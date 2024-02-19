import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { clientApi } from "../services/clientsApi";

export default configureStore({
    reducer:{
        [clientApi.reducerPath] : clientApi.reducer,
    },
    middleware : (getDefaultMiddleware) =>(
        getDefaultMiddleware().concat(clientApi.middleware)
    )
})