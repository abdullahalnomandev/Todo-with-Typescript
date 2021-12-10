import React from 'react';
import './Todo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface IProps {
    handleRemove: (id: number) => void;
    singleTodo: {
        todoName: string,
        id: number,

    }
}

const Todo = (Props: IProps) => {
    const { todoName, id } = Props.singleTodo;
    const { handleRemove } = Props;
    console.log(Props);


    return (
        <div className='todo'>

            <div className="singleItem">
                <div className="item">
                    <input type="checkbox" name="" id="" />
                    <p>{todoName}</p>
                </div>
                <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => handleRemove(id)} />
            </div>
        </div>
    );
};

export default Todo;

