import { FormEvent, useEffect, useState } from "react";
import { localStorageAvailable } from "./helpers";

interface LocalStorageTask {
  title: string;
  done: boolean;
}

export default function TaskContainer() {
  const [tasks, setTasks] = useState<LocalStorageTask[]>([]);

  useEffect(() => {
    if (localStorageAvailable()) {
      const tasksFromLocalStorage = localStorage.getItem("TaskSimpleTasks");
      if (tasksFromLocalStorage) {
        setTasks((previousTasks) => {
          return [...previousTasks, ...JSON.parse(tasksFromLocalStorage)];
        });
      }
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (event && localStorageAvailable()) {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      // TODO: save the task and clear the input
    } else {
      // TODO: we don't have access, notify the user
    }
  }

  return (
    <div className="mx-80 my-10 max-h-[800px] min-h-[400px] overflow-auto rounded-2xl bg-slate-200 shadow-lg">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskInput"
          placeholder="Enter a task..."
          className="mt-3 w-full border-0 bg-transparent pl-4 text-2xl outline-none"
        />
        <button type="button" />
      </form>
      <div>
        {tasks && tasks.map((task, index) => <p key={index}>{task.title}</p>)}
      </div>
    </div>
  );
}
