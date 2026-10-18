import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CONTAINER, Reveal, StatusPill } from './landingCommon';
import { ArchFrame, StarPattern, OrnamentDivider, GOLD } from '../ui/islamic';
import { AR, PHOTOS } from '../../content/site';
import { useLang } from '../../i18n/LangContext';


function ZakatVisual() {
  const white = '#fff';
  const gray = '#e4e6ea';
  return (
    <div className="relative flex h-[240px] justify-center overflow-hidden text-tawf-ink" aria-hidden="true">
      <svg viewBox="0 0 472 298" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {/* Halo */}
        <path d="M328.298 230.047C330.361 228.748 330.648 226.809 328.997 225.327L326.198 222.814C322.781 219.744 323.53 215.715 328 213.134L347.391 201.94C361.71 193.673 369.666 182.651 369.666 170.71C369.507 159.044 361.71 147.93 347.391 139.663C317.638 122.487 269.269 122.487 239.516 139.663L220.205 150.812C215.78 153.366 208.872 153.8 203.6 151.853L199.33 150.276C196.757 149.326 193.399 149.494 191.148 150.686C190.83 150.869 156.94 168.781 134.665 181.64C98.3417 202.61 127.396 233.987 143.046 256.25C143.499 256.894 144.293 257.429 145.325 257.787C148.985 258.981 233.789 286.261 274.679 262.655C294.567 251.173 327.98 230.231 328.298 230.047ZM252.086 146.92C274.997 133.693 312.069 133.785 334.821 146.92C345.8 153.257 352.005 161.8 351.846 170.893C351.846 179.895 345.8 188.346 334.821 194.683L331.603 196.541C320.72 202.824 302.578 201.729 294.182 194.281L280.65 182.277C278.811 180.646 276.402 179.254 273.578 178.191L252.758 170.356C239.817 165.485 237.977 154.959 248.972 148.694L252.086 146.92Z" stroke={gray} strokeWidth="30" />

        {/* Inner walls */}
        <path d="M252.086 47.672C274.997 34.4451 312.069 34.537 334.821 47.672C345.799 54.0099 352.004 62.5524 351.845 71.6458L351.845 163.053C351.849 163.28 351.849 163.508 351.845 163.736L351.845 163.053C351.691 154.216 345.524 145.941 334.821 139.762C312.069 126.627 274.997 126.535 252.086 139.762L227.583 153.724L227.583 61.6338L252.086 47.672Z" fill={gray} />
        <path d="M215.561 95.9719C222.661 91.8734 234.197 91.8734 241.296 95.9719C244.92 98.0642 246.694 100.824 246.618 103.57L246.618 129.542C246.621 129.655 246.621 129.768 246.618 129.881L246.618 129.542C246.545 126.909 244.771 124.289 241.296 122.283C234.197 118.185 222.661 118.185 215.561 122.283C210.533 125.186 208.906 129.37 211.124 133.042L177.995 147.215L177.995 120.904L211.124 106.73C208.906 103.059 210.533 98.8749 215.561 95.9719Z" fill={gray} />

        {/* Inner wall lines */}
        <path d="M211.295 106.85L211.295 205.865" stroke="currentColor" />
        <path d="M218.777 94.2695L218.777 193.284" stroke="currentColor" />
        <path d="M221.203 93.1274L221.203 192.142" stroke="currentColor" />
        <path d="M316.773 40.5347L316.773 139.549" stroke="currentColor" />
        <path d="M260.151 43.6201L260.151 142.635" stroke="currentColor" />
        <path d="M322.551 41.6899L322.551 140.705" stroke="currentColor" />
        <path d="M328.714 43.6201L328.714 142.635" stroke="currentColor" />

        {/* Side body */}
        <path d="M369.666 71.4619C369.666 83.4029 361.71 94.4253 347.391 102.692L320.342 118.307L320.342 217.797L347.391 202.182C361.71 193.915 369.666 182.893 369.666 170.952V71.4619Z" fill={white} stroke="currentColor" />
        <path d="M145.325 257.787L143.734 257.236C132.404 240.883 117.071 226.115 117.063 207.8L117.063 106.972C117.072 125.286 132.404 141.489 143.734 157.842L145.325 158.393C148.985 159.587 233.788 186.868 274.679 163.261C294.567 151.78 327.98 130.837 328.298 130.653L331.798 128.449L331.798 227.843L328.298 230.047C327.98 230.231 294.567 251.174 274.679 262.655C233.788 286.262 148.985 258.981 145.325 257.787Z" fill={white} stroke="currentColor" />
        <path d="M267.663 166.875L267.663 265.889" stroke="currentColor" />
        <path d="M261.404 169.206L261.404 268.221" stroke="currentColor" />
        <path d="M143.837 157.749L143.872 257.389" stroke="currentColor" />

        {/* Top surface */}
        <path d="M347.391 40.4157C361.71 48.6825 369.506 59.797 369.665 71.4624C369.665 83.4032 361.71 94.4258 347.391 102.693L320.343 118.307L331.798 128.595L328.297 130.799C327.971 130.988 294.564 151.927 274.678 163.408C233.788 187.013 148.987 159.735 145.325 158.54L143.734 157.988C128.273 135.674 97.8024 103.674 134.665 82.3924C156.935 69.5361 190.813 51.6304 191.147 51.4381L194.966 49.4172L212.628 55.9388L239.516 40.4157C269.269 23.2391 317.638 23.2391 347.391 40.4157ZM241.297 95.9718C234.197 91.8733 222.661 91.8738 215.561 95.9723C210.533 98.8753 208.906 103.059 211.125 106.73L177.994 120.904L197.221 132.004L222.809 113.476C229.02 114.671 236.267 113.732 241.296 110.829C248.395 106.73 248.396 100.07 241.297 95.9718ZM334.821 47.6722C312.069 34.5371 274.997 34.4453 252.086 47.6722L227.584 61.6338L277.861 80.5556L310.478 109.49L334.821 95.4361C345.8 89.0983 351.845 80.6476 351.845 71.646C352.004 62.5525 345.8 54.0101 334.821 47.6722Z" fill={white} stroke="currentColor" />
      </svg>
    </div>
  );
}

