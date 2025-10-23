import React, { useState } from "react";
import AvatarInfo from "./AvatarInfo";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isWalletOpen, setIsWalletOpen] = useState(false);

    return (
        <div className="flex h-screen flex-row bg-sky-500 font-sans">
            {/* Sidebar */}
            <aside
                className="w-[18%] shadow-lg"
                style={{
                    background: 'linear-gradient(to bottom, #161616 0%, #000000 100%)'
                }}
            >
                <div className="px-6 mt-16">
                    <AvatarInfo name="Julio M. Peguero" username="JuPegro" size="md" badge="pro" />
                </div>
                <nav className="mt-6 px-6">
                    {/* Dashboard */}
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-800/30 transition-all mb-4"
                        style={{ color: '#6C6C6C' }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span className="text-base font-bold tracking-wide">Dashboard</span>
                    </a>

                    {/* Wallet Section */}
                    <div className="mb-4">
                        <button
                            onClick={() => setIsWalletOpen(!isWalletOpen)}
                            className="w-full flex items-center justify-between px-3 py-2.5 border border-gray-800 rounded-lg mb-2 hover:bg-gray-800/30 transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <span className="text-base font-bold tracking-wide text-white">Wallet</span>
                            </div>
                            <svg
                                className={`w-4 h-4 text-gray-400 transition-transform ${isWalletOpen ? '' : 'rotate-180'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </button>

                        {/* Wallet submenu */}
                        {isWalletOpen && (
                            <ul className="flex flex-col gap-1 pl-2 ml-3.5 relative">
                                <li className="relative pl-4 mt-1">
                                    <div className="absolute left-0 w-4 border-l border-b rounded-bl-lg" style={{ height: 'calc(50% - 1px)', top: '2px', borderColor: 'rgba(255, 255, 255, 0.15)' }}></div>
                                    <a href="#" className="block px-3 py-2 text-base font-bold tracking-wide hover:text-gray-300 transition-colors" style={{ color: '#6C6C6C' }}>
                                        Invoices
                                    </a>
                                </li>
                                <li className="relative pl-4">
                                    <div className="absolute left-0 w-4 border-l border-b rounded-bl-lg" style={{ height: 'calc(50% + 3rem - 2px)', top: 'calc(-3rem + 2px)', borderColor: 'rgba(255, 255, 255, 0.15)' }}></div>
                                    <a href="#" className="block px-3 py-2 text-base font-bold tracking-wide hover:text-gray-300 transition-colors" style={{ color: '#6C6C6C' }}>
                                        Expenses
                                    </a>
                                </li>
                                <li className="relative pl-4">
                                    <div className="absolute left-0 w-4 border-l border-b rounded-bl-lg" style={{ height: 'calc(50% + 6rem - 2px)', top: 'calc(-6rem + 2px)', borderColor: 'rgba(255, 255, 255, 0.15)' }}></div>
                                    <a href="#" className="block px-3 py-2 text-base font-bold tracking-wide text-white hover:text-gray-200 transition-colors">
                                        Goals
                                    </a>
                                </li>
                                <li className="relative pl-4">
                                    <div className="absolute left-0 w-4 border-l border-b rounded-bl-lg" style={{ height: 'calc(50% + 9rem - 4px)', top: 'calc(-9rem + 4px)', borderColor: 'rgba(255, 255, 255, 0.15)' }}></div>
                                    <a href="#" className="block px-3 py-2 text-base font-bold tracking-wide hover:text-gray-300 transition-colors" style={{ color: '#6C6C6C' }}>
                                        Stadistics
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
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
