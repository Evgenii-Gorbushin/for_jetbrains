import React from 'react';
import './App.scss';
import {
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';

function App() {
  // Всплывающая help подсказка.
  const popover = () => (
    <Popover id="id1">
      <Popover.Header as="h4" className="fs-6">
        Заголовок
      </Popover.Header>
      <Popover.Body className="small">
        Описание
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="App">
      <button>Hello world</button>
      <OverlayTrigger trigger="click" placement="right" overlay={popover()}>
        <i className="bi bi-question-circle" />
      </OverlayTrigger>
    </div>
  );
}

export default App;
