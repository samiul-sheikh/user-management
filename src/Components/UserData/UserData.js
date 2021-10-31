import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import Header from '../Header/Header';
import PaginationData from '../Pagination/Pagination';
import Search from '../Search/Search';

const UserData = () => {

    const [users, setUsers] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState();
    const [search, setSearch] = useState("");

    const ITEMS_PER_PAGE = 20;

    const headers = [
        { name: "No", field: "id" },
        { name: "Name", field: "name" },
        { name: "Email", field: "email" },
        { name: "Comment", field: "body" }
    ]

    useEffect(() => {
        const getData = () => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.json())
                .then(data => {
                    setUsers(data);
                    console.log(data);
                });
        };
        getData();
    }, []);

    const usersData = useMemo(() => {
        let computedUsers = users;
        if (search) {
            computedUsers = computedUsers.filter(
                users =>
                    users.name.toLowerCase().includes(search.toLowerCase()) ||
                    users.email.toLowerCase().includes(search.toLowerCase())
            )
        }
        setTotalItems(computedUsers.length);
        // current page slice
        return computedUsers.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
    }, [users, currentPage, search]);

    return (
        <>
            <div className="row w-100">
                <div className="col-mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <PaginationData
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search onSearch={(value) => {
                                setSearch(value);
                                setCurrentPage(1);
                            }} />
                        </div>
                    </div>
                    <table className="table table-striped">
                        <Header headers={headers} />
                        <tbody>
                            {usersData.map((users) => (
                                <tr>
                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UserData;