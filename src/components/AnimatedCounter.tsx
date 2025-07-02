import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  mode?: 'lakh'; // optional mode for special lakh animation
}

const AnimatedCounter = ({ end, duration = 2, suffix = "", className = "", mode }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<'normal' | 'lakh'>(mode === 'lakh' ? 'normal' : undefined);
  const [lakhValue, setLakhValue] = useState(1.0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (mode === 'lakh') {
      if (phase === 'normal') {
        // Animate from 0 to 99999
        let startTime: number;
        const startValue = 0;
        const endValue = 99999;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (duration * 1000 * 0.7), 1); // 70% of duration for phase 1
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.floor(startValue + (endValue - startValue) * easeOut);
          setCount(currentCount);
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(endValue);
            setPhase('lakh');
          }
        };
        requestAnimationFrame(animate);
      } else if (phase === 'lakh') {
        // Animate from 1.00 to 1.52 L
        let startTime: number;
        const startValue = 1.0;
        const endValue = 1.52;
        const lakhDuration = duration * 0.3; // 30% of duration for phase 2
        const animateLakh = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (lakhDuration * 1000), 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentLakh = startValue + (endValue - startValue) * easeOut;
          setLakhValue(currentLakh);
          if (progress < 1) {
            requestAnimationFrame(animateLakh);
          } else {
            setLakhValue(endValue);
          }
        };
        requestAnimationFrame(animateLakh);
      }
    } else {
      // Default behavior
      let startTime: number;
      const startValue = 0;
      const endValue = end;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOut);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration, mode, phase]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {mode === 'lakh' ? (
        phase === 'normal' ? (
          count.toLocaleString()
        ) : (
          `${lakhValue.toFixed(2)} L`
        )
      ) : (
        <>{count}{suffix}</>
      )}
    </motion.span>
  );
};

export default AnimatedCounter;
