import TablePrintExample from './components/Advanced Example';
import Test from './components/Basic';
import ConditionalPrintExample from './components/Conditional Printing Based on State';
import SectionPrintExample from './components/Print a Specific Section of the Page';
import MultipleComponentsPrint from './components/Print Multiple Components';
import StyledPrintExample from './components/Print Styled Content';
import HeaderFooterPrintExample from './components/Print with Custom Headers and Footers';

function App() {
  return (
    <div>
      <Test />
      <SectionPrintExample/>
      <StyledPrintExample/>
      <TablePrintExample/>
      <HeaderFooterPrintExample/>
      <ConditionalPrintExample/>
      <MultipleComponentsPrint/>
      <MultipleComponentsPrint/>
    </div>
  );
}

export default App;
