import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withUserEdit from './WithUserEdit';

function EditUser({ onEditUser }) {
  const { userId } = useParams();
  const user = useSelector((state) => state.user.users.find((u) => u.id === parseInt(userId)));
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setSurname(user.surname || '');
      setAge(user.age || 0);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditUser({ id: userId, name, surname, age });
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: '10px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}
    >
      <label style={{ marginRight: '5px' }}>Edit name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        style={{ width: '200px' }}
      />
      <button
        style={{
          background: '#000000',
          color: 'yellow',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default withUserEdit(EditUser);
