import type React from 'react';

export interface InputSelectOption {
  value?: string | number;
  label?: string;
}

export interface InputSelectProps
  extends React.ComponentPropsWithoutRef<'select'> {
  options: InputSelectOption[];
  label?: string;
}
