// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-[10px] flex flex-col gap-3 custom-radial-gradient border-b-[2px] border-b-[#3a1e87]">
            <div className='flex flex-wrap gap-3 justify-center items-center'>
            <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type="pipeline" label="Pipeline"/>
                <DraggableNode type='llm' label='LLM' />
            </div>
        </div>
    );
};
