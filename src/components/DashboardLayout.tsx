import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen flex-row bg-sky-500 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Julio M. Peguero</h2>
                </div>
                <nav className="mt-6">
                    <ul className="space-y-2 px-4">
                        <li>
                            <a
                                href="#"
                                className="flex items-center px-4 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <span className="ml-3">Overview</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <span className="ml-3">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <span className="ml-3">Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4">
                        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
                                Notifications
                            </button>
                            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
