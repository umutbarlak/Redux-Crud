import { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodos } from "./redux/actions/todoActions";

axios.defaults.baseURL = "http://localhost:3050";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className=" vh-100">
      <h1 className="text-center">
        Redux <span className="text-warning">Crud</span>
      </h1>

      <div>
        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
}

export default App;
