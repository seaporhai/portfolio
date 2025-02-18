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
                    <Link href="/aboutme" className="text-xl font-bold text-blue-800">
                  SEA PORHAI
                    </Link>
                    <div className="flex items-center space-x-8">
                        {["Projects", "AboutMe", "Skills", "Contact",].map((item) => (
                            <Link
                                key={item}
                                href={`${item.toLowerCase()}`}
                                className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
                                    ? "text-blue-500"
                                    : "text-gray-600 hover:text-blue-500"
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                       {CV_URL && (
                            <a 
                                href={CV_URL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-gray-300  rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
                            >
                                View CV
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
