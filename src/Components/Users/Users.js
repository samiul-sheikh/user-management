import React, { useEffect, useState } from 'react';
// import UserInfo from '../Search/UserInfo';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <section className="container">

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <tr>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.phone}</td>
                            <td>{users.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    );
};

export default Users;