import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../features/store';
import { useEffect } from 'react';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  console.log(users);

  return (
    <ul style={{ color: 'black' }}>
      <h1>Click on a user to edit</h1>
      {users?.map((user) => (
        <li key={user.id} onClick={() => navigate(`/edit/${user.id}`)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
