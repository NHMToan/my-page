import { CSSProperties, FC, ReactNode } from 'react';
import FormItem from '../FormItem';

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  style?: CSSProperties;
  className?: string;
  label?: ReactNode;
}
const Textarea: FC<TextareaProps> = ({
  name,
  className,
  style,
  label,
  ...props
}) => {
  return (
    <FormItem name={name} className={className} style={style} label={label}>
      <textarea className="i-form-input" name={name} {...props} />
    </FormItem>
  );
};

export default Textarea;
