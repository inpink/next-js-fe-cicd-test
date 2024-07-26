import { SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        d="M9 12.2708C5.58612 12.2708 2.55019 13.9875 0.617355 16.6515C0.201357 17.2248 -0.00664202 17.5115 0.000161652 17.899C0.00541812 18.1983 0.18591 18.5759 0.412067 18.7608C0.704792 19 1.11044 19 1.92174 19H16.0783C16.8896 19 17.2952 19 17.5879 18.7608C17.8141 18.5759 17.9946 18.1983 17.9998 17.899C18.0066 17.5115 17.7986 17.2248 17.3826 16.6515C15.4498 13.9875 12.4139 12.2708 9 12.2708Z"
        fill="currentColor"
      />
      <path
        d="M9 10.0938C11.6764 10.0938 13.8461 7.83419 13.8461 5.04688C13.8461 2.25956 11.6764 0 9 0C6.32358 0 4.15392 2.25956 4.15392 5.04688C4.15392 7.83419 6.32358 10.0938 9 10.0938Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserIcon;
