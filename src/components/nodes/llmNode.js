import CommonNode from './commonNode';
import { Position,useReactFlow } from 'reactflow';

export const LLMNode = ({ id }) => {
  const { setNodes } = useReactFlow();

  const handleRemoveNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
  };
  return (
    <CommonNode
      id={id}
      title="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100 / 3}%` } },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
        { type: 'source', position: Position.Right, id: `${id}-response` }
      ]}
    >
      <div className=" flex-col p-2 pl-4 bg-[#201345] rounded-b-xl">
      <div className='h-[100px] w-[200px] flex justify-center items-center'>
        <span className="flex flex-col font-medium text-white pb-1">This is an LLM.</span>
        </div>

        <span
            onClick={handleRemoveNode}
            className=" cursor-pointer justify-items-end ml-28 text-sm text-slate-400 mt-2 "
          >
            Remove Node
          </span>
      </div>
      
    </CommonNode>
  );
};
