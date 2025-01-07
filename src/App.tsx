import { useXAgent } from '@ant-design/x';
import React from 'react';


const MODEL = import.meta.env.VITE_MODEL;
const API_KEY = import.meta.env.VITE_API_KEY;
const PATH = import.meta.env.VITE_PATH;


function App() {
  const [agent] = useXAgent<YourMessageType>({
    baseURL: '/ai' + PATH,
    model: MODEL,
    dangerouslyApiKey: 'Bearer ' + API_KEY,
  });

  async function request() {
    agent.request(
      {
          messages: [{ role: 'system', content: inputValue }],
          stream: true,
      },
      {
        onSuccess: (messages) => {
          console.log('onSuccess', messages);
        },
        onError: (error) => {
          console.error('onError', error);
        },
        onUpdate: (msg) => {
          console.log('onUpdate', msg);
        },
      },
    );
  }

  const [inputValue, setInputValue] = React.useState('');
  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => request()}>发送</button>
    </>
  );
}

export default App;
