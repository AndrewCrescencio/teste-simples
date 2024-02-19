import className from 'classnames';

import type { IButtonProps } from './types';

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <button
      className={`${btnClass} ${props.className}`}
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:disabled {
            @apply bg-gray-600 hover:bg-gray-200 cursor-not-allowed;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </button>
  );
};

export { Button };
