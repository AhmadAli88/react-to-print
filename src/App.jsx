import { useRef } from 'react';
import ReactToPrint from 'react-to-print';  // Correct default import for v3.0.2

const App = () => {
  const componentRef = useRef();

  return (
    <div>
      <div ref={componentRef}>
        This contains all the files you intend to export[download]
      </div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default App;
