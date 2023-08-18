"use client";

import { ITask } from "@/types/tasks";

interface TaskProps {
    task: ITask;
  }


  const Task: React.FC<TaskProps> = ({ task }) => {
     
    
    return (
       <tr kay={task.id}>
        <td>{task.text}</td>
        <td></td>
       </tr>
    );
  };
  
  export default Task;