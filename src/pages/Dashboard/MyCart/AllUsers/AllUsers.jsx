import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  const handleDelete = (user) => {};
  return (
    <div>
      <h3 className="text-3xl font-semibold">Total User: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? (
                    'admin'
                  ) : (
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn  bg-sky-700 text-white btn-md border-none">
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn  bg-red-600 text-white btn-md border-none">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
