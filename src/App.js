import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Components/Column";
import AddTaskForm from "./Components/AddTaskForm";
import SearchBar from "./Components/SearchBar";
import { updateTaskStatus } from "./Utils/tasksSlice";
import { Container, Grid } from "@mui/material";

const App = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(source);
    if (!destination) return;
    dispatch(
      updateTaskStatus({ id: draggableId, status: destination.droppableId })
    );
  };

  const columns = [
    { id: "To Do", title: "To Do" },
    { id: "In Progress", title: "In Progress" },
    { id: "Peer Review", title: "Peer Review" },
    { id: "Done", title: "Done" },
  ];

  return (
    <Container>
      <SearchBar />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          {columns.map((column) => (
            <Grid item xs={12} sm={6} md={3} key={column.id}>
              <Column
                title={column.title}
                tasks={filteredTasks.filter(
                  (task) => task.status === column.id
                )}
                columnId={column.id}
              />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
      <AddTaskForm />
    </Container>
  );
};

export default App;
