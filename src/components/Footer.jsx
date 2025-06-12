import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (<footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground"> 
            &copy; 
            {new Date().getFullYear()} Ikjyot Singh. All rights reserved. 
        </p>
        
        <a href="#home" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primarytransition-colors duration-300">
            <ArrowUp size={20}/>
        </a>
    </footer>)
}