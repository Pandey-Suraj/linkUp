"use client";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
export default function Dashboard() {
    return (
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className="flex-grow">
                <Navbar />
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}