import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import { TodoConstants } from "../constants/todo_constants";

const TaskIcon = ({iconName, onTaskIconClick} : {iconName : string, onTaskIconClick:any}) => {

    const icon_classes = "text-[rgb(180,180,180)] cursor-pointer hover:text-black"
    const icon_size = 16

    switch(iconName){
        case "trash":
            return <Trash onClick={onTaskIconClick} size={icon_size} className={icon_classes}/>
        case "edit":
            return <Pencil onClick={onTaskIconClick} size={icon_size} className={icon_classes}/>
    }
}

const TaskFooter = ({handleDelete, onUpdateClick} : any) => {
  return (
    <div className="flex mt-2 justify-end gap-2">
      <TaskIcon onTaskIconClick={handleDelete} iconName="trash"/>
      <TaskIcon onTaskIconClick={onUpdateClick} iconName="edit"/>
    </div>
  );
};

const TaskType = ({ status }: { status: "done" | "to-do" | "in-progress" }) => {
    const getStatusColor = () => {
        switch(status){
            case "done":
                return "bg-green-700"
                case "to-do":
                    return "bg-amber-700"
                    case "in-progress":
                        return "bg-red-700"
        }
    }
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className={`${getStatusColor()} h-[10px] w-[10px] rounded-[5px]`}></div>
      {TodoConstants?.[status]}
    </div>
  );
};

const Task = ({taskText}:{taskText : string}) => {
    return (
        <div className="p-4">
            ✅ {taskText}
        </div>
    )
}

const TaskCard = ({taskStatus, taskText, handleDelete, onUpdateClick}: {taskText:string, taskStatus: "done" | "to-do" | "in-progress", handleDelete:any, onUpdateClick:any}) => {
  return (
    <div className="w-[300px] px-[12px] py-[8px] bg-white rounded-lg">
      <TaskType status={taskStatus} />
      <Task taskText={taskText} />
      <TaskFooter handleDelete={handleDelete} onUpdateClick={onUpdateClick}/>
    </div>
  );
};

export default TaskCard;
