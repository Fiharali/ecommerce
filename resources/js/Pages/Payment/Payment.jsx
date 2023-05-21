import React, { useState } from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';
import $ from 'jquery';

function Payment() {
    const { get, data, setData, post, errors, progress, } = useForm({
        numCart:'',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('stripe.post'))
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 card">
                        <h1 className='h1'>Stripe Payment Gateway</h1>
                        <form role="form" onSubmit={handleSubmit} method="post" className="form" data-cc-on-file="false" data-stripe-publishable-key="{{ env('STRIPE_KEY') }}" id="payment-form">
                            <div className="m-4">
                                <label className="control-label">Name on Card</label>
                                <input className="form-control" size={4} type="text" />
                            </div>
                            <div className="m-4">
                                <label className="control-label">Card Number</label>
                                <input autoComplete="off" className="form-control card-number" name='numCart' value={data.numCart} onChange={(e) => setData("numCart", e.target.value)}   type="text" />
                            </div>
                            <div className="m-3 row">
                                <div className="col-xs-12 col-md-4 ">
                                    <label className="control-label">CVC</label>
                                    <input autoComplete="off" className="form-control card-cvc" placeholder="ex. 311" size={4} type="text" />
                                </div>
                                <div className="col-xs-12 col-md-4 ">
                                    <label className="control-label">Expiration Month</label>
                                    <input className="form-control card-expiry-month" placeholder="MM" size={2} type="text" />
                                </div>
                                <div className="col-xs-12 col-md-4 ">
                                    <label className="control-label">Expiration Year</label>
                                    <input className="form-control card-expiry-year" placeholder="YYYY" size={4} type="text" />
                                </div>

                            </div>
                            <div className="row m-4">
                                <div className="col-md-12 ">
                                    <button className="btn bg-success form-control p-3 text-white" type="submit">Price: ($100) </button><br />
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
