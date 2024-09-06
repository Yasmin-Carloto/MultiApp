import styled from 'styled-components';
import { IoIosReturnLeft } from "react-icons/io";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import FeatureContainer from '../../components/FeatureContainer';
import FeatureTitle from '../../components/FeatureTitle';
import InputText from '../../components/InputText';
import DefaultButton from '../../components/DefaultButton';
import { fetchTasks, addNewTask, removeTask, updatingTask } from '../../api/TodoOperations/todoOperations';

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0; 
  width: 100%; 
  height: 60%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0.2em;
`;

const TaskItem = styled.li`
  background: #eaeaea;
  border-radius: 1em;
  padding: 0.6em;
  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.1);
  font-size: 18px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between; 
  align-items: center;

  &:hover {
    background-color: #f1f1f1;
  }

  button {
    margin-left: 10px; 
    background: transparent;
    border: none; 
    color: red; 
    cursor: pointer;
    font-size: 16px; 

    &:hover { 
      color: darkred;
    }
  }
`;

const EditInput = styled.input`
  margin-left: 10px; 
  padding: 6px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  width: 60%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px; 
  transition: border-color 0.3s; 

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState({
    taskId: null,
    task: null
  });
  const navigate = useNavigate()

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    const response = fetchTasks()
    setTasks(response);
  };

  const addTask = () => {
    if (task) { 
      const newTasks = addNewTask(task)
      setTasks(newTasks)
      setTask("")
    }
  };

  const deleteTask = (id) => {
    const newTasks = removeTask(id)
    setTasks(newTasks)
  };

  const editTask = (id, text) => {
    setEditingTask({
      taskId: id,
      task: text
    })
  };

  const updateTask = async (id) => {
    const newTasks = updatingTask(id, editingTask.task)
    setTasks(newTasks)
    setEditingTask({
      taskId: null,
      task: null
    })
  };

  return (
    <FeatureContainer>
      <FeatureTitle text="Todo App" /> 
      <InputText
        onChangeFunction={setTask}
        inputValue={task}
        inputPlaceholder="Add a new task"
      />
      <DefaultButton buttonAction={addTask} buttonText="Add Task" />
      <TaskList>
        
        {tasks.map((task) => (
          <TaskItem key={task.taskId}>

            {editingTask.taskId === task.taskId ? (
              <>
                <EditInput
                  type="text"
                  value={editingTask.task}
                  onChange={(e) => setEditingTask({
                    taskId: editingTask.taskId, 
                    task: e.target.value 
                  })}
                  onBlur={() => updateTask(task.taskId)}
                />
              </>
            ) : (
              <>
                {task.task}
                <div>
                  <button onClick={() => editTask(task.taskId, task.task)}>Edit</button>
                  <button onClick={() => deleteTask(task.taskId)}>Delete</button>
                </div>
              </>
            )}

          </TaskItem>
        ))}
      </TaskList>
      <DefaultButton buttonText={<><IoIosReturnLeft /> Return</>} buttonAction={() => navigate("/carousel")}/>
    </FeatureContainer>
  );
};

export default TodoApp;