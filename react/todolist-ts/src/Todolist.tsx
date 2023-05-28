import React, { ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string, todolistId: string) => void;
  changeFilter: (value: FilterValuesType, todolistId: string) => void;
  addTask: (title: string, todolistId: string) => void;
  changeTaskStatus: (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => void;
  changeTaskTitle: (
    taskId: string,
    newTitle: string,
    todolistId: string
  ) => void;
  removeTodoList: (id: string) => void;
  changeTodolistTitle: (id: string, newTitle: string) => void;
  filter: FilterValuesType;
};

export function Todolist(props: PropsType) {
  const addTask = (title: string) => {
    props.addTask(title, props.id);
  };
  const removeTodoList = () => {
    props.removeTodoList(props.id);
  };
  const changeTodolistTitle = (newTitle: string) => {
    props.changeTodolistTitle(props.id, newTitle);
  };
  const onAllClickHandler = () => props.changeFilter('all', props.id);
  const onActiveClickHandler = () => props.changeFilter('active', props.id);
  const onCompletedClickHandler = () =>
    props.changeFilter('completed', props.id);

  return (
    <div>
      <h3>
        <EditableSpan title={props.title} onChange={changeTodolistTitle} />
        <button onClick={removeTodoList}>x</button>
      </h3>
      <AddItemForm addItem={addTask} />
      <ul>
        {props.tasks.map((task) => {
          const onClickHandler = () => {
            props.removeTask(task.id, props.id);
          };
          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(task.id, e.currentTarget.checked, props.id);
          };
          const onChangeTitleHandler = (newValue: string) => {
            props.changeTaskTitle(task.id, newValue, props.id);
          };

          return (
            <li key={task.id} className={task.isDone ? 'is-done' : ''}>
              <input
                type="checkbox"
                onChange={onChangeStatusHandler}
                checked={task.isDone}
              />
              <EditableSpan
                title={task.title}
                onChange={onChangeTitleHandler}
              />
              <button onClick={onClickHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          className={props.filter === 'all' ? 'active-filter' : ''}
          onClick={onAllClickHandler}
        >
          All
        </button>
        <button
          className={props.filter === 'active' ? 'active-filter' : ''}
          onClick={onActiveClickHandler}
        >
          Active
        </button>
        <button
          className={props.filter === 'completed' ? 'active-filter' : ''}
          onClick={onCompletedClickHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
