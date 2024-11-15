import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const TablePrintExample = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={reactToPrintFn}>Print Table</button>
      <div ref={contentRef}>
        <h2>Employee Data</h2>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Manager</td>
              <td>Finance</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Engineer</td>
              <td>IT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePrintExample;
