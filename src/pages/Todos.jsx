import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () => {
    return (
        <div>
            <h1>All Todos</h1>
            <div>
               <TodoTile title={"creating a react App"}/>
               <TodoTile title={"install Tailwind"}/>
               <TodoTile title={"commit code to Github"}/>
               <TodoTile title={"Host it on Netlify"}/>
            </div>
            <Link to={"/add"}>Add Todos</Link>
        </div>
    );

}
export default Todos;