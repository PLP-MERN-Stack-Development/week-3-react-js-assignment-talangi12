import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm mb-2">
      <span
        className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.text}
      </span>
      <div className="flex space-x-2">
        <Button
          variant={task.completed ? 'secondary' : 'primary'}
          onClick={() => onToggleComplete(task.id)}
          className="text-sm px-3 py-1"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button
          variant="danger"
          onClick={() => onDelete(task.id)}
          className="text-sm px-3 py-1"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
