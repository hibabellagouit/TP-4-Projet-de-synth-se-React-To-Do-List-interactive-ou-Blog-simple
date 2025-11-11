import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false,
    };
    setTaches((prev) => [...prev, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches((prev) =>
      prev.map((t) => (t.id === id ? { ...t, terminee: !t.terminee } : t))
    );
  };

  const supprimerTache = (id) => {
    setTaches((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 520, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>To-Do List Interactive</h1>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList
        taches={taches}
        changerEtat={changerEtat}
        supprimerTache={supprimerTache}
      />
    </div>
  );
}

export default App;
