import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <Link to="/" style={styles.link}>MyApp</Link>
        </div>
        <div>
          <Link to="/" style={styles.link}>Edit user</Link>
          <Link to="/another-view" style={styles.link}>Another view</Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: 'black',
    color: 'yellow',
    padding: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    top: 0
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  link: {
    color: 'yellow',
    textDecoration: 'none',
    marginRight: '1rem',
  },
};

export default Navbar;
