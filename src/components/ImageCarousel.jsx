import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const ImageCarousel = ({ 
    images, 
    autoPlay = true, 
    interval = 3000, 
    showControls = false,
    showCounter = false,
    className = "",
    onClick = null 
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-cycling effect
    useEffect(() => {
        if (!autoPlay || images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {/* Images */}
            <div className="relative h-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className={cn(
                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        )}
                        onClick={onClick}
                    />
                ))}
            </div>

            {/* Navigation Controls (only show if showControls is true) */}
            {showControls && images.length > 1 && (
                <>
                    {/* Previous/Next buttons */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToImage(index);
                                }}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-colors",
                                    index === currentIndex 
                                        ? "bg-white" 
                                        : "bg-white/50 hover:bg-white/75"
                                )}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Image counter (only show if showCounter is true) */}
            {showCounter && showControls && images.length > 1 && (
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs z-10">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};