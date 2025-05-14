const Header = ({ tasks, setShouldCreateTask }: { tasks?: any, setShouldCreateTask?:any }) => {
  console.log(tasks);
  return (
    <div className="p-12 bg-stone-400 flex justify-between flex-[0.3]">
      <h4 className="text-white font-medium text-2xl">
        Welcome to Task manager
      </h4>
      <button onClick={()=>setShouldCreateTask(true)} className="bg-white px-4 py-2 rounded-2xl cursor-pointer active:scale-95 transform transition duration-150">
        + Create your first task
      </button>
    </div>
  );
};

export default Header;
