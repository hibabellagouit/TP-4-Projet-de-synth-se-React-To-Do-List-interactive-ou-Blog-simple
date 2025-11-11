import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;
    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form onSubmit={soumettreFormulaire} style={{ marginBottom: 12 }}>
      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
        required
      />
      <button type="submit" style={{ marginLeft: 8 }}>Ajouter</button>
    </form>
  );
}

export default TodoForm;
