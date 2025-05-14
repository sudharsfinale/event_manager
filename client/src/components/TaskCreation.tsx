import { X } from "lucide-react";
import { TodoConstants } from "../constants/todo_constants";

const TaskCreation = ({
  taskText,
  setTaskText,
  selectRef,
  taskStatus,
  setTaskStatus,
  setShouldCreateTask,
  handleSubmit,
  setTaskTexterror,
  taskTexterror,
  activeTodo,
  setActiveTodo,
  handleUpdateTodo
}: any) => {
  return (
    <div className="h-screen w-screen fixed top-0 bg-red-100 z-10 flex justify-center items-center">
      <div
        className="absolute top-8 right-8 cursor-pointer"
        onClick={() => {
            setShouldCreateTask(false);
            setActiveTodo(null);
        }}
      >
        <X size={24} />
      </div>
      <div className="w-[400px] bg-white border border-amber-50 p-4 rounded-2xl">
        <h6 className="text-2xl">Create task</h6>
        <div className="flex flex-col mt-2">
          <span className="text-[12px] text-amber-600">Task Name</span>
          <input
            className={`border rounded-[6px] ${taskTexterror ? "border-red-700" : "border-[#e7e7e7]"} focus:outline-amber-600 p-2`}
            type="text"
            onChange={(e) => {
                setTaskText(e.target.value);
                setTaskTexterror(false);
            }}
            value={taskText}
            onFocus={() => setTaskTexterror(false)}
          />
        </div>
        <div className="flex flex-col mt-2">
          <span className="text-[12px] text-amber-600">Task Status</span>
          <select
            ref={selectRef}
            className="border rounded-[6px] border-[#e7e7e7] focus:outline-amber-600 p-2"
            value={taskStatus}
            onChange={(e) => {
              //@ts-ignore
              selectRef.current.blur();
              setTaskStatus(e.target.value);
            }}
          >
            <option value="todo">{TodoConstants["to-do"]}</option>
            <option value="in-progress">{TodoConstants["in-progress"]}</option>
            <option value="done">{TodoConstants.done}</option>
          </select>
        </div>
        <div className="flex items-center justify-center mt-3 ">
          <button
            className="bg-amber-600 px-3 py-1 rounded-[6px] text-white cursor-pointer active:scale-95 transform transition duration-150"
            onClick={activeTodo && activeTodo?.id ? (e) => handleUpdateTodo(e) : (e) => handleSubmit(e)}
          >
            {activeTodo && activeTodo?.id ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCreation;
