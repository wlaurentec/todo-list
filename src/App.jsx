import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch.jsx';
import { TodoList } from './TodoList.jsx';
import { TodoItem } from './TodoItem.jsx';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
function App() {
  return (
    <>
      <TodoCounter total={25} completed={16} />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

        <CreateTodoButton/>
    </>
  );
}

export default App;
