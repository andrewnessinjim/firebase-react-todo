import styled from 'styled-components/macro';
import TodoList from './TodoList';
import AddTodoForm from './header/AddTodoForm';

const AppDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`

function TodoApp() {
  return (
    <AppDiv>
        <AddTodoForm />
        <TodoList/>
    </AppDiv>
  );
}

export default TodoApp;
