"use client";
import { Conversation } from "../components/conversation";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
export default function Dashboard() {
    return (
        <div className="flex flex-col h-screen">
            <div>
                <Navbar />
            </div>
            <div className="flex  flex-grow">
                <Sidebar />
                <div className="flex-grow">
                    <div className="flex flex-col flex-grow">
                        <div className="flex-grow">
                            <div className="flex items-center p-2 pl-5">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                        JS
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-lg  ml-2">John Smith</h1>
                                    <h3 className="text-sm text-gray-500 ml-2">Online</h3>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-200 my-2"></div>
                        <Conversation />
                    </div>
                </div>
            </div>
        </div>

    )
}