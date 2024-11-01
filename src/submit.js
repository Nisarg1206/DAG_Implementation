import React from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    getNodeID: state.getNodeID,
    addNode: state.addNode,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
  });

export const SubmitButton = () => {
    const {
        nodes,
        edges
    } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
        const data = { nodes, edges };

        const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Result from backend:", result);

        const { num_nodes, num_edges, is_dag } = result;

        const message = `Pipeline Analysis Results:
        - Number of Nodes: ${num_nodes}
        - Number of Edges: ${num_edges}
        - Is Directed Acyclic Graph (DAG): ${is_dag ? "Yes" : "No"}`;

        alert(message);

    } catch (error) {
        console.error("Error submitting the pipeline:", error);
    }
};


  return (
    <div className="border-t-[2px] border-t-[#3a1e87] p-4 custom-radial-gradient">
      <span className="flex justify-center">
        <button
          type="button"
          className="transition-all shadow-lg h-[43px] w-[90px] flex items-center justify-center bg-[#412d7a] p-2 text-[17px] font-bold rounded-md text-white hover:text-slate-200 hover:text-[15px] hover:bg-[#5130ac]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </span>
    </div>
  );
};
