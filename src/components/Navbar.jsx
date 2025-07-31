import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Timeline", href: "#timeline"},
    {name: "Projects", href: "#projects"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen, activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // Default to dark mode if no theme is stored or if it's "dark"
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#home">
                    <img
                        src="/memoji.png"
                        alt="Logo"
                        className="w-8 h-8 mr-2 shadow"
                        style={{ objectFit: "cover" }}
                    />
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Ikjyot's</span> Portfolio
                    </span>
                </a>

                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, key) => (
                        <a 
                        href={item.href} 
                        key={key} 
                        className={cn(
                            "text-foreground/80 hover:text-primary transition-colors duration-300",
                            activeSection === item.href.replace('#', '') && "text-primary font-bold"
                        )}
                        >
                            {item.name}
                        </a>
                    ))}
                    {/* Theme Toggle for Desktop */}
                    <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
                        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? (
                            <Sun className="h-6 w-6 text-yellow-300"/>
                        ) : (
                            <Moon className="h-6 w-6 text-blue-900"/>
                        )}
                    </button>
                </div>

                {/* Mobile Navbar */}
                <div className="flex items-center space-x-2 md:hidden">
                    {/* Theme Toggle for Mobile */}
                    <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
                        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? (
                            <Sun className="h-6 w-6 text-yellow-300"/>
                        ) : (
                            <Moon className="h-6 w-6 text-blue-900"/>
                        )}
                    </button>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="p-2 text-foreground z-50"
                        aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};