import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import axios from "axios";
import Tasks from "../components/tasks";
import AddTasks from "../components/addTask";
const baseURL = "http://localhost:3004";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTasks, setShowAddTasks] = useState(false);

  const fetchData = async () => {
    await axios
      .get("http://localhost:3004/tasks")
      .then(response => {
        // Xử lý dữ liệu ở đây
        console.log(response.data);
        setTasks(response.data);
      })
      .catch(error => {
        // Xử lý lỗi ở đây
        console.error(error);
      });
  };

  const onDelete = async id => {
    await axios
      .delete(`http://localhost:3004/tasks/${id}`)
      .then(response => {
        console.log("Dữ liệu đã bị xóa thành công.");
        const updateTasks = tasks.filter(task => task.id !== id);
        setTasks(updateTasks);
      })
      .catch(error => {
        console.error("Lỗi xóa dữ liệu:", error);
      });
  };

  const handleShowAddModal = () => {
    setShowAddTasks(!showAddTasks);
  };

  const handleAddTask = async ({ text, day, reminder }) => {
    const dataToPost = {
      text,
      day,
      reminder
    };
    console.log(dataToPost);
    await axios
      .post("http://localhost:3004/tasks", dataToPost)
      .then(response => {
        console.log("Dữ liệu đã được gửi thành công.");
        console.log("Phản hồi từ máy chủ:", response.data);
        setTasks([...tasks, response.data]);
      })
      .catch(error => {
        console.error("Lỗi khi gửi dữ liệu:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      <Header
        title='Home page'
        onAdd={handleShowAddModal}
        showAdd={showAddTasks}
      />
      {showAddTasks && <AddTasks onAdd={handleAddTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
};

export default Home;
