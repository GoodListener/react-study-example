import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

NotDoneList.propTypes = {
    todos: PropTypes.array,
    onChangeName: PropTypes.func
}

export default function NotDoneList({ todos, onChangeName }) {
    const notDoneList = useMemo(() => todos.filter(item => !item.done), [todos]);

    return <div>{notDoneList.map(item => (<p key={item.key} onClick={() => {onChangeName(item.key, 'not complete')}}>{item.name}</p>))}</div>
}