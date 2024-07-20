import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { Paper, Typography } from "@mui/material";

const Column = ({ title, tasks, columnId }) => {
  return (
    <Paper style={{ margin: "8px", padding: "8px", minHeight: "500px" }}>
      <Typography variant="h5">{title}</Typography>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ minHeight: "500px" }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Paper>
  );
};

export default Column;
