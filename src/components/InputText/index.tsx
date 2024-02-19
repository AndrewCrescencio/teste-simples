import type { InputTextProps } from './types';

export const InputText = (props: InputTextProps) => {
  return (
    <label className="block w-full max-w-64">
      {props.label}
      <input
        {...props}
        className="mt-2 w-full max-w-64 border border-primary-200 p-3"
      />
    </label>
  );
};
