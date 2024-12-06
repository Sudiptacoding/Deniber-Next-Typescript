import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://home-exchanger-backend-2023-14-mern-main.vercel.app',
        credentials: 'include', 
    }),
    endpoints: (builder) => ({

        loginUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
            }),
        }),

        registrationUser: builder.mutation({
            query: (user) => ({
                url: '/signup',
                method: 'POST',
                body: user,
            }),
        }),

        currentUser: builder.query({
            query: () => '/me',
        }),

        logOutUser: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),

    }),
});

export const {
    useLoginUserMutation,
    useRegistrationUserMutation,
    useCurrentUserQuery,
    useLogOutUserMutation,
} = authApi;