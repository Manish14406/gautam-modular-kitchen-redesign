import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface OptimizedImageProps extends React.ComponentProps<"img"> {
  src: string;
  alt: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  style,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loaded state when src changes
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-[#171B24]", containerClassName)}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-white/5" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out",
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-[1.03]",
          className
        )}
        style={style}
        {...props}
      />
    </div>
  );
}
