import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className='custom-radial-gradient'>
      <PipelineToolbar />
      <PipelineUI/>
      <SubmitButton />
    </div>
  );
}

export default App;
