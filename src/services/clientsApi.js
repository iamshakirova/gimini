import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const clientApiSearch = {
    'X-RapidAPI-Key': process.env.REACT_APP_CLIENT_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CLIENTAPI_HOST 
}


const createRequest = (url) =>({
    url, headers: clientApiSearch
})

export const clientApi =  createApi({
    reducerPath: 'clientApi',
    baseQuery : fetchBaseQuery({baseUrl:process.env.REACT_APP_CLIENT_API_URL}),
    endpoints:(builder) =>({
        getClients: builder.query({
            query: () => createRequest('/search/companies?query=agency&page=2')
        })
    })
})

export const {
    useGetClientsQuery
} = clientApi