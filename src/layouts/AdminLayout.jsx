import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AdminMenu } from "../components/AdminMenu";

export const AdminLayout = () => {
    return <>
    <Header/>
        <main className="flex">
            <aside className="bg-slate-50 sm:w-52 gap-1 flex flex-col p-2 ~text-sm/md border-r border-b" role="menu">
                <AdminMenu />
            </aside>
            <Outlet />
        </main>
    <Footer/>
    </>
} 