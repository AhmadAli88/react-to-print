import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const BasicExample = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={reactToPrintFn}>Print</button>
      <div ref={contentRef}>
        <h1>Hello, World!</h1>
        <p>This is a basic example of printing.</p>
      </div>
    </div>
  );
};

export default BasicExample;
