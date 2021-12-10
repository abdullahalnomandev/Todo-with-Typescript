import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.scss'

interface ITodo {
    todoName: string,
    id: number
}

const Todos = () => {
    const [todo, setTodo] = useState<ITodo>({} as ITodo)
    const [allTodo, setAllTodo] = useState<ITodo[]>([])

    const handleRemove = (id: number) => {
        console.log(id);
        const remainingTodo = allTodo.filter(td => td.id !== id)
        setAllTodo(remainingTodo)
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        const newTodo = [...allTodo, todo]
        setAllTodo(newTodo)
        setTodo({
            todoName: '',
            id: 0
        })
        e.preventDefault()
    }


    return (
        <div className='todos'>
            <h2 style={{ marginBottom: '10px' }}>Todo App</h2>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="todoName" id="" placeholder='Add your new todo' onChange={(e) =>
                    setTodo({ ...todo, [e.target.name]: e.target.value, id: Math.floor(Math.random() * 100054333) })} value={todo.todoName} />
                <button className='add-button'>+</button>
            </form>
            {
                [...allTodo].reverse().map(singleTodo => <Todo singleTodo={singleTodo} key={singleTodo.id} handleRemove={handleRemove} />)
            }
            {
                allTodo.length ? <div className='clear-button'>
                    <h5>You have {allTodo.length} pending tasks</h5>
                    <button onClick={() => setAllTodo([])}>Clear All</button>
                </div> :
                    <h3 style={{ color: 'green', marginTop: '10px' }}>Please add a todo..</h3>
            }
        </div>
    );
};

export default Todos;