import { type Destination, type StartPoint } from "@/data/destinations";
import { useI18n } from "@/i18n/I18nProvider";
import { localized } from "@/data/destinations";
import floorPlanAsset from "@/assets/smct-level2-floorplan.jpg.asset.json";

interface HospitalMapProps {
  destination: Destination | null;
  userPos: [number, number];
  progress: number; // 0..1 along path
  highlightSegment?: { start: [number, number]; end: [number, number] } | null;
  startPoint: StartPoint;
}

export const HospitalMap = ({
  destination,
  userPos,
  progress,
  highlightSegment,
  startPoint,
}: HospitalMapProps) => {

  const { t, dir, lang } = useI18n();
  const pathStr = destination
    ? destination.path.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ")
    : "";

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border-2 border-border bg-soft shadow-soft">
      <svg
        viewBox="0 0 400 600"
        className="block h-auto w-full"
        role="img"
        aria-label="Hospital floor plan map"
      >
        {/* Real hospital floor plan (SMT Level 2 O.T) */}
        <image
          href={floorPlanAsset.url}
          x="0"
          y="0"
          width="400"
          height="600"
          preserveAspectRatio="xMidYMid meet"
          opacity="0.85"
        />
        {/* Soft tint to keep route legible */}
        <rect x="0" y="0" width="400" height="600" fill="hsl(var(--card) / 0.15)" />

        {/* All destination dots */}
        {/* Drawn lightly so the selected one stands out */}

        {/* Active route */}
        {destination && (
          <>
            <path
              d={pathStr}
              fill="none"
              stroke="hsl(var(--primary) / 0.25)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={pathStr}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="route-march"
              style={{ strokeDashoffset: -progress * 24 }}
            />

            {/* Highlighted current segment + next waypoint */}
            {highlightSegment && (
              <>
                <line
                  x1={highlightSegment.start[0]}
                  y1={highlightSegment.start[1]}
                  x2={highlightSegment.end[0]}
                  y2={highlightSegment.end[1]}
                  stroke="hsl(var(--secondary))"
                  strokeWidth="7"
                  strokeLinecap="round"
                  opacity="0.95"
                />
                {/* Next-waypoint pulse */}
                <g
                  transform={`translate(${highlightSegment.end[0]} ${highlightSegment.end[1]})`}
                >
                  <circle r="10" fill="hsl(var(--secondary) / 0.3)">
                    <animate
                      attributeName="r"
                      values="8;18;8"
                      dur="1.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="1.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    r="6"
                    fill="hsl(var(--card))"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="3"
                  />
                </g>
              </>
            )}

            {/* Destination pin */}
            <g transform={`translate(${destination.x} ${destination.y})`}>
              <circle r="22" fill="hsl(var(--secondary) / 0.2)" />
              <circle r="14" fill="hsl(var(--secondary))" />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="16"
                style={{ fontFamily: "system-ui" }}
              >
                {destination.icon}
              </text>
            </g>
          </>
        )}

        {/* You marker (live GPS) */}
        <g transform={`translate(${userPos[0]} ${userPos[1]})`}>
          <circle r="18" fill="hsl(var(--primary) / 0.18)">
            <animate attributeName="r" values="18;28;18" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="11" fill="hsl(var(--primary))" stroke="white" strokeWidth="3" />
        </g>

        {/* Start-point label (dynamic based on selected QR location) */}
        <g transform={`translate(${startPoint.x} ${startPoint.y + 38})`}>
          <rect x="-58" y="-14" width="116" height="22" rx="11" fill="hsl(var(--foreground))" />
          <text
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="11"
            fontWeight="700"
            fill="hsl(var(--background))"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            {startPoint.icon} {localized(startPoint.name, lang)}
          </text>
        </g>


        {/* Compass */}
        <g transform="translate(350 90)">
          <circle r="18" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <text
            textAnchor="middle"
            dominantBaseline="central"
            y="-2"
            fontSize="10"
            fontWeight="800"
            fill="hsl(var(--secondary))"
            style={{ fontFamily: "Nunito" }}
          >
            N
          </text>
          <polygon points="0,-14 -3,-6 3,-6" fill="hsl(var(--secondary))" />
        </g>
      </svg>

      {/* Floating GPS badge */}
      <div
        className={`pointer-events-none absolute top-4 flex items-center gap-2 rounded-full bg-card/95 px-3 py-1.5 text-xs font-bold shadow-soft backdrop-blur ${
          dir === "rtl" ? "left-4" : "right-4"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
        </span>
        <span className="text-foreground">{t.liveGps}</span>
      </div>
    </div>
  );
};
