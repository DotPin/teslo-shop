import { Outlet } from 'react-router'
import { CustomHeader } from '../components/CustomHeader'
import { CustomFutter } from '../components/CustomFutter'

export const ShopLayout = () => {
    return (
        <div className="min-h-screen bg-background">
            <CustomHeader />
            <Outlet />
            <CustomFutter />
        </div>
    )
}
