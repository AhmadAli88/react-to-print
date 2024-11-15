import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const StyledPrintExample = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={reactToPrintFn}>Print Styled Content</button>
      <div ref={contentRef} style={{ padding: '20px', border: '1px solid black' }}>
        <h2 style={{ color: 'blue' }}>Styled Print</h2>
        <p>This content is styled and will be printed as is.</p>
      </div>
    </div>
  );
};

export default StyledPrintExample;
