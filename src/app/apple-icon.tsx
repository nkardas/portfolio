import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="180" fill="white"/>
        <text
          x="90"
          y="90"
          text-anchor="middle"
          dominant-baseline="central"
          font-family="monospace"
          font-weight="600"
          font-size="105"
        >
          <tspan fill="#1A1A1A">n</tspan>
          <tspan fill="#8B7AB8" dx="-72">K</tspan>
        </text>
      </svg>
    ),
    {
      ...size,
    }
  )
}
