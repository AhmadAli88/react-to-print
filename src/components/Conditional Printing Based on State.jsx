import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

const ConditionalPrintExample = () => {
  const [canPrint, setCanPrint] = useState(false);
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={() => setCanPrint(true)}>Enable Print</button>
      <button onClick={canPrint ? reactToPrintFn : null} disabled={!canPrint}>
        {canPrint ? 'Print' : 'Enable Print First'}
      </button>
      <div ref={contentRef}>
        <h2>Conditional Print</h2>
        <p>This content is only printable when printing is enabled.</p>
      </div>
    </div>
  );
};

export default ConditionalPrintExample;
