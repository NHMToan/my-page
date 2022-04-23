import { CSSProperties, FC, HTMLInputTypeAttribute, ReactNode } from 'react';
import FormItem from '../FormItem';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  style?: CSSProperties;
  className?: string;
  label?: ReactNode;
  type?: HTMLInputTypeAttribute;
}
const Input: FC<InputProps> = ({
  type,
  name,
  className,
  style,
  label,
  ...props
}) => {
  return (
    <FormItem name={name} className={className} style={style} label={label}>
      <input type={type} className="i-form-input" name={name} {...props} />
    </FormItem>
  );
};

export default Input;
