import { useState, useEffect, useRef } from 'react';
import { Position, useReactFlow } from 'reactflow';
import CommonNode from './commonNode';

// Function to check if a character is valid in a JavaScript variable name
function isValidVarChar(c, isFirstChar) {
    if (isFirstChar) {
        return /^[a-zA-Z_$]$/.test(c) || c === ' ';
    } else {
        return /^[a-zA-Z0-9_$]$/.test(c) || c === ' ';
    }
}

// Function to validate if the input is a valid variable name
function isValidVariableName(varName) {
    if (varName.length === 0 || !isValidVarChar(varName[0], true)) {
        return false;
    }
    for (let i = 1; i < varName.length; ++i) {
        if (!isValidVarChar(varName[i], false)) {
            return false;
        }
    }
    return true;
}

// Function to process text input and detect variable names
function processTextInput(inputText) {
    const variables = new Set();
    let startPos = 0;

    while (startPos < inputText.length) {
        // Find the opening "{{"
        const openPos = inputText.indexOf("{{", startPos);
        if (openPos === -1) break;

        // Find the closing "}}"
        const closePos = inputText.indexOf("}}", openPos);
        if (closePos === -1) break;

        // Extract the potential variable name
        let variable = inputText.substring(openPos + 2, closePos).trim();

        if (isValidVariableName(variable)) {
            console.log("Detected variable name:", variable);
            variables.add(variable);
        }

        // Move to the next part of the text
        startPos = closePos + 2;
    }

    if (variables.size === 0) {
        console.log("No valid variables found in the input.");
    } else {
        console.log("Variables detected:", Array.from(variables).join(" "));
    }
}

export const TextNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [currText, setCurrText] = useState(data?.text || '');
  const textareaRef = useRef(null);

  const { setNodes } = useReactFlow();

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    processTextInput(newText);
  };

  const handleRemoveNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <CommonNode
      id={id}
      title="Text"
      style={{ backgroundColor: 'lightblue' }}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` }
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
        <div className='flex flex-col'>
          <label className="flex flex-col font-medium text-white pb-1">
            Text:
          </label>
          <textarea
            ref={textareaRef}
            name='message'
            id='message'
            cols="22"
            rows="3"
            value={currText}
            placeholder='Enter Text'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255,255,255,0.18)",
              overflow: 'hidden', // Hide the scrollbar
            }}
            onChange={handleTextChange}
            className='w-full mt-1 rounded-md bg-[#624ba3] p-[6px] text-white font-normal resize-none' // Disable manual resizing
          >
          </textarea>
        </div>

        <span
            onClick={handleRemoveNode}
            className="cursor-pointer text-sm text-slate-400 mt-2 ml-24"
          >
            Remove Node
          </span>
      </div>
    </CommonNode>
  );
};
