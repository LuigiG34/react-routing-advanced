import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <MainNavigation></MainNavigation>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;