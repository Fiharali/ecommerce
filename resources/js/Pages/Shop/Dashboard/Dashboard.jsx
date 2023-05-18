import React, { useRef, useEffect } from 'react'
import AdminMenu from './AdminMenu';
import './Dashboard.css'
import Swal from 'sweetalert2'
import DataTable from 'datatables.net-dt';
import $ from 'jquery';
import { Link,useForm } from '@inertiajs/react';

function Dashboard({ users }) {
    // console.log(users)

    const tablleRef = useRef(null);
    useEffect(() => {
        if (!$.fn.DataTable.isDataTable(tablleRef.current)) {
            $(tablleRef.current).DataTable({

            });

        }
    }, [tablleRef]);

    const { post, data, setData, get, delete: destroy, errors } = useForm({

    })

    const DeleteUser = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                destroy(route('delete.user',id))
            }
        })



    }
    return (
        <>
            <AdminMenu />
            <div className='home-section'>
                <div className="container admindash mt-3">
                    <div className="row d-flex justify-content-evenly ">
                        <div className="col-lg-3 col-md-7 m-2 position- dashbord1">
                            <i className="fa-sharp fa-solid fa-chart-line fa-lg"></i>
                            <p className='d-flex justify-content-between'> <span>Total Orders:</span> <span>67890</span></p>
                        </div>
                        <div className="col-lg-3 col-md-7 m-2 dashbord1">
                            <i className="fa-sharp fa-solid fa-money-bill fa-lg"></i>
                            <p className='d-flex justify-content-between'> <span>Money:</span> <span>67890$</span></p>
                        </div>
                        <div className="col-lg-3 col-md-7 m-2 dashbord1">
                            <i className="fa-sharp fa-solid fa-user fa-lg"></i>
                            <p className='d-flex justify-content-between'> <span>Total Users:</span> <span>67890</span></p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <span className="col-lg-9 mx-auto mt-6">
                            <table className=' mt-5 box_shadow ' id='myTablee' ref={tablleRef}>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        users.map((user) => (
                                            <tr>
                                                <th>{user.id}</th>
                                                <th>{user.name}</th>
                                                <th>{user.email}</th>
                                                <th>{!user.isAdmin && (<Link onClick={()=>DeleteUser(user.id)}><i className="fa-sharp fa-solid fa-trash"></i></Link>)}</th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
