import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';

function App() {
    return (
        <div>
            <h1>My Tools</h1>
            <Todo text='Learn React' />
            <Todo text='Do Laundry' />
            <Todo text='Coding challenges' />
            <Modal/>
            <Backdrop />
        </div>
    );
}

export default App;
