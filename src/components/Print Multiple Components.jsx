import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const MultipleComponentsPrint = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const wrapperRef = useRef(null); // Wrapper for combining both sections

  const reactToPrintFn = useReactToPrint({
    contentRef: wrapperRef, // Pass the wrapper reference
  });

  return (
    <div>
      <button onClick={reactToPrintFn}>Print Multiple Sections</button>

      {/* Wrapper div for both sections */}
      <div ref={wrapperRef}>
        <div ref={section1Ref}>
          <h2>Section 1</h2>
          <p>This is the first section.</p>
        </div>
        <div ref={section2Ref}>
          <h2>Section 2</h2>
          <p>This is the second section.</p>
        </div>
      </div>

      {/* Visible sections */}
      <div>
        <h2>Section 1 (Visible)</h2>
        <p>This is the first section visible to users.</p>
      </div>
      <div>
        <h2>Section 2 (Visible)</h2>
        <p>This is the second section visible to users.</p>
      </div>
    </div>
  );
};

export default MultipleComponentsPrint;
