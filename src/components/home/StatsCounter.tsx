import { useEffect, useState } from "react";
import { Users, UserCheck, Award, Star } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";

interface StatItemProps {
  icon: any;
  targetValue: number;
  suffix?: string;
  label: string;
  isFloat?: boolean;
}

function StatItem({ icon: Icon, targetValue, suffix = "", label, isFloat = false }: StatItemProps) {
  const [value, setValue] = useState(isFloat ? 1.0 : 0);

  useEffect(() => {
    let start = isFloat ? 1.0 : 0;
    const duration = 2000; // 2 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const stepValue = (targetValue - start) / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= targetValue) {
        clearInterval(timer);
        setValue(targetValue);
      } else {
        setValue(isFloat ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [targetValue, isFloat]);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 text-center group">
      <div className="w-12 h-12 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent mb-4 transition-transform duration-500 group-hover:scale-110">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-serif text-3xl sm:text-4xl font-light text-secondary mb-2 whitespace-nowrap flex items-center gap-1">
        <span>{isFloat ? value.toFixed(1) : value.toLocaleString()}</span>
        <span className="text-accent font-sans text-xl sm:text-2xl font-normal ml-0.5">{suffix}</span>
      </span>
      <span className="text-[10px] tracking-[0.25em] font-mono text-accent uppercase font-medium leading-relaxed max-w-[150px] sm:max-w-none">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-primary py-16 border-y border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up" className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 sm:gap-8 lg:divide-x lg:divide-white/10">
          <StatItem
            icon={Users}
            targetValue={5000}
            suffix="+"
            label="HAPPY CLIENTS"
          />
          <StatItem
            icon={UserCheck}
            targetValue={12}
            suffix=" EXPERTS"
            label="EXPERT STYLISTS"
          />
          <StatItem
            icon={Award}
            targetValue={8}
            suffix=" YEARS"
            label="OF EXCELLENCE"
          />
          <StatItem
            icon={Star}
            targetValue={4.9}
            suffix="★"
            label="AVERAGE RATING"
            isFloat={true}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
