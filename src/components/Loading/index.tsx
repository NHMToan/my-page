import { FC } from 'react';

interface LoadingProps {}
const Loading: FC<LoadingProps> = () => {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
