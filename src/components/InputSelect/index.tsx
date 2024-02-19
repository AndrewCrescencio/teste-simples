import type { InputSelectProps } from './types';

export const InputSelect = (props: InputSelectProps) => {
  return (
    <label className="block w-full max-w-64">
      {props.label}
      <select
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        className="mt-2 w-full max-w-64 border border-primary-200 p-3"
      >
        {props!.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </label>
  );
};
