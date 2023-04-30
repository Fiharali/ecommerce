<?php

namespace App\Http\Controllers;

use App\Models\Women;
use App\Http\Requests\StoreWomenRequest;
use App\Http\Requests\UpdateWomenRequest;
use Inertia\Inertia;
class WomenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Shop/Women/Women');
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
    public function show( $id)
    {
        //

        return Inertia::render('Shop/Women/WomenDetail', [
            "id"=>$id,
            "img1"=>"m1.png",
            "img2"=>"ww1.png",
            "img3"=>"m3.png"
        ]);
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
