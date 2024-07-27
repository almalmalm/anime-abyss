import React from 'react'

export const PersonIcon = () => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_104_103)">
                <path
                    d="M15 11C18.0387 11 20.5 8.53875 20.5 5.5C20.5 2.46125 18.0387 0 15 0C11.9612 0 9.5 2.46125 9.5 5.5C9.5 8.53875 11.9612 11 15 11ZM15 13.75C11.3287 13.75 4 15.5925 4 19.25V20.625C4 21.3813 4.61875 22 5.375 22H24.625C25.3813 22 26 21.3813 26 20.625V19.25C26 15.5925 18.6713 13.75 15 13.75Z"
                    fill="#D1105A"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_104_103"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_104_103"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_104_103"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}
