"use client";

import { SVGProps } from "react";

export function BulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="166"
      height="165"
      viewBox="0 0 166 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.24" clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.6534 129.4C61.1212 126.163 64.1311 123.919 67.3762 124.388L86.5267 127.156C89.7718 127.625 92.0232 130.629 91.5553 133.866C91.0875 137.103 88.0776 139.347 84.8325 138.878L65.682 136.11C62.437 135.641 60.1856 132.637 60.6534 129.4Z"
          fill="#9700FF"
        />
        <path
          d="M97.8687 82.7832C100.131 81.0923 103.336 81.5556 105.027 83.8178C106.718 86.0801 106.254 89.2848 103.992 90.9758L85.108 105.09L83.1297 118.777C82.7257 121.573 80.1319 123.511 77.3365 123.107C74.5413 122.703 72.6024 120.109 73.0064 117.314L74.9848 103.626L60.8709 84.7432L60.7184 84.5288C59.2104 82.2824 59.7139 79.2233 61.9055 77.5852C64.0972 75.9471 67.1737 76.3304 68.9011 78.4128L69.0636 78.6198L77.1301 89.412C77.9108 87.1312 80.2252 85.6542 82.6982 86.0115C85.1713 86.3689 86.9725 88.4409 87.0755 90.8495L97.8687 82.7832Z"
          fill="#9700FF"
        />
        <g filter="url(#filter0)">
          <path
            d="M52.9661 101.194C48.0148 96.2357 44.2802 90.1967 42.0555 83.5517C39.8308 76.9067 39.1766 69.8365 40.1442 62.8961C43.5327 38.5001 66.1089 21.0595 90.5497 24.0185C100.118 25.1659 109.074 29.327 116.121 35.9C123.169 42.4729 127.943 51.1171 129.754 60.5824C131.565 70.0478 130.318 79.8438 126.194 88.5539C122.07 97.2639 115.283 104.437 106.813 109.035C105.284 109.88 103.974 111.07 102.985 112.511C101.996 113.951 101.356 115.602 101.116 117.333C100.944 118.525 100.305 119.6 99.3403 120.321C98.3754 121.042 97.1635 121.351 95.9712 121.178L60.0077 115.98C58.8155 115.808 57.7405 115.169 57.0193 114.204C56.2981 113.239 55.9897 112.027 56.1621 110.835L56.1807 110.706C56.4187 108.98 56.2521 107.222 55.6942 105.571C55.1363 103.921 54.2024 102.422 52.9661 101.194Z"
            fill="#E7C2FF"
            fillOpacity="0.34"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0"
          x="20.8685"
          y="4.84979"
          width="128.536"
          height="135.217"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5.38328" />
          <feGaussianBlur stdDeviation="2.69164" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feOffset dy="-5.38328" />
          <feGaussianBlur stdDeviation="2.69164" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.803922 0 0 0 0 0.843137 0 0 0 0 0.980392 0 0 0 0.15 0"
          />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
          <feOffset />
          <feGaussianBlur stdDeviation="1.61499" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
          />
          <feBlend in2="effect2_innerShadow" result="effect3_innerShadow" />
        </filter>
        <clipPath id="clip0">
          <rect
            width="145.349"
            height="145.349"
            fill="white"
            transform="translate(21.6572 0.292969) rotate(8.22435)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
