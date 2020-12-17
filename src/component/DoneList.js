import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

DoneList.propTypes = {
    todos: PropTypes.array,
    onChangeName: PropTypes.func
}

export default function DoneList({ todos, onChangeName }) {
    const doneList = useMemo(() => todos.filter(item => item.done), [todos]);

    return <div>{doneList.map(item => (<p key={item.key} onClick={() => {onChangeName(item.key, 'completed')}}>{item.name}</p>))}</div>
}