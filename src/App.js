import logo from './logo.svg';
import './App.css';

function App() {
  const toDoList = [
    {
      id: 1,
      title: "check new homework assignments"
    },
    {
      id: 2,
      title: "read next chapter of textbook"
    },
    {
      id: 3,
      title: "watch lecture video"
    }
  ];
  const myName = "Kira"; 
  const randomTask = () => {
    const index = Math.floor(Math.random() * 3);
    return toDoList[index].title;
  };
  return (
    <div className="App">
      <p> Hello <b>{myName}</b>, you have a task <b className = "random">{randomTask()}</b> to finish.</p>
    </div>
  );
}

export default App;
