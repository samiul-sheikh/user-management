import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddUser = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        const usersData = {
            name: data.name,
            title: data.title,
            email: data.email,
            phone: data.phone,
            date: data.date,
            time: data.time,
            address: data.address
        };

        const url = `https://shocking-catacombs-41932.herokuapp.com/addUser`;
        // console.log(usersData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })
            .then(res => console.log('server side res ', res))
    };

    return (
        <section className="container">
            <div className="col-md-10 p-4 pr-5">
                <h5 className="text-center">Add User Here</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputName" class="form-label">User Name</label>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="enter name" className="form-control" />
                        {errors.name && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputTitle" class="form-label">User Title</label>
                        <input type="text" ref={register({ required: true })} name="title" placeholder="Enter title" className="form-control" />
                        {errors.title && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail" class="form-label">Email Address</label>
                        <input type="text" ref={register({ required: true })} name="email" placeholder="enter e-mail address" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputPhone" class="form-label">phone Number</label>
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Enter phone number" className="form-control" />
                        {errors.phone && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputDate" class="form-label">Pick a Date</label>
                        <input type="date" ref={register({ required: true })} name="date" placeholder="Enter date" className="form-control" />
                        {errors.date && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputTime" class="form-label">Pick a Time</label>
                        <input type="time" ref={register({ required: true })} name="time" placeholder="Time" className="form-control" />
                        {errors.time && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputAddress" class="form-label">User Address</label>
                        <input type="text" ref={register({ required: true })} name="address" placeholder="Enter address" className="form-control" />
                        {errors.address && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group d-grid mx-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddUser;