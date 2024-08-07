import React from 'react'

export const SearchIcon = () => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_104_100)">
                <path
                    d="M19.7233 13.8365H18.7296L18.3774 13.4969C19.6101 12.0629 20.3522 10.2013 20.3522 8.1761C20.3522 3.66038 16.6918 0 12.1761 0C7.66038 0 4 3.66038 4 8.1761C4 12.6918 7.66038 16.3522 12.1761 16.3522C14.2013 16.3522 16.0629 15.6101 17.4969 14.3774L17.8365 14.7296V15.7233L24.1258 22L26 20.1258L19.7233 13.8365ZM12.1761 13.8365C9.04402 13.8365 6.51572 11.3082 6.51572 8.1761C6.51572 5.04402 9.04402 2.51572 12.1761 2.51572C15.3082 2.51572 17.8365 5.04402 17.8365 8.1761C17.8365 11.3082 15.3082 13.8365 12.1761 13.8365Z"
                    fill="#D1105A"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_104_100"
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
                        result="effect1_dropShadow_104_100"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_104_100"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}
