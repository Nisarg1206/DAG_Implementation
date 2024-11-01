import { useState } from 'react';
import { Position,useReactFlow } from 'reactflow';
import CommonNode from './commonNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);
  const { setNodes } = useReactFlow();

  const handleRemoveNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
  };
  return (
    <CommonNode
      id={id}
      title="Output"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` }
      ]}
    >
      <div className="flex flex-col p-2 pl-4 bg-[#201345] rounded-b-xl">
        <div className='flex flex-col'>
        <label className="flex flex-col font-medium text-white pb-1">
          Name:
        </label>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255,255,255,0.35)",
            }}
            className='w-full rounded-md bg-[#624ba3] p-[6px] text-white font-normal'
          />
        </div>
        <div>
        
          <div className='flex flex-col'>
            <label className="flex flex-col font-medium text-white pb-1 pt-2">
              Type:
            </label>
            <select
              value={outputType}
              onChange={handleTypeChange}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255,255,255,0.35)",
              }}
              className='w-full rounded-md bg-[#624ba3] p-[6px] text-white font-normal'
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </div>
        </div>

        <span
            onClick={handleRemoveNode}
            className=" cursor-pointer text-sm text-slate-400 mt-2 ml-24 "
          >
            Remove Node
          </span>
      </div>
    </CommonNode>
  );
};
