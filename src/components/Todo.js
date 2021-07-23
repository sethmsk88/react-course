import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); // this is a React hook

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* modalIsOpen ? <Modal /> : null */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> /* another way of writing the same thing as the line above */ }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
    </div>
  );
}

export default Todo;
