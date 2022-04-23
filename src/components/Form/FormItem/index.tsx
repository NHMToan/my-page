import { ErrorMessage } from 'formik';
import { CSSProperties, FC, ReactNode } from 'react';

interface FormItemProps {
  style?: CSSProperties;
  className?: string;
  label?: ReactNode;
  children: ReactNode;
  name?: string;
}
const FormItem: FC<FormItemProps> = ({
  className,
  style,
  label,
  children,
  name,
}) => {
  const handleClassName = () => {
    let classes = 'i-row i-form-item';
    if (className) classes += ` ${className}`;
    return classes;
  };
  return (
    <div className={handleClassName()} style={style}>
      <div className="col-4 i-form-label">
        <label>{label}</label>
      </div>
      <div className="col-8 i-form-control">{children}</div>
      <div className="col-12">
        <ErrorMessage name={name} component="div" />
      </div>
    </div>
  );
};

export default FormItem;
