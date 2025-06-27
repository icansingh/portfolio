import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const MobileMenuOverlay = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
    <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
        {/* X button in the same spot as hamburger */}
        <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-0 right-0 mt-5 md:mt-7 mr-8 md:mr-16 p-2 text-foreground hover:text-primary transition-colors duration-300 z-[60]"
            aria-label="Close Menu"
        >
            <X size={24} />
        </button>
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
); 