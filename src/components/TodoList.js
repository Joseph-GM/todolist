import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex:1;
    padding: 20px 32px;
    padding-bottom: 48px;
    over-flow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();
    console.log('In Todo List todos', todos);
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    )
}

export default TodoList;