import useCountUp from "@/hooks/useCountUp";

export default function AnimatedStat({ targets, format, duration = 1500, className }) {
  const [ref, values] = useCountUp(targets, { duration });

  return (
    <p ref={ref} className={className}>
      {format(values)}
    </p>
  );
}
