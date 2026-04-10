export function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="44" height="44" rx="10" fill="#1B4F72" />
      <path
        d="M22 11C15.9 11 11 15.9 11 22C11 26.2 13.2 29.8 16.5 31.8L22 35L27.5 31.8C30.8 29.8 33 26.2 33 22C33 15.9 28.1 11 22 11Z"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 22C16.5 19 18.9 16.5 22 16.5C25.1 16.5 27.5 19 27.5 22"
        stroke="#CA6F1E"
        stroke-width="2.2"
        stroke-linecap="round"
      />
      <circle cx="22" cy="22" r="3" fill="#CA6F1E" />
    </svg>
  );
}
