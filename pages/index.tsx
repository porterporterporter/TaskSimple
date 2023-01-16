import TaskContainer from "../components/TaskContainer";

export default function Home() {
  return (
    <div className="flex-grow bg-slate-100">
      <p className="py-12 text-center text-2xl">Welcome to TaskSimple!</p>
      <p className="text-1xl text-center">
        TaskSimple is a lightweight task app built first to use the
        browser&apos;s Web Storage API (i.e., local storage), with the ability
        to persist tasks by creating an account. Let&apos;s get started!
      </p>
      <TaskContainer />
    </div>
  );
}
