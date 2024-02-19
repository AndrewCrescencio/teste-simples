import type { ReactNode } from 'react';

type IContainerProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  className?: string;
};

const Container = (props: IContainerProps) => (
  <div
    className={`container mx-auto max-w-screen-xl px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    } ${props.className ?? props?.className}`}
  >
    {(props.title || props.description) && (
      <div className="mb-16 text-center">
        {props.title && (
          <h2 className="mb-12 text-4xl font-bold text-gray-900">
            {props.title}
          </h2>
        )}
        {props.description && (
          <p className="mt-4 text-xl md:px-20">{props.description}</p>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Container };
