import { useMemo, useState } from "react";
import { BEQUEST_AVERAGE_USD } from "@/constants/principles";

const MIN_DONORS = 100;
const MAX_DONORS = 5000;
const MIN_RATE = 0.5;
const MAX_RATE = 10;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatSupporters(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function getProgressPercent(value, min, max) {
  return `${((value - min) / (max - min)) * 100}%`;
}

export default function BequestPipelineEstimator() {
  const [donors, setDonors] = useState(1600);
  const [conversionRate, setConversionRate] = useState(2.5);

  const pipelineValue = useMemo(
    () => Math.round(donors * (conversionRate / 100) * BEQUEST_AVERAGE_USD),
    [donors, conversionRate],
  );

  return (
    <div className="w-full rounded-2xl bg-[rgba(2,7,23,0.75)] px-6 py-7 md:px-[30px] md:py-7">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-center justify-between gap-4">
            <p className="font-sans text-lg font-bold leading-7 text-[#f7f7f7] md:text-xl">
              Interactive Model
            </p>
            <span className="rounded bg-white/10 px-[13px] py-2.5 font-sans text-sm text-white">
              ROI Potential
            </span>
          </div>
          <div className="h-0.5 w-full bg-white/15" />
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-lg font-bold uppercase leading-6 text-white md:text-xl">
              Bequest pipeline estimator
            </h3>
            <p className="font-sans text-sm leading-[22px] text-[#979797]">
              Estimate the long-term impact of starting your Planned Giving
              program this week.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-heading text-sm font-bold uppercase leading-6 text-white md:text-base">
                Long-term donors (10+ years)
              </p>
              <p className="font-sans text-[15px] leading-7 text-[#f6f6f6]">
                {formatSupporters(donors)} Supporters
              </p>
            </div>
            <input
              type="range"
              min={MIN_DONORS}
              max={MAX_DONORS}
              step={50}
              value={donors}
              onChange={(e) => setDonors(Number(e.target.value))}
              aria-label="Long-term donors"
              className="bequest-range-input"
              style={{
                "--bequest-range-progress": getProgressPercent(
                  donors,
                  MIN_DONORS,
                  MAX_DONORS,
                ),
              }}
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-heading text-sm font-bold uppercase leading-6 text-white md:text-base">
                Bequest conversion rate
              </p>
              <p className="font-sans text-[15px] leading-7 text-[#f6f6f6]">
                {conversionRate.toFixed(1)}%
              </p>
            </div>
            <input
              type="range"
              min={MIN_RATE}
              max={MAX_RATE}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              aria-label="Bequest conversion rate"
              className="bequest-range-input"
              style={{
                "--bequest-range-progress": getProgressPercent(
                  conversionRate,
                  MIN_RATE,
                  MAX_RATE,
                ),
              }}
            />
          </div>
        </div>

        <div className="rounded-[10px] bg-[#172344] px-6 py-[30px] text-center md:px-[61px]">
          <p className="font-sans text-sm leading-4 text-[#d4d4d4] opacity-50">
            Estimated Legacy Pipeline Value
          </p>
          <p className="mt-[30px] font-sans text-4xl font-semibold leading-4 text-[#d4d4d4] md:text-[48px]">
            {formatCurrency(pipelineValue)}
          </p>
          <p className="mt-[30px] font-sans text-sm leading-4 text-[#d4d4d4] opacity-50">
            Based on average U.S. bequest size of $
            {BEQUEST_AVERAGE_USD.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
