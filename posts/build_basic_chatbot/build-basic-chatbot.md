---
title: "Build a Basic Chatbot"
date: "2025-01-13"
description: "LangGraph` is a library for building stateful, multi-actor applications with LLMs, used to create agent and multi-agent workflows. Compared to other LLM frameworks, it offers these core benefits: cycles, controllability, and persistence. "
author: "irufano"
tags:
  - AI
  - Generative AI
  - Langgraph
  - Langchain
image: "https://langchain-ai.github.io/langgraph/static/wordmark_dark.svg"
---

## AI Chatbot with langgraph
The world of AI is currently hyped, have you ever thought about creating your own AI chatbot? In this tutorial, we will make one using langgraph.


## What is Langgraph
`LangGraph` is a library for building stateful, multi-actor applications with LLMs, used to create agent and multi-agent workflows. Compared to other LLM frameworks, it offers these core benefits: cycles, controllability, and persistence. LangGraph allows you to define flows that involve cycles, essential for most agentic architectures, differentiating it from DAG-based solutions. As a very low-level framework, it provides fine-grained control over both the flow and state of your application, crucial for creating reliable agents. Additionally, LangGraph includes built-in persistence, enabling advanced human-in-the-loop and memory features.

We'll first create a simple chatbot using LangGraph. This chatbot will respond directly to user messages. Though simple, it will illustrate the core concepts of building with LangGraph. By the end of this section, you will have a built rudimentary chatbot.

Start by creating a StateGraph. A StateGraph object defines the structure of our chatbot as a "state machine". We'll add nodes to represent the llm and functions our chatbot can call and edges to specify how the bot should transition between these functions.

## Required Package
```sh
pip install -U langgraph langchain_openai tavily-python dotenv
```

## Setup Environment
```python
import os

from dotenv import load_dotenv

env_file = os.getenv("ENV_FILE", ".env")  # Default to .env if ENV_FILE is not set
load_dotenv(env_file)


def _set_env(var: str):
    os.environ[var] = os.getenv(var, "None")
    print(f"{var} set!")


_set_env("OPENAI_API_KEY")
```

## Create a Basic Chatbot
### Create StateGraph
Start by creating a StateGraph. A StateGraph object defines the structure of our chatbot as a "state machine". We'll add nodes to represent the llm and functions our chatbot can call and edges to specify how the bot should transition between these functions.

```python
from typing import Annotated

from typing_extensions import TypedDict

from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages


class State(TypedDict):
    # Messages have the type "list". The `add_messages` function
    # in the annotation defines how this state key should be updated
    # (in this case, it appends messages to the list, rather than overwriting them)
    messages: Annotated[list, add_messages]


graph_builder = StateGraph(State)
```
Our graph can now handle two key tasks:

1. Each `node` can receive the current `State` as input and output an update to the state.
2. Updates to `messages` will be appended to the existing list rather than overwriting it, thanks to the prebuilt `add_messages` function used with the Annotated syntax.

### Add Node
Next, add a "`chatbot`" node. Nodes represent units of work. They are typically regular python functions.

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini")


def chatbot(state: State):
    return {"messages": [llm.invoke(state["messages"])]}


# The first argument is the unique node name
# The second argument is the function or object that will be called whenever
# the node is used.
graph_builder.add_node("chatbot", chatbot)
```
> [info]:
>
> How the chatbot node function takes the current State as input and returns a dictionary containing an updated messages list under the key "messages". This is the basic pattern for all LangGraph node functions.

The `add_messages` function in our `State` will append the llm's response messages to whatever messages are already in the state.

### Add Edge
Next, add an entry point. This tells our graph where to start its work each time we run it.

```python
graph_builder.add_edge(START, "chatbot")
```

Similarly, set a `finish` point. This instructs the graph "**any time this node is run, you can exit.**"

```python
graph_builder.add_edge("chatbot", END)
```

### Compile graph

Finally, we'll want to be able to run our graph. To do so, call "`compile()`" on the graph builder. This creates a "`CompiledGraph`" we can use invoke on our state.

```python
graph = graph_builder.compile()
```

### Visualize Graph (Optional)

You can visualize the graph using the `get_graph` method and one of the "draw" methods, like `draw_ascii` or `draw_png`. The `draw` methods each require additional dependencies.

```python
from IPython.display import Image, display

try:
    display(Image(graph.get_graph().draw_mermaid_png()))
except Exception:
    # This requires some extra dependencies and is optional
    pass
```
output:
![image](data:image/jpg;base64,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)


### Run The Chatbot
Now let's run the chatbot!

> [tip]:
>
> You can exit the chat loop at any time by typing "`quit`", "`exit`", or "`q`".

```python
def stream_graph_updates(user_input: str):
    for event in graph.stream({"messages": [("user", user_input)]}):
        for value in event.values():
            print("Assistant:", value["messages"][-1].content)


while True:
    try:
        user_input = input("User: ")
        if user_input.lower() in ["quit", "exit", "q"]:
            print("Goodbye!")
            break

        stream_graph_updates(user_input)
    except:
        # fallback if input() is not available
        user_input = "Hallo beri aku informasi mengenai langgraph?"
        print("User: " + user_input)
        stream_graph_updates(user_input)
        break
```

**Congratulations!** You've built your first chatbot using LangGraph. This bot can engage in basic conversation by taking user input and generating responses using an LLM. You can inspect a LangSmith Trace for the call above at the provided link.