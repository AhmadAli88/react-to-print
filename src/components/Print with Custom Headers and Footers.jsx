import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const HeaderFooterPrintExample = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={reactToPrintFn}>Print with Header/Footer</button>
      <div ref={contentRef}>
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>Company Report</h1>
          <p>Generated on {new Date().toLocaleDateString()}</p>
        </header>
        <main>
          <h2>Report Content</h2>
          <p>This is the main report content that will be printed.</p>
        </main>
        <footer style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>© 2024 Company Name. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HeaderFooterPrintExample;
