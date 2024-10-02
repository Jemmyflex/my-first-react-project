import { useNavigate } from "react-router-dom";

const AddTodos = () => {
    const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();
        //post data to todo api
        //goto the homepage
        navigate("/");
    }

    return(
        <div>
            <h1>Add A New Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="Enter your list" required />
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default AddTodos;