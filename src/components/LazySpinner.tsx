import { useState, useEffect } from 'react';

interface Props {
  show: boolean;
  delay?: number;
}

const LazySpinner = (props: Props) => {
  const { show = false, delay = 0 } = props;
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!show) {
      setShowSpinner(false);
      return;
    }

    if (delay === 0) {
      setShowSpinner(true);
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [show, delay]);

  return showSpinner ? (
    // <div className="loader"></div>
    <p>loading...</p>
  ) : null;
};

export default LazySpinner;
