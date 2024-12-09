import { SVGProps } from "react"
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={285}
    height={285}
    {...props} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2ecc71', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    <g transform="translate(100 100)">
      {/* Front-end hexagon */}
      <polygon
        points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"
        fill="url(#gradient)"
        opacity="0.8"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0"
          to="360"
          dur="20s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* Back-end hexagon */}
      <polygon
        points="0,-45 39,-22.5 39,22.5 0,45 -39,22.5 -39,-22.5"
        fill="url(#gradient)"
        opacity="0.6"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0"
          to="-360"
          dur="25s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* Database hexagon */}
      <polygon
        points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15"
        fill="url(#gradient)"
        opacity="0.4"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0"
          to="360"
          dur="30s"
          repeatCount="indefinite"
        />
      </polygon>
    </g>

    {/* Developer symbol */}
    <text x="100" y="110" fontFamily="Arial, sans-serif" fontSize="24" fill="#333" textAnchor="middle">
      {'</>'}
    </text>
  </svg>
)
export default Logo
