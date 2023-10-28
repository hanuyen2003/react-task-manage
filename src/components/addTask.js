import { useState } from "react";
const AddTasks = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = e => {
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className='add-form'>
      <div className='from-control'>
        <label>task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className='from-control'>
        <label>day</label>
        <input
          type='date'
          placeholder='Add day'
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className='from-control form-control-check'>
        <label>reminder</label>
        <input
          type='checkbox'
          value={reminder}
          checked={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>
      <button
        className='btn btn-block'
        type='button'
        value='save'
        onClick={onSubmit}>
        Save
      </button>
    </form>
  );
};

export default AddTasks;
