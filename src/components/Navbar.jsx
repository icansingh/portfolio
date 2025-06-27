import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
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

    return (<nav className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" href="#home">
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
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
                        <Sun className="h-5 w-5 text-primary"/>
                    ) : (
                        <Moon className="h-5 w-5 text-primary"/>
                    )}
                </button>

                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className="p-2 text-foreground z-50"
                    aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a 
                        href={item.href} 
                        key={key} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </div>

    </nav>
    );
};