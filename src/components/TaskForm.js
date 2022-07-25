import { useState } from "react";
import { supabase } from "../supabase/client";

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = supabase.auth.user();
      console.log(user);
      const result = await supabase.from("tasks").insert({
        name: taskName,
        userId: user.id,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskname"
          placeholder="Write a Task name"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
