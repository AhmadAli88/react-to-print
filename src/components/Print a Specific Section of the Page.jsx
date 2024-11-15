import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const SectionPrintExample = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={reactToPrintFn}>Print Section</button>
      <div>
        <h1>This is not printed</h1>
        <p>Other content outside the printable section.</p>
      </div>
      <div ref={contentRef}>
        <h2>This section will be printed</h2>
        <p>Print only this specific part of the page.</p>
      </div>
    </div>
  );
};

export default SectionPrintExample;
