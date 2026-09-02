import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import { Toaster } from 'sonner'
import { checkAuthAction } from './auth/actions/check-auth.action'
import type { PropsWithChildren } from 'react'
import { CustomFullScreenLoading } from './components/custom/CustomFullScreenLoading'

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {

    const { isLoading } = useQuery({
        queryKey: ['auth'],
        queryFn: checkAuthAction,
        retry: false,
        refetchInterval: 1000 * 60 * 1.5,
        refetchOnWindowFocus: true,
    });

    if (isLoading) return <CustomFullScreenLoading />

    return children;
}


export const TesloShop = () => {



    return (

        <QueryClientProvider client={queryClient}>
            <Toaster />

            <CheckAuthProvider>
                <RouterProvider router={appRouter} />
            </CheckAuthProvider>

            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

    )
}
