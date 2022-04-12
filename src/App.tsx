import styled from 'styled-components/macro';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
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
