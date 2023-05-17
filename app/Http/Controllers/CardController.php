<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Women;
use App\Models\Man;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use Illuminate\Support\Facades\Session;
use Auth;
use Inertia\Inertia;

class CardController extends Controller
{

    public function addWomenToCart( StoreCardRequest $request ,$id)
    {

        $women = Women::find($id);

        Card::create([
            'title' => $women->title,
            'price' => $women->price,
            'img1' => $women->img1,
            'color' => $request->color,
            'taille' => $request->taille,
            'user_id' => Auth::user()->id
        ]);
        Session::flash('message', "its add to cart");

    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function addManToCart(StoreCardRequest $request ,$id)
    {
        $man = Man::find($id);

        Card::create([
            'title' => $man->titleMan,
            'price' => $man->priceMan,
            'img1' => $man->img1Man,
            'color' => $request->color,
            'taille' => $request->taille,
            'user_id' => Auth::user()->id
        ]);
        Session::flash('message', "its add to cart");
    }

    /**
     * Display the specified resource.
     */
    public function show(Card $card)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Card $card)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardRequest $request, Card $card)
    {
        //
    }

    /**
     * Remove thespecified resource from storage.
     */
    public function destroy( $id)
    {
        //
        Card::find($id)->delete();
    }

    public function home()
    {

        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');

            return Inertia::render('Home/Home', [
                "card" => $card,
                "total" => $total
            ]);
        }

        return Inertia::render('Home/Home');

    }
    public function dashboard()
    {

        return Inertia::render('Shop/Dashboard/Dashboard');

    }
}
