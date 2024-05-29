import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch.jsx';
import { TodoList } from './TodoList.jsx';
import { TodoItem } from './TodoItem.jsx';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {id: Math.floor(Math.random() * 1000000), text: 'Estudiar MongoDB', completed: true},
  {id: Math.floor(Math.random() * 1000000), text: 'Estudiar GraphQL', completed: false},
  {id: Math.floor(Math.random() * 1000000), text: 'Estudiar React', completed: false},
  {id: Math.floor(Math.random() * 1000000), text: 'Estudiar JavaScript', completed: false}, 
]
function App() {
  return (
    <>
      <TodoCounter total={25} completed={16} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.id} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

        <CreateTodoButton/>
    </>
  );
}

export default App;
