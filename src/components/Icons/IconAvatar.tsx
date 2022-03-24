import React from 'react';

const IconAvatar = ({ color }: { color: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill={color} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 20C23.3137 20 26 17.3137 26 14C26 10.6863 23.3137 8 20 8C16.6863 8 14 10.6863 14 14C14 17.3137 16.6863 20 20 20ZM20 48C26.6274 48 32 42.6274 32 36C32 29.3726 26.6274 24 20 24C13.3726 24 8 29.3726 8 36C8 42.6274 13.3726 48 20 48Z"
      fill="white"
    />
  </svg>
);

export default IconAvatar;
