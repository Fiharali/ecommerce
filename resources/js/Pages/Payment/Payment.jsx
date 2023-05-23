import React, { useState } from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';
import $ from 'jquery';

function Payment({auth , total}) {
    const { get, data, setData, post, errors, progress, } = useForm({
        city: '',
        line: '',
        phone: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('stripe.post'))
    };

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-6 col-md-offset-3 card">
                        <h1 className='h1 text-center'>Stripe Payment Gateway</h1>
                        <form role="form" onSubmit={handleSubmit} method="post" className="form" data-cc-on-file="false" data-stripe-publishable-key="{{ env('STRIPE_KEY') }}" id="payment-form">
                            <div className="m-3 row">
                                <div className="col-xs-12 col-md-6 my-2">
                                    <label className="control-label">Name</label>
                                    <input autoComplete="off" className="form-control "  type="text"  value={auth.user.name} disabled={1}/>
                                </div>
                                <div className="col-xs-12 col-md-6 my-2 ">
                                    <label className="control-label">Expiration Month</label>
                                    <input className="form-control "  type="text"  value={auth.user.email} disabled={1}/>
                                </div>
                            </div>
                            <div className="m-3 row">
                                <div className="col-xs-12 col-md-6 my-2">
                                    <label className="control-label">Phone</label>
                                    <input autoComplete="off" className="form-control " placeholder="ex. 06XXXXXX"  type="text" value={data.phone} onChange={(e) => setData("phone", e.target.value)} />
                                </div>
                                <div className="col-xs-12 col-md-6 my-2">
                                    <label className="control-label">Adress</label>
                                    <input autoComplete="off" className="form-control " placeholder="ex. hay rue N"  type="text" value={data.line} onChange={(e) => setData("line", e.target.value)} />
                                </div>
                                <div className="col-xs-12 col-md-6 my-2">
                                    <label className="control-label">City</label>
                                    <input autoComplete="off" className="form-control " placeholder="ex. casa"  type="text" value={data.city} onChange={(e) => setData("city", e.target.value)} />
                                </div>
                                <div className="col-xs-12 col-md-6 my-2 ">
                                    <label className="control-label">Country</label>
                                    <input className="form-control " type="text"  value={'Morocco'} disabled={1}/>
                                </div>
                            </div>
                            <div className="m-3 row">
                                <div className="col-xs-12 col-md-6 my-2">
                                    <label className="control-label">Name on Card</label>
                                    <input className="form-control" size={4} type="text"  placeholder='ex. VISA'/>
                                </div>
                                <div className="col-xs-12 col-md-6 my-2 ">
                                    <label className="control-label">Card Number</label>
                                    <input className="form-control " autoComplete='off' placeholder="MM"  type="number" />
                                </div>
                            </div>
                            <div className="m-3 row">
                                <div className="col-xs-12 col-md-4 ">
                                    <label className="control-label">CVC</label>
                                    <input autoComplete="off" className="form-control " placeholder="ex. 311"  type="number" />
                                </div>
                                <div className="col-xs-12 col-md-4 ">
                                    <label className="control-label">Expiration Month</label>
                                    <input className="form-control " placeholder="MM"  type="number" />
                                </div>
                                <div className="col-xs-12 col-md-4 ">
                                    <label className="control-label">Expiration Year</label>
                                    <input className="form-control " placeholder="YYYY"  type="number" />
                                </div>

                            </div>
                            <div className="row m-4">
                                <div className="col-md-12 ">
                                    <button className="btn bg-success form-control p-3 text-white" type="submit">Price: ({total}$) </button><br />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Payment
