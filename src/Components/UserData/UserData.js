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

    const ITEMS_PER_PAGE = 5;

    const headers = [
        { name: "Name", field: "name" },
        { name: "Title", field: "title" },
        { name: "Email", field: "email" },
        { name: "Phone", field: "phone" },
        { name: "Date", field: "date" },
        { name: "Time", field: "time" },
        { name: "Address", field: "address" }
    ]

    useEffect(() => {
        const getData = () => {
            fetch('http://localhost:8000/users')
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
                    users.phone.toLowerCase().includes(search.toLowerCase())
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
                                    <td>{users.name}</td>
                                    <td>{users.title}</td>
                                    <td>{users.email}</td>
                                    <td>{users.phone}</td>
                                    <td>{users.date}</td>
                                    <td>{users.time}</td>
                                    <td>{users.address}</td>
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