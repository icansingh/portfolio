import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

export const ContactSection = () => {

    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const formRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            if (result.status === 200) {
                toast({
                    title: "Message sent successfully!",
                    description: "Thank you for your message. I'll get back to you as soon as possible."
                })
                // Reset form
                formRef.current.reset()
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            console.error('Error sending message:', error)
            toast({
                title: "Failed to send message",
                description: "There was an error sending your message. Please try again or contact me directly via email.",
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (<section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm currently looking for new opportunities. Whether you have a question, 
                a project in mind, or just want to say hi, I'll do my best to get back to you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="font-semibold text-2xl"> Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4 justify-center">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:ikjyot@ualberta.ca" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    ikjyot@ualberta.ca
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 justify-center">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="w-6 h-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:+18258238075" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    +1 (825) 823-8075
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 justify-center">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    Edmonton, AB, Canada
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/ikjyot-singh/" target="_blank">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="from_name" className="block text-sm font-medium mb-2"> Your Name </label>
                            <input 
                                type="text" 
                                id="from_name" 
                                name="from_name" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="John Smith..."
                            />
                        </div>

                        <div>
                            <label htmlFor="from_email" className="block text-sm font-medium mb-2"> Your Email </label>
                            <input 
                                type="email" 
                                id="from_email" 
                                name="from_email" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="john.smith@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message </label>
                            <textarea  
                                id="message" 
                                name="message" 
                                required 
                                rows={5}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to discuss..."
                            />
                        </div>

                        {/* Hidden timestamp field */}
                        <input 
                            type="hidden" 
                            name="time" 
                            value={new Date().toLocaleString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                                timeZone: 'America/Edmonton'
                            })}
                        />

                        <button type="submit" disabled={isSubmitting} className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2",
                            isSubmitting && "opacity-50 cursor-not-allowed"
                        )}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>

            </div>
        </div>
        

    </section>)
}