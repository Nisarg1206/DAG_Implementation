// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} shadow-lg cursor-grab min-w-[80px] h-[40px] flex items-center rounded-lg  text-[16px] font-semibold bg-[#412d7a] justify-center flex-col transition-all duration-200 hover:bg-[#5130ac] hover:text-[14px] hover:text-slate-300 
`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
