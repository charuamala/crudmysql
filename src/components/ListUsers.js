import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/API/users/')
            .then(function(response) {
                //console.log(response.data);
                // Adjust this based on the actual structure of response.data
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else if (response.data && Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                } else {
                    console.error('Unexpected response format');
                }
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/API/user/${id}/delete`)
            .then(function(response) {
               // console.log(response.data);
                getUsers(); // Refresh the user list
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    }

    //console.log('users details');
    //console.log(users.length);

    return (
        <div className="Listusers">
            <h1>List Users</h1>
            <table cellSpacing={10}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) && users.length > 0 ? (
                        users.map((user, key) => (
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <Link to={`user/${user.id}/edit`} style={{ marginRight: "10px" }}>
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No users available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
