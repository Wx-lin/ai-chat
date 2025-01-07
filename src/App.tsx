import axios from 'axios';
import { useState } from 'react';

const chatWithKimi = async (inputValue: string) => {
  try {
    //请求接口这块儿我使用的是axios，你也可以用fetch。
    const response = await axios.post(
      `https://ark.cn-beijing.volces.com/api/v3/embeddings`,
      {
        model: 'ep-20250107162511-v8v56',
        // inputValue为用户输入信息
        input: [inputValue],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${"979d8be2-9495-41cd-b307-1cbce6428ce4"}`,
        },
      }
    )
    console.log(
      'response.data.choices[0].message',
      response.data
    )

  } catch (error) {
    console.error('Error:', error)
  }
}

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => chatWithKimi(inputValue)}>发送</button>
    </>
  );
}
