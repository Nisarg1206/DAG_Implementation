from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import networkx as nx

class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    
    G = nx.DiGraph()
    
    for node in data.nodes:
        G.add_node(node['id'])
        
    for edge in data.edges:
        G.add_edge(edge['source'], edge['target'])
    
    
    is_dag = nx.is_directed_acyclic_graph(G)
    
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}
