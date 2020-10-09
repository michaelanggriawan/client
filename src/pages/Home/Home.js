import React, { useState, useContext } from 'react';
import TodoContext from '../../context/todo/TodoContext';

// components
import TextArea from '../../components/TextArea/TextArea';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

import './Home.css';

const statusOption = [
  { id: 1, status: 'undone' },
  { id: 2, status: 'done' },
];
function Home() {
  const { submitTodo } = useContext(TodoContext);

  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('Select Status');

  const _onSubmitTodo = () => {
    if (description === '') return;

    if (status !== 'Select Status') {
      submitTodo({ task: description, status });

      setDescription('');
      setStatus('Select Status');
    }
  };

  return (
    <div className="home-container">
      <Header />
      <div className="home-header">
        <h1>TODO APP</h1>
      </div>
      <div className="home-content">
        <div className="pb4">
          <TextArea
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="pb">
          <Dropdown
            isOpen={isOpen}
            setIsOpen={() => setIsOpen(!isOpen)}
            options={statusOption}
            setValue={setStatus}
            value={status}
          />
        </div>
        <Button block={true} onClick={_onSubmitTodo}>
          <span className="font20">SUBMIT</span>
        </Button>
      </div>
    </div>
  );
}

export default Home;
