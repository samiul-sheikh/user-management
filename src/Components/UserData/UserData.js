import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import Header from '../Header/Header';
import PaginationData from '../Pagination/Pagination';
import Search from '../Search/Search';

const UserData = () => {

    const [users, setUsers] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState();

    const ITEMS_PER_PAGE = 50;

    // const headers = [
    //     { name: "No", field: "id" },
    //     { name: "Name", field: "name" },
    //     { name: "Email", field: "email" },
    //     { name: "Comment", field: "body" }
    // ]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const usersData = useMemo(() => {
        let computedUsers = users;
        setTotalItems(computedUsers.length);
        // current page slice
        return computedUsers.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
    }, [users, currentPage]);

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
                            <Search />
                        </div>
                    </div>
                    <table className="table table-striped">
                        <Header/>
                        <tbody>
                            {usersData.map((users) => (
                                <tr>
                                    <td>{users.id}</td>
                                    <td>{users.email}</td>
                                    <td>{users.name}</td>
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