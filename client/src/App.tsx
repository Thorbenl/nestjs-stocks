import {useState} from 'react'
import './App.css'

function App() {
  const [msgData, setMsgData] = useState()
  const eventSource = new EventSource('http://0.0.0.0:3000/sse');
  eventSource.onmessage = ({data}) => {
    console.log('New message', JSON.parse(data));
    setMsgData(data)
  };


  return (
    <div className="App">
      <li>{msgData}</li>
    </div>
  )
}

export default App
