import React, { useState } from "react";
import { Position,useReactFlow } from "reactflow";
import CommonNode from "./commonNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  const { setNodes } = useReactFlow();

  const handleRemoveNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
  };
  return (
    <CommonNode
      id={id}
      data={data}
      title="Input"
      handles={[
        { type: "source", position: Position.Right, id: `${id}-value` },
      ]}
    >
      <div className="flex flex-col p-2 pl-4 bg-[#201345] rounded-b-xl">
        <div className="flex flex-col">
          <label className="flex flex-col font-medium text-white pb-1">
            Name:
          </label>
          <input
            type="text"
            value={currName}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255,255,255,0.35)",
            }}
            className='w-full rounded-md bg-[#624ba3] p-[6px] text-white font-normal'
            onChange={handleNameChange} />
        </div>

        <div className="flex flex-col">
          <label className="flex flex-col font-medium text-white pb-1 pt-2">
            Type:
          </label>
          <select
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255,255,255,0.35)",
            }}
            className='w-full rounded-md bg-[#624ba3] p-[6px] text-white font-normal'
            value={inputType}
            onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
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
