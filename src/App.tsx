import axios from 'axios';
import {useEffect, useState} from 'react';

type Todo = {
  id: number;
  todo: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get('/todos')
      .then((res) => {
        setTodos(res.data as Todo[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>{import.meta.env.VITE_API_GATEWAY_HOST}</h1>
      <ul>
        {todos.map((it) => (
          <li key={it.id}>{it.todo}</li>
        ))}
      </ul>
    </div>
  );
}
