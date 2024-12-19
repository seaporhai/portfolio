import React from "react";
import Link from "next/link";

interface NavigationProps {
    activeSection?: string;
    CV_URL?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
    activeSection,
    CV_URL,
}) => {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-40">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-blue-800"></Link>
                    <div className="flex items-center space-x-8">
                        {["Projects", "About Me", "Skills", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
                                    ? "text-green-600"
                                    : "text-gray-600 hover:text-green-600"
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
                            View CV
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
