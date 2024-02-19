export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  xl?: boolean;
  children: string;
  onClick?: () => void;
}
