
function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: '#222',
      color: 'white'
    }}>
      {/* Gauche */}
      <div style={{ fontWeight: 'bold' }}>
        Film Reco
      </div>

      {/* Centre - Barre de recherche */}
      <div style={{ flexGrow: 1, textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Rechercher un film..."
          style={{
            padding: '0.5rem',
            width: '60%',
            maxWidth: '400px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      {/* Droite */}
      <div style={{ fontWeight: 'bold' }}>
        Top 10 Film
      </div>
    </nav>
  );
}

export default Navbar;