function WaqfVisual() {
  const c = 'waqf-clip';
  const dot = '#171717';
  const white = '#fff';
  const soft = '#f5f6f8';
  return (
    <div className="relative flex h-[240px] justify-center overflow-hidden text-tawf-ink" aria-hidden="true">
      <style>{`
        @keyframes waqfFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(var(--waqf-d)); } }
        .waqf-float { animation: waqfFloat 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .waqf-float { animation: none; } }
      `}</style>
      <svg viewBox="0 0 404 366" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-w-full" preserveAspectRatio="xMidYMin meet">
        <g clipPath={`url(#${c}1)`}>
          {/* Base */}
          <path d="M158.339 204.807L158.756 204.573C167.607 199.715 181.604 199.793 190.289 204.807L329.176 284.99C333.467 287.468 335.672 290.695 335.789 293.941C335.912 297.368 333.708 300.82 329.176 303.437L245.505 351.741C236.682 356.834 222.376 356.834 213.553 351.74L74.6679 271.557C70.1364 268.94 67.9324 265.489 68.0559 262.061C68.1729 258.815 70.3769 255.589 74.6679 253.111L158.339 204.807Z" fill={white} stroke="currentColor" />
          <path d="M158.339 131.427L158.756 131.192C167.607 126.335 181.604 126.413 190.289 131.427L329.176 211.61C333.467 214.087 335.672 217.314 335.789 220.56C335.912 223.988 333.708 227.44 329.176 230.056L245.505 278.36C236.682 283.454 222.376 283.453 213.553 278.36L74.6679 198.176C70.1364 195.56 67.9324 192.108 68.0559 188.681C68.1729 185.435 70.3769 182.208 74.6679 179.731L158.339 131.427Z" stroke="currentColor" />
          <path d="M158.928 204.708L75.2569 253.012C71.0341 255.45 68.3311 258.633 68.216 261.828V188.73C68.0958 185.394 70.848 182.037 75.2569 179.491L158.928 131.187C167.512 126.232 181.429 126.232 190.013 131.187L328.898 211.371C333.307 213.916 335.994 217.129 335.874 220.464L335.874 293.555C335.759 290.374 333.118 287.327 328.898 284.892L190.013 204.708C181.429 199.753 167.512 199.753 158.928 204.708Z" fill={white} />
          <path d="M68.2159 262.251C68.2108 262.11 68.2109 261.969 68.216 261.828M335.874 293.985C335.879 293.841 335.879 293.698 335.874 293.555M335.874 293.555C335.759 290.374 335.117 287.327 328.898 284.892L190.013 204.708C181.429 199.753 167.512 199.753 158.928 204.708L75.2569 253.012C71.0341 255.45 68.3311 258.633 68.216 261.828M335.874 293.555L335.874 220.464C335.994 217.129 333.307 213.916 328.898 211.371L190.013 131.187C181.429 126.232 167.512 126.232 158.928 131.187L75.2569 179.491C70.848 182.037 68.0958 185.394 68.216 188.73L68.216 261.828" stroke="currentColor" />
          <path d="M169.941 129.635L169.941 170.635" stroke="currentColor" />
          <path d="M151.941 134.635L151.941 176.635" stroke="currentColor" />
          <path d="M75.1009 235.971C70.6919 233.425 68.5475 230.068 68.6677 226.732C68.7815 223.574 70.9259 220.435 75.1009 218.025L158.772 169.721C167.356 164.765 181.273 164.765 189.857 169.721L328.742 249.904C332.917 252.315 335.062 255.453 335.176 258.612C335.296 261.947 333.151 265.305 328.742 267.85L245.072 316.154C236.488 321.109 222.57 321.11 213.986 316.154L75.1009 235.971Z" fill={soft} stroke="currentColor" />
          <path d="M186.941 129.635L186.941 170.635" stroke="currentColor" />
          <path d="M245.072 278.11L328.743 229.806C332.966 227.368 335.778 224.189 335.893 220.994L335.784 294.089C335.904 297.424 333.152 300.782 328.743 303.327L245.072 351.631C236.488 356.587 222.571 356.587 213.987 351.631L75.1016 271.448C70.6926 268.902 68.0062 265.69 68.1263 262.354L68.1263 189.264C68.2408 192.444 70.8825 195.491 75.1016 197.927L213.987 278.11C222.571 283.066 236.488 283.066 245.072 278.11Z" fill={white} />
          <path d="M68.1263 188.833C68.1212 188.977 68.1212 189.12 68.1263 189.264M68.1263 189.264C68.2408 192.444 70.8825 195.491 75.1016 197.927L213.987 278.11C222.571 283.066 236.488 283.066 245.072 278.11L328.743 229.806C332.966 227.368 335.778 224.189 335.893 220.994L335.784 294.089C335.904 297.424 333.152 300.782 328.743 303.327L245.072 351.631C236.488 356.587 222.571 356.587 213.987 351.631L75.1016 271.448C70.6926 268.902 68.0062 265.69 68.1263 262.354L68.1263 189.264Z" stroke="currentColor" />
          <path d="M216.941 279.635L216.941 353.635" stroke="currentColor" />
          <path d="M241.941 279.635L241.941 353.635" stroke="currentColor" />
          <path d="M229.941 281.635L229.941 355.635" stroke="currentColor" />
        </g>

        {/* Lid */}
        <g clipPath={`url(#${c}2)`}>
          <path d="M329.136 211.062L196.844 134.936C186.405 128.93 177.943 114.323 177.943 102.311L177.941 28.797C177.94 22.3464 180.38 17.9558 184.256 16.2031L201.42 7.14613C201.732 6.95634 202.055 6.78577 202.389 6.63477L201.42 7.14613C198.111 9.1593 196.074 13.3338 196.074 19.2287L196.076 92.7422C196.077 104.754 204.539 119.361 214.977 125.368L347.269 201.494C350.395 203.292 353.343 202.303 355.941 202.252L342.604 211.062L339.919 212.619L338.786 213.163C338.141 213.472 337.437 213.655 336.723 213.604C334.401 213.441 331.834 212.615 329.136 211.062Z" fill={white} stroke="currentColor" />
          <path d="M193.712 21.6123C193.712 13.2507 197.824 8.37253 203.841 8.25247C206.413 8.20115 209.333 9.01938 212.428 10.8067L343.437 86.4504C353.774 92.4188 362.154 106.933 362.154 118.869L362.157 189.194C362.157 195.604 359.74 199.967 355.902 201.709C352.593 203.21 348.227 205.486 343.441 202.723L212.432 127.079C206.385 123.588 201.008 117.172 197.586 110.059C195.158 105.012 193.715 99.6141 193.715 94.6603L193.712 21.6123Z" fill={soft} stroke="currentColor" />
          <path d="M211.577 9.18919L343.142 85.3517C353.522 91.361 361.938 105.975 361.938 117.993L361.941 190.635C361.941 197.089 359.514 201.482 355.66 203.235L339.46 212.76C338.804 213.16 338.067 213.455 337.244 213.635L339.281 212.865L339.46 212.76C342.635 210.827 343.907 206.464 343.907 201.115L343.905 127.566C343.905 115.548 335.489 100.934 325.108 94.9246L193.544 18.7621C190.435 16.9625 187.343 15.9305 184.76 15.9821C184.76 15.9821 199.5 7.5 202.5 6.4997C205.5 5.4994 208.468 7.38956 211.577 9.18919Z" fill={white} />
          <path d="M211.577 9.18919L343.142 85.3517C353.522 91.361 361.938 105.975 361.938 117.993L361.941 190.635C361.941 197.089 359.514 201.482 355.66 203.235L339.281 212.865L337.244 213.635C342.056 212.586 343.907 207.569 343.907 201.115L343.905 127.566C343.905 115.548 335.489 100.934 325.108 94.9246L193.544 18.7621C190.435 16.9625 187.343 15.9305 184.76 15.9821C184.76 15.9821 199.5 7.5 202.5 6.4997C205.5 5.4994 208.468 7.38956 211.577 9.18919Z" stroke="currentColor" />
        </g>

        <g clipPath={`url(#${c}3)`}>
          {/* Card 1: hand/pointer */}
          <g className="waqf-float" style={{ ['--waqf-d' as string]: '10px' }}>
            <path d="M297.621 196.057C297.621 205.653 294.438 212.552 289.224 216.088C283.405 220.035 275.057 219.794 265.783 214.439C248.198 204.286 233.942 179.594 233.942 159.289C233.942 149.341 237.363 142.292 242.921 138.882C248.708 135.332 256.811 135.728 265.78 140.907C283.365 151.061 297.62 175.752 297.621 196.057Z" fill={white} stroke="currentColor" />
            <path d="M297.621 196.057C297.62 175.752 283.364 151.061 265.78 140.907C257.165 135.933 249.349 135.371 243.617 138.48L242.92 138.882C243.149 138.742 243.381 138.608 243.617 138.48L254.179 132.382C259.966 128.832 268.069 129.156 277.039 134.335C294.623 144.488 307.879 168.179 307.879 188.485C307.88 198.08 305.696 205.979 300.483 209.516L289.765 215.704C294.657 212.064 297.621 205.316 297.621 196.057Z" fill={white} />
            <path d="M289.224 216.088C294.438 212.552 297.621 205.653 297.621 196.057C297.62 175.752 283.364 151.061 265.78 140.907C256.81 135.728 248.707 135.332 242.92 138.882L254.179 132.382C259.966 128.832 268.069 129.156 277.039 134.335C294.623 144.488 307.879 168.179 307.879 188.485C307.88 198.08 305.696 205.979 300.483 209.516L289.224 216.016" stroke="currentColor" />
            <g clipPath={`url(#${c}4)`}>
              <path d="M255.679 189.802C258.469 191.413 260.731 190.107 260.731 186.885C260.731 183.663 258.469 179.745 255.678 178.134C252.888 176.523 250.626 177.829 250.626 181.051C250.627 184.273 252.889 188.191 255.679 189.802Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M275.885 178.136C278.675 179.747 280.937 178.441 280.937 175.219C280.937 171.997 278.675 168.079 275.885 166.468C273.094 164.857 270.833 166.163 270.833 169.385C270.833 172.607 273.095 176.525 275.885 178.136Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M255.678 171.467L255.677 160.634C255.677 158.793 256.97 158.047 258.564 158.968L261.754 160.809C263.225 161.659 264.46 163.649 264.623 165.431L266.94 190.838C267.102 192.62 268.338 194.61 269.809 195.46L272.998 197.301C274.593 198.222 275.885 197.476 275.885 195.635L275.885 184.801" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* Card 2: robot */}
          <g className="waqf-float" style={{ ['--waqf-d' as string]: '-4px', animationDelay: '0.1s' }}>
            <path d="M209.621 224.057C209.621 233.653 206.438 240.552 201.224 244.088C195.405 248.035 187.057 247.794 177.783 242.439C160.198 232.286 145.942 207.594 145.942 187.289C145.942 177.341 149.363 170.292 154.921 166.882C160.708 163.332 168.811 163.728 177.78 168.907C195.365 179.061 209.62 203.752 209.621 224.057Z" fill={white} stroke="currentColor" />
            <path d="M209.621 224.057C209.62 203.752 195.364 179.061 177.78 168.907C169.165 163.933 161.349 163.371 155.617 166.48L154.92 166.882C155.149 166.742 155.381 166.608 155.617 166.48L166.179 160.382C171.966 156.832 180.069 157.156 189.039 162.335C206.623 172.488 219.879 196.179 219.879 216.485C219.88 226.08 217.696 233.979 212.483 237.516L201.765 243.704C206.657 240.064 209.621 233.316 209.621 224.057Z" fill={white} />
            <path d="M201.224 244.088C206.438 240.552 209.621 233.653 209.621 224.057C209.62 203.752 195.364 179.061 177.78 168.907C168.81 163.728 160.707 163.332 154.92 166.882L166.179 160.382C171.966 156.832 180.069 157.156 189.039 162.335C206.623 172.488 219.879 196.179 219.879 216.485C219.88 226.08 217.696 233.979 212.483 237.516L201.224 244.016" stroke="currentColor" />
            <g clipPath={`url(#${c}5)`}>
              <path d="M177.782 206.551C178.778 207.127 179.586 206.66 179.586 205.509C179.586 204.359 178.778 202.959 177.781 202.384C176.785 201.809 175.977 202.275 175.977 203.426C175.977 204.577 176.785 205.976 177.782 206.551Z" fill={dot} />
              <path d="M170.926 202.593C171.922 203.168 172.73 202.702 172.73 201.551C172.73 200.4 171.922 199.001 170.925 198.426C169.929 197.85 169.121 198.317 169.121 199.467C169.121 200.618 169.929 202.017 170.926 202.593Z" fill={dot} />
              <path d="M184.637 210.51C185.634 211.086 186.442 210.619 186.442 209.468C186.442 208.318 185.634 206.918 184.637 206.343C183.641 205.768 182.833 206.234 182.833 207.385C182.833 208.536 183.641 209.935 184.637 210.51Z" fill={dot} />
              <path d="M192.215 211.135L192.215 206.135C192.214 204.293 190.923 202.056 189.328 201.135L166.234 187.801C164.639 186.88 163.347 187.625 163.348 189.467L163.348 202.8C163.348 204.642 164.64 206.88 166.235 207.801L173.451 211.967" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M179.225 216.968L182.834 223.219L192.216 217.802" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* Card 3: sparkle */}
          <g className="waqf-float" style={{ ['--waqf-d' as string]: '-10px', animationDelay: '0.2s' }}>
            <path d="M174.495 125.39C174.496 134.986 171.312 141.885 166.098 145.421C160.279 149.368 151.931 149.127 142.657 143.772C125.072 133.619 110.817 108.927 110.816 88.6223C110.816 78.6743 114.237 71.6247 119.795 68.2152C125.582 64.6654 133.685 65.0614 142.654 70.2404C160.239 80.3935 174.495 105.085 174.495 125.39Z" fill={white} stroke="currentColor" />
            <path d="M174.495 125.39C174.494 105.085 160.239 80.3935 142.654 70.2404C134.039 65.2661 126.223 64.7042 120.492 67.8129L119.795 68.2152C120.023 68.075 120.256 67.9408 120.492 67.8129L131.054 61.7149C136.84 58.1651 144.943 58.4889 153.913 63.6678C171.497 73.821 184.753 97.5124 184.754 117.818C184.754 127.413 182.571 135.312 177.357 138.849L166.639 145.037C171.531 141.397 174.495 134.649 174.495 125.39Z" fill={white} />
            <path d="M166.098 145.421C171.312 141.885 174.495 134.986 174.495 125.39C174.494 105.085 160.239 80.3935 142.654 70.2404C133.685 65.0614 125.582 64.6654 119.795 68.2152L131.054 61.7149C136.84 58.1651 144.943 58.4889 153.913 63.6678C171.497 73.821 184.753 97.5124 184.754 117.818C184.754 127.413 182.571 135.312 177.357 138.849L166.098 145.349" stroke="currentColor" />
            <g clipPath={`url(#${c}6)`}>
              <path d="M144.675 98.2471L148.322 109.475L156.222 118.247L148.322 117.896L144.676 124.914L141.029 113.686L133.129 104.913L141.029 105.265L144.675 98.2471Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M135.366 91.956L133.85 86.9972L132.335 90.2058L128.798 89.914L132.335 93.7061L133.851 98.665L135.366 95.4564L138.903 95.7482L135.366 91.956Z" fill={dot} />
            </g>
          </g>

          {/* Card 4: network */}
          <g className="waqf-float" style={{ ['--waqf-d' as string]: '4px', animationDelay: '0.4s' }}>
            <path d="M265.621 88.0571C265.621 97.6528 262.438 104.552 257.224 108.088C251.405 112.035 243.057 111.794 233.783 106.439C216.198 96.2858 201.942 71.5944 201.942 51.2892C201.942 41.3413 205.363 34.2917 210.921 30.8822C216.708 27.3324 224.811 27.7284 233.78 32.9074C251.365 43.0605 265.62 67.7519 265.621 88.0571Z" fill={white} stroke="currentColor" />
            <path d="M265.621 88.0571C265.62 67.7519 251.364 43.0605 233.78 32.9073C225.165 27.9331 217.349 27.3712 211.617 30.4799L210.92 30.8822C211.149 30.7419 211.381 30.6078 211.617 30.4799L222.179 24.3819C227.966 20.8321 236.069 21.1559 245.039 26.3348C262.623 36.488 275.879 60.1794 275.879 80.4846C275.88 90.0804 273.696 97.9794 268.483 101.516L257.765 107.704C262.657 104.064 265.621 97.3161 265.621 88.0571Z" fill={white} />
            <path d="M257.224 108.088C262.438 104.552 265.621 97.6529 265.621 88.0571C265.62 67.7519 251.364 43.0605 233.78 32.9073C224.81 27.7284 216.707 27.3324 210.92 30.8822L222.179 24.3819C227.966 20.8321 236.069 21.1559 245.039 26.3348C262.623 36.488 275.879 60.1794 275.879 80.4846C275.88 90.0804 273.696 97.9794 268.483 101.516L257.224 108.016" stroke="currentColor" />
            <g clipPath={`url(#${c}7)`}>
              <path d="M240.276 58.5513L248.215 72.3015L248.215 85.6349L241.72 89.3847" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M227.287 82.7174L219.348 68.9671L219.348 55.6338L225.842 51.884" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M233.782 87.301L233.782 82.301L226.565 69.8008L226.564 64.8008" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M233.781 53.9678L233.781 58.9678L240.998 71.468L240.998 76.468" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M240.999 86.4682C239.404 85.5475 238.112 86.2937 238.112 88.1349C238.112 89.9761 239.405 92.2149 240.999 93.1355C242.593 94.0561 243.886 93.3099 243.886 91.4688C243.886 89.6276 242.593 87.3888 240.999 86.4682Z" fill={dot} />
              <path d="M226.564 54.8015C228.159 55.7221 229.451 54.9759 229.451 53.1348C229.451 51.2936 228.159 49.0548 226.564 48.1342C224.97 47.2136 223.677 47.9598 223.677 49.8009C223.677 51.6421 224.97 53.8809 226.564 54.8015Z" fill={dot} />
              <path d="M226.565 59.8012C224.97 58.8806 223.678 59.6268 223.678 61.4679C223.678 63.3091 224.97 65.5479 226.565 66.4685C228.159 67.3891 229.452 66.6429 229.452 64.8018C229.452 62.9606 228.159 60.7218 226.565 59.8012Z" fill={dot} />
              <path d="M240.999 81.4685C242.593 82.3891 243.885 81.6429 243.885 79.8018C243.885 77.9606 242.593 75.7218 240.998 74.8012C239.404 73.8806 238.111 74.6268 238.111 76.4679C238.111 78.3091 239.404 80.5479 240.999 81.4685Z" fill={dot} />
            </g>
          </g>
        </g>

        <defs>
          <clipPath id={`${c}1`}><rect width="403.881" height="243.785" transform="translate(0.0593262 122.214)" /></clipPath>
          <clipPath id={`${c}2`}><rect width="186" height="215" transform="translate(177)" /></clipPath>
          <clipPath id={`${c}3`}><rect width="199" height="260" transform="translate(110 -10)" /></clipPath>
          <clipPath id={`${c}4`}><rect width="40" height="40" transform="matrix(0.86601 0.500028 3.18709e-05 1 248.46 148.134)" /></clipPath>
          <clipPath id={`${c}5`}><rect width="40" height="40" transform="matrix(0.86601 0.500028 3.18709e-05 1 160.46 176.134)" /></clipPath>
          <clipPath id={`${c}6`}><rect width="40" height="40" transform="matrix(0.86601 0.500028 3.18709e-05 1 128.799 84.0801)" /></clipPath>
          <clipPath id={`${c}7`}><rect width="40" height="40" transform="matrix(0.86601 0.500028 3.18709e-05 1 216.46 40.6338)" /></clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SadaqahVisual() {
  const white = '#fff';
  const gray = '#e4e6ea';
  const dot = '#171717';
  return (
    <div className="relative flex h-[240px] justify-center overflow-hidden text-tawf-ink" aria-hidden="true">
      <style>{`
        @keyframes sadaqahBlink { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
        .sadaqah-blink { animation: sadaqahBlink 1.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .sadaqah-blink { animation: none; } }
      `}</style>
      <svg viewBox="80 0 280 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-w-full" preserveAspectRatio="xMidYMin meet">
        <defs>
          <clipPath id="sadaqah-clip-glow"><rect x="80" y="170" width="280" height="100" /></clipPath>
        </defs>

        {/* Glow */}
        <g clipPath="url(#sadaqah-clip-glow)">
          <path d="M110.809 195.679C105.951 192.874 103.589 189.175 103.721 185.5C103.846 182.021 106.209 178.563 110.809 175.907L202.991 122.69C212.448 117.23 227.781 117.23 237.238 122.69L329.421 175.907C334.021 178.563 336.383 182.021 336.509 185.5C336.641 189.175 334.278 192.874 329.421 195.679L237.238 248.896C227.781 254.356 212.448 254.356 202.991 248.896L110.809 195.679Z" stroke={gray} strokeWidth="30" />
        </g>

        {/* Top face */}
        <path d="M202.558 10.4395L203.017 10.1812C212.745 4.84338 228.127 4.92931 237.672 10.4395L329.854 63.6573C334.57 66.3798 336.992 69.926 337.12 73.4932C337.256 77.2602 334.835 81.0536 329.854 83.9286L237.672 137.146C227.976 142.744 212.255 142.744 202.558 137.146L110.376 83.9286C105.395 81.0535 102.973 77.2598 103.109 73.4927C103.238 69.9255 105.66 66.3797 110.376 63.6573L202.558 10.4395Z" fill={white} stroke="currentColor" />
        <circle cx="2.47155" cy="2.47155" r="2.47155" transform="matrix(0.866041 -0.499972 0.866041 0.499972 117.58 73.793)" fill={dot} />
        <circle cx="2.47155" cy="2.47155" r="2.47155" transform="matrix(0.866041 -0.499972 0.866041 0.499972 216.149 16.8877)" fill={dot} />
        <circle cx="2.47155" cy="2.47155" r="2.47155" transform="matrix(0.866041 -0.499972 0.866041 0.499972 216.149 130.697)" fill={dot} />
        <circle cx="2.47155" cy="2.47155" r="2.47155" transform="matrix(0.866041 -0.499972 0.866041 0.499972 314.719 73.793)" fill={dot} />

        {/* Side faces */}
        <path d="M237.238 136.895L329.421 83.6778C334.072 80.9926 336.989 77.6353 337.112 74.1288V73.6669C337.117 73.8211 337.117 73.9751 337.112 74.1288V186.242C337.244 189.917 334.278 193.454 329.421 196.258L237.238 249.476C227.781 254.936 212.448 254.936 202.991 249.476L110.808 196.258C105.953 193.455 103.037 190.077 103.167 186.404L103.167 74.2987C103.161 74.1394 103.161 73.9795 103.167 73.819L103.167 74.2987C103.293 77.7879 106.163 80.996 110.808 83.6778L202.991 136.895C212.448 142.355 227.781 142.355 237.238 136.895Z" fill={white} />
        <path d="M337.112 73.6613C337.112 73.6632 337.112 73.665 337.112 73.6669M103.167 186.399C103.167 186.401 103.167 186.402 103.167 186.404M337.112 73.6669C337.241 77.3397 334.276 80.875 329.421 83.6778L237.238 136.895C227.781 142.355 212.448 142.355 202.991 136.895L110.808 83.6778C105.951 80.8735 103.035 77.4938 103.167 73.819L103.167 186.404M337.112 73.6669V186.242C337.244 189.917 334.278 193.454 329.421 196.258L237.238 249.476C227.781 254.936 212.448 254.936 202.991 249.476L110.808 196.258C105.953 193.455 103.037 190.077 103.167 186.404" stroke="currentColor" />
        <path d="M337.112 129.905C337.112 129.907 337.112 129.908 337.112 129.91C337.241 133.583 334.276 137.118 329.421 139.921L237.238 193.139C227.781 198.599 212.448 198.599 202.991 193.139L110.808 139.921C105.951 137.117 103.034 133.737 103.167 130.062" stroke="currentColor" />
        <path d="M231.153 139.359V251.98" stroke="currentColor" />
        <path d="M208.156 139.359V251.98" stroke="currentColor" />
        <path d="M220.195 141.275V253.896" stroke="currentColor" />

        {/* Blinking dots (right face) */}
        <circle className="sadaqah-blink" style={{ animationDelay: '0.1s' }} cx="4.95875" cy="4.95875" r="4.95875" transform="matrix(0.86601 -0.500028 -3.18351e-05 1 317.603 116.204)" fill={gray} />
        <circle className="sadaqah-blink" style={{ animationDelay: '0.3s' }} cx="4.95875" cy="4.95875" r="4.95875" transform="matrix(0.86601 -0.500028 -3.18351e-05 1 306.315 122.769)" fill={gray} />
        <circle className="sadaqah-blink" style={{ animationDelay: '0.6s' }} cx="4.95875" cy="4.95875" r="4.95875" transform="matrix(0.86601 -0.500028 -3.18351e-05 1 294.506 129.441)" fill={gray} />

        {/* Left face lines */}
        <path d="M115.638 98.79V129.055" stroke="currentColor" />
        <path d="M119.952 101.101V131.366" stroke="currentColor" />
        <path d="M124.266 103.412V133.677" stroke="currentColor" />
        <path d="M128.581 105.723V135.988" stroke="currentColor" />

        {/* Cursor arrow */}
        <path d="M253.296 54.5084C253.93 54.5299 254.435 54.8217 254.472 55.1875L257.57 85.5804C257.637 86.244 256.247 86.6041 255.433 86.1341L247.695 81.667L226.723 93.7748C224.406 95.1124 220.652 95.1124 218.335 93.7748C202.188 84.4533 205.294 86.2465 186.457 75.3715C184.14 74.0338 184.139 71.8661 186.456 70.5285L207.429 58.4208L199.691 53.9537C198.877 53.4837 199.501 52.6815 200.65 52.7204L253.296 54.5084Z" fill="#0e8a5f" />
      </svg>
    </div>
  );
}

function QardVisual() {
  return (
    <div className="relative flex h-[250px] justify-center overflow-hidden" aria-hidden="true">
      <svg viewBox="80 50 340 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-w-full" preserveAspectRatio="xMidYMin meet">
        <defs>
          <filter id="qard-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
          </filter>
          <linearGradient id="qard-boxTop" x1="120" y1="180" x2="390" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F3F5F6" />
          </linearGradient>
          <linearGradient id="qard-boxSide" x1="130" y1="245" x2="380" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F5F6F7" />
          </linearGradient>
          <linearGradient id="qard-coin" x1="235" y1="155" x2="310" y2="245" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F0F2F3" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="260" cy="365" rx="145" ry="27" fill="#DDE2E5" opacity="0.7" filter="url(#qard-shadow)" />

        {/* Plant stem */}
        <path d="M175 195C174 165 176 139 194 112" stroke="#263238" strokeWidth="3" strokeLinecap="round" />

        {/* Left leaf */}
        <path d="M177 150C151 145 137 126 139 105C161 104 180 116 185 136C187 143 183 148 177 150Z" fill="#12956C" stroke="#263238" strokeWidth="2.5" />

        {/* Right leaf */}
        <path d="M194 113C190 87 204 67 226 61C231 84 222 104 202 115C199 116 196 115 194 113Z" fill="#39B883" stroke="#263238" strokeWidth="2.5" />

        {/* Document behind box */}
        <path d="M291 96L379 145C386 149 390 156 390 164L390 257C390 266 382 272 374 267L291 219C285 215 281 208 281 201L281 108C281 98 286 93 291 96Z" fill="#FFFFFF" stroke="#263238" strokeWidth="2.5" />

        {/* Document inner edge */}
        <path d="M297 108L369 149C375 152 378 157 378 164V246" stroke="#DCE1E4" strokeWidth="2" strokeLinecap="round" />

        {/* Document lines */}
        <path d="M304 138L350 164" stroke="#DCE1E4" strokeWidth="6" strokeLinecap="round" />
        <path d="M304 156L338 175" stroke="#DCE1E4" strokeWidth="6" strokeLinecap="round" />
        <path d="M304 174L329 188" stroke="#DCE1E4" strokeWidth="6" strokeLinecap="round" />

        {/* Verification circle */}
        <circle cx="350" cy="206" r="24" fill="#DDF4EA" />
        <path d="M339 205L347 213L363 195" stroke="#12956C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Main box top */}
        <path d="M111 207L227 139C233 136 241 136 247 139L386 216C395 221 395 232 386 237L266 306C259 310 250 310 243 306L111 233C101 228 101 213 111 207Z" fill="url(#qard-boxTop)" stroke="#263238" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Slot */}
        <path d="M171 205L236 168L315 212L250 250L171 205Z" fill="#E9EDF0" stroke="#263238" strokeWidth="2" strokeLinejoin="round" />
        <path d="M188 204L236 177L297 211L250 238L188 204Z" fill="#DDE2E5" />

        {/* Front body */}
        <path d="M111 229L243 302C250 306 259 306 266 302L386 233L386 323C386 331 382 337 375 341L266 403C259 407 250 407 243 403L119 335C113 332 110 326 110 319L111 229Z" fill="url(#qard-boxSide)" stroke="#263238" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Seams */}
        <path d="M266 306V403" stroke="#263238" strokeWidth="2" />
        <path d="M119 335L119 250" stroke="#E1E5E7" strokeWidth="2" />

        {/* Coin */}
        <ellipse cx="246" cy="202" rx="48" ry="62" transform="rotate(-24 246 202)" fill="#D7DCDF" stroke="#263238" strokeWidth="2.5" />
        <ellipse cx="239" cy="194" rx="47" ry="61" transform="rotate(-24 239 194)" fill="url(#qard-coin)" stroke="#263238" strokeWidth="2.5" />

        {/* Helping hands icon */}
        <path d="M218 202C218 193 220 185 225 178C228 174 233 176 233 181L233 198L241 190C244 187 248 188 250 191C252 194 251 198 248 201L239 210C235 214 229 216 224 214L218 211" stroke="#263238" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M253 207C257 210 261 210 265 207L274 199C277 196 277 192 274 190C272 188 269 188 266 191L258 198L258 181C258 177 255 175 252 177C250 178 249 181 249 184" stroke="#263238" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Green accent */}
        <circle cx="196" cy="269" r="5" fill="#12956C" />

        {/* Bottom highlight */}
        <path d="M139 335L240 390" stroke="#E6E9EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ChainVisual({ transactions }: { transactions: string[][] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(transactions.length - 1);
      return;
    }
    const timer = window.setInterval(() => setActive((value) => (value + 1) % (transactions.length + 1)), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative grid gap-2.5 pl-6 [mask-image:linear-gradient(#000_55%,transparent)]" aria-hidden="true">
      <span className="absolute bottom-3 left-1.5 top-3 w-px bg-[#e4e6ea]" />
      {transactions.map(([name, hash], index) => {
        const done = index < active;
        const current = index === active;
        return <div key={name} className={`relative flex items-center gap-3 rounded-[10px] border bg-white px-3.5 py-2.5 font-mono text-xs transition-all duration-300 ${current ? 'border-[#0e8a5f] shadow-[0_0_0_4px_rgba(14,138,95,.13)]' : 'border-[#e4e6ea]'}`}><span className={`absolute -left-6 top-1/2 size-2.5 -translate-y-1/2 rounded-full border ${done || current ? 'border-[#0e8a5f] bg-[#0e8a5f]' : 'border-[#666b75] bg-white'}`} /><b className="font-medium">{name}</b><span className="text-[#666b75]">{hash}</span><CheckCircle2 className={`ml-auto size-3.5 shrink-0 text-[#0e8a5f] transition-opacity ${done || current ? 'opacity-100' : 'opacity-0'}`} /></div>;
      })}
    </div>
  );
}

export default function MissionSection() {
  const { t } = useLang();
  const m = t.mission;
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white border-y border-tawf-green/10">
      <div className={CONTAINER}>
        <div className="grid grid-cols-6 border-l border-r border-t border-[#e4e6ea]">
          <Reveal className="col-span-6 grid min-h-[400px] grid-cols-1 gap-7 border-b border-[#e4e6ea] px-6 pt-8 md:grid-cols-[1.05fr_1fr] md:gap-10 md:px-10 md:pt-11">
            <div className="pb-8 md:pb-11">
              <p className="mb-[18px] flex flex-wrap items-center gap-2.5 text-[15px] font-semibold text-tawf-ink">
                {m.eyebrow}
                <span className="h-px w-5 bg-[#C5A869]" aria-hidden="true" />
                <span lang="ar" dir="rtl" className="font-kufi text-base font-medium text-[#9a7a2e]">{AR.kufi.about}</span>
              </p>
              <h2 className="mb-5 max-w-[14ch] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-tight text-tawf-ink">{m.title}</h2>
              <p className="max-w-[46ch] text-base leading-relaxed text-tawf-muted">{m.desc}</p>
              <OrnamentDivider className="mt-8" />
              <p lang="ar" dir="rtl" className="mt-5 text-left font-arabic text-[28px] text-[#9a7a2e]">{AR.name}</p>
            </div>
            <div className="relative flex items-end justify-center pb-10 pt-8">
              <StarPattern color={GOLD} opacity={0.4} size={64} mask="radial-gradient(circle at 50% 55%, #000 20%, transparent 65%)" />
              <ArchFrame className="aspect-[3/4] w-[min(320px,78%)]">
                <img src={PHOTOS.interior.src} alt={m.photoAlt} loading="lazy" className="h-full w-full object-cover" />
              </ArchFrame>
            </div>
          </Reveal>

          {[
            { ...m.items[0], visual: <ZakatVisual /> },
            { ...m.items[1], visual: <WaqfVisual /> },
            { ...m.items[2], visual: <SadaqahVisual /> },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className={`relative col-span-6 min-h-[320px] overflow-hidden border-b border-[#e4e6ea] px-6 pt-8 md:px-8 lg:col-span-2 lg:px-8 ${index < 2 ? 'lg:border-r' : ''}`}>
              <h3 className="mb-2 flex flex-wrap items-center gap-2.5 text-base font-semibold tracking-tight text-tawf-ink">{item.title} <StatusPill status={item.status} /></h3>
              <p className="max-w-[36ch] text-[14.5px] leading-[1.55] text-tawf-muted">{item.desc}</p>
              <div className="relative mt-7 min-h-[180px] flex-1">{item.visual}</div>
            </Reveal>
          ))}

          <Reveal delay={0.24} className="relative col-span-6 min-h-[320px] overflow-hidden border-b border-[#e4e6ea] px-6 pt-8 md:px-8 lg:col-span-3 lg:border-r lg:px-8">
            <h3 className="mb-2 flex flex-wrap items-center gap-2.5 text-base font-semibold tracking-tight text-tawf-ink">{m.fourth.title} <StatusPill status="soon" /></h3>
            <p className="max-w-[52ch] text-[14.5px] leading-[1.55] text-tawf-muted">{m.fourth.desc}</p>
            <div className="relative mt-7 min-h-[250px] flex-1"><QardVisual /></div>
          </Reveal>

          <Reveal delay={0.32} className="relative col-span-6 min-h-[320px] overflow-hidden border-b border-[#e4e6ea] px-6 pt-8 md:px-8 lg:col-span-3 lg:px-8">
            <p className="max-w-[20ch] text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.16] tracking-tight text-tawf-ink">{m.chainTitle}</p>
            <div className="relative mt-7 min-h-[250px] flex-1"><ChainVisual transactions={m.chain} /></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
