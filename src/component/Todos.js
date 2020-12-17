import React, { useState } from 'react'
import DoneList from './DoneList';
import NotDoneList from './NotDoneList';

export default function Todos() {
    const [todos, setTodos] = useState([{ key: 0, name: 'test', done: true }, { key: 1, name: '1234', done: true }, { key: 2, name: 'good', done: false }]);

    function onChangeName(key, name) {
        setTodos(
            todos.map(item => (item.key === key ? { ...item, name } : item))
        );
    }

    return <div>
            <DoneList todos={todos} onChangeName={onChangeName}></DoneList>
            <DoneList todos={todos} onChangeName={onChangeName}></DoneList>
            <NotDoneList todos={todos} onChangeName={onChangeName}></NotDoneList>
            </div>
}