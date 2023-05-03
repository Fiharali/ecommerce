<?php

namespace App\Http\Controllers;

use App\Models\Women;
use App\Models\Card;
use App\Http\Requests\StoreWomenRequest;
use App\Http\Requests\UpdateWomenRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Auth;

class WomenController extends Controller
{


    public function index()
    {

        $women = Women::paginate(7);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render(
                'Shop/Women/Women',
                [
                    "women" => $women,
                    "card" => $card,
                    "total" => $total
                ]
            );
        }
        return Inertia::render(
            'Shop/Women/Women',
            [
                "women" => $women,

            ]
        );


    }


    public function create()
    {
        $women = Women::paginate(5);
        return Inertia::render('Shop/AddAll/AddAll', ['women' => $women]);

    }

    public function store(StoreWomenRequest $request)
    {

        // rename image1 and store
        $img1 = $request->img1;
        $imagename1 = time() . '1.' . $img1->getClientOriginalExtension();
        $img1->move('products', $imagename1);

        // rename image2 and store
        $img2 = $request->img2;
        $imagename2 = time() . '2.' . $img2->getClientOriginalExtension();
        $img2->move('products', $imagename2);

        // rename image3 and store
        $img3 = $request->img3;
        $imagename3 = time() . '3.' . $img3->getClientOriginalExtension();
        $img3->move('products', $imagename3);



        Women::create([
            'title' => $request->title,
            'discreption' => $request->discreption,
            'oldPrice' => $request->oldPrice,
            'price' => $request->price,
            'img1' => $imagename1,
            'img2' => $imagename2,
            'img3' => $imagename3,
        ]);

        // Session::flash('message', "my message");

        // return redirect('/women-clothes');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $womendetails = Women::find($id);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render('Shop/Women/WomenDetail', [
                "women" => $womendetails,
                "card" => $card,
                "total" => $total

            ]);
        }
        return Inertia::render('Shop/Women/WomenDetail', [
            "women" => $womendetails,


        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $women = Women::find($id);
        return Inertia::render('Shop/Women/WomenEdit', [
            "women" => $women,

        ]);
    }


    public function update(UpdateWomenRequest $request, $id)
    {
        $women = Women::find($id);
        $women->title = $request->title;
        $women->discreption = $request->discreption;
        $women->oldPrice = $request->oldPrice;
        $women->price = $request->price;


        if ($request->hasFile('img1')) {
            $img1 = $request->img1;
            $imagename1 = time() . '1.' . $img1->getClientOriginalExtension();
            $img1->move('products', $imagename1);
            $women->img1 = $imagename1;
        }
        if ($request->hasFile('img2')) {
            $img2 = $request->img2;
            $imagename2 = time() . '2.' . $img2->getClientOriginalExtension();
            $img2->move('products', $imagename2);
            $women->img2 = $imagename2;
        }
        if ($request->hasFile('img3')) {
            $img3 = $request->img3;
            $imagename3 = time() . '3.' . $img3->getClientOriginalExtension();
            $img3->move('products', $imagename3);
            $women->img3 = $imagename3;
        }
        $women->update();

        return redirect("/add-all");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {

        Women::find($id)->delete();
        return redirect('/women-clothes');

    }
    public function home()
    {
        $card = Auth::user()->cards;
        return Inertia::render('Home/Home', [
            "card" => $card
        ]);
    }


}
