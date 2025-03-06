"use client";

import React, { useState } from 'react';       

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    console.log(isCollapsed)

    return (
        <div className={`m-2 border-2 border-gray-200 rounded-lg transition-all duration-300 h-[98vh] ${isCollapsed ? 'w-[4rem]' : 'w-[16rem]'}`}>
            <div className="p-4 flex justify-between items-center">
                <h1 className={`font-bold ${isCollapsed ? 'hidden' : 'block'}`}>Sidebar</h1>
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 rounded"
                >
                    {isCollapsed ? '→' : '←'}
                </button>
            </div>
            <div className="border-b border-gray-200 my-2"></div>
            <div className="p-4">
                <h2 className={`whitespace-nowrap text-sm font-semibold text-gray-500 mb-4 ${isCollapsed ? 'hidden' : 'block'}`}>MAIN MENU</h2>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded cursor-pointer h-[30px]">
                        <i className="pi pi-clock"></i>
                        <span className={`whitespace-nowrap ${isCollapsed ? 'hidden' : 'block'}`}>Time Tracker</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded cursor-pointer h-[30px]">
                        <i className="pi pi-file"></i>
                        <span className={`whitespace-nowrap ${isCollapsed ? 'hidden' : 'block'}`}>Timesheet</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded cursor-pointer h-[30px]">
                        <i className="pi pi-calendar"></i>
                        <span className={`whitespace-nowrap ${isCollapsed ? 'hidden' : 'block'}`}>Calendar</span>
                    </div>
                </div>
            </div>
        </div>
    )
}