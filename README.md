# DAG_Implementation-
In this project, I developed an integration between a React-based frontend and a Python/FastAPI backend. The frontend was designed to send pipeline data, specifically nodes and edges, to the backend /pipelines/parse endpoint upon a button click. On the backend, I implemented logic to compute the number of nodes and edges and determine if they form a directed acyclic graph (DAG). This endpoint responds with these details in JSON format, and on the frontend, I created an alert to display the result—providing users with real-time insights into the pipeline's structure.

# Technologies
Javascript, Tailwind CSS, Reactjs, HTML, Python, and Python Library like FastAPI, BaseModel

# Setup
Download or Clone the repository
For Frontend, navigate to the frontend folder and npm i
For Backend, navigate to the backend folder and run python -m uvicorn main:app -reload
