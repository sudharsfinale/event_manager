import { useRef, useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskCreation from "./components/TaskCreation";
import {
  addTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from "./services/todo_service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const App = () => {
  const [shouldCreateTask, setShouldCreateTask] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [taskStatus, setTaskStatus] = useState("to-do");
  const [taskTextError, setTaskTexterror] = useState(false);
  const [activeTodo, setActiveTodo] = useState<any>(null);
  const selectRef = useRef(null);
  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setTaskText("");
      setShouldCreateTask(false)
    },
  });
  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setActiveTodo(null)
      setShouldCreateTask(false)
    },
  });

  const handleSubmit = (e: any) => {
    debugger;
    e.preventDefault();
    if (taskText.trim() !== "") {
      mutation.mutate({ text: taskText, status: taskStatus });
    } else {
      setTaskTexterror(true);
    }
  };
  const handleDelete = (e: any, id: any) => {
    debugger;
    e.preventDefault();
    deleteMutation.mutate(id);
  };
  const handleUpdateTodo = (e: any) => {
    e.preventDefault();
    updateMutation.mutate({ id: activeTodo?.id, todo: {text: taskText, status: taskStatus} });
  };
  const onUpdateClick = (task: any) => {
    setActiveTodo(task);
    setTaskStatus(task?.status);
    setTaskText(task?.text);
    setShouldCreateTask(true);
  };
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  console.log(tasks, "todos");
  return (
    <div>
      {shouldCreateTask ? (
        <TaskCreation
          selectRef={selectRef}
          setTaskStatus={setTaskStatus}
          setTaskText={setTaskText}
          taskStatus={taskStatus}
          taskText={taskText}
          setShouldCreateTask={setShouldCreateTask}
          handleSubmit={handleSubmit}
          setTaskTexterror={setTaskTexterror}
          taskTexterror={taskTextError}
          activeTodo={activeTodo}
          setActiveTodo={setActiveTodo}
          onUpdateClick={onUpdateClick}
          handleUpdateTodo={handleUpdateTodo}
        />
      ) : null}
      <Header setShouldCreateTask={setShouldCreateTask} tasks={tasks} />
      <div className="p-4 flex flex-col gap-4">
        {tasks &&
          tasks.map((item: any) => (
            <div key={item?.id}>
              <TaskCard
                taskStatus={item?.status}
                taskText={item?.text}
                onUpdateClick={() => onUpdateClick(item)}
                handleDelete={(e: HTMLElement) => handleDelete(e, item?.id)}
              />
            </div>
          ))}
      </div>
      {/* <Card /> */}
    </div>
  );
};

export default App;
