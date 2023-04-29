<?php

namespace App\Http\Controllers;

use App\Models\Women;
use App\Http\Requests\StoreWomenRequest;
use App\Http\Requests\UpdateWomenRequest;

class WomenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return 'women';
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWomenRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Women $women)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Women $women)
    {
        //
        return 'lalal';
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWomenRequest $request, Women $women)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Women $women)
    {
        //
    }
}
