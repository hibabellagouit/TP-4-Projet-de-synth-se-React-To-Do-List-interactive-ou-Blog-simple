function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
      />
      <span style={{ textDecoration: tache.terminee ? 'line-through' : 'none' }}>
        {tache.texte}
      </span>
      <button onClick={() => supprimerTache(tache.id)}>X</button>
    </li>
  );
}

export default TodoItem;
