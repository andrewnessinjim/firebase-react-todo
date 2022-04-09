import styled from 'styled-components/macro';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

function TodoApp() {
  return (
    <AppDiv>
        <h1>Your Todos</h1>
        <TodoList/>
        <AddTodoForm />
    </AppDiv>
  );
}

export default TodoApp;
