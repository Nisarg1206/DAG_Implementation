import { Handle, Position } from 'reactflow';

const CommonNode = ({ id, data,title, children, handles }) => {
  return (
    <div
    style={{
      boxShadow: "inset 0px -1px 0px rgba(255,255,255,0.35)",
    }}
      className="bg-[#321d6c] flex flex-col border-2 rounded-xl"
      >
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
      <div className='border-b-2 p-2 pl-4'>
        <span className='text-white text-[18px] font-semibold'>{title}</span>
      </div>
      <div>
        {children}
      </div>
      
    </div>
  );
};

export default CommonNode;
