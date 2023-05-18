import React from 'react'
import AdminMenu from './AdminMenu';
import './Dashboard.css'
import DataTable from 'datatables.net-dt';


function Dashboard({ users }) {
    // console.log(users)

    let table = new DataTable('#myTable');
    return (
        <>
            <AdminMenu />
            <div className='home-section'>
                <div className="container admindash mt-3">
                    <div className="row d-flex justify-content-evenly ">
                        <div className="col-lg-3 col-md-7 m-2 position-">
                            <i className="fa-sharp fa-solid fa-chart-line fa-lg"></i>
                            <p className='d-flex justify-content-between'> <span>Total Orders:</span> <span>67890</span></p>
                        </div>
                        <div className="col-lg-3 col-md-7 m-2">
                            <i className="fa-sharp fa-solid fa-money-bill fa-lg"></i>
                            <p className='d-flex justify-content-between'> <span>Money:</span> <span>67890$</span></p>
                        </div>
                        <div className="col-lg-3 col-md-7 m-2">
                            <i className="fa-sharp fa-solid fa-user fa-lg"></i>
                            <p className='d-flex justify-content-between'> <span>Total Users:</span> <span>67890</span></p>
                        </div>
                    </div>
                    <div className="row ">
                        <span className="col-lg-8 mx-auto mt-6">
                            <table className='table table-bordered border-primary ' id='myTable'>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>action</th>
                                </tr>
                                {

                                    users.map((user) => (
                                        <tr>
                                            <th>{user.id}</th>
                                            <th>{user.name}</th>
                                            <th>{user.email}</th>
                                            <th>delete</th>
                                        </tr>
                                    ))
                                }
                            </table>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
