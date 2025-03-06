import React from 'react';

export function Navbar() {
    return (
        <div className=" my-2 flex justify-between items-center p-3 border-2 border-gray-200 rounded-lg">
            <div className="flex items-center">
                {/* <Image src="/window.svg" alt="Window Logo" width={32} height={32} className="mr-2" /> */}
                <h1 className="text-xl font-bold">LinkUp</h1>
            </div>
            <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Login
                </button>
            </div>
        </div>
    )
} 