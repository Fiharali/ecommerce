<?php

namespace App\Http\Controllers;

use App\Models\Kid;
use App\Http\Requests\StoreKidRequest;
use App\Http\Requests\UpdateKidRequest;
use Auth;
use Inertia\Inertia;


class KidController extends Controller
{  public function index()
    {
        $kid = Kid::paginate(8);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render(
                'Shop/Kid/Kid',
                [
                    "kid" => $kid,
                    "card" => $card,
                    "total" => $total
                ]
            );
        }
        return Inertia::render(
            'Shop/Kid/Kid',
            [
                "kid" => $kid,

            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $kid = Kid::all();
        return Inertia::render('Shop/Dashboard/Kid', [
            'kid' => $kid
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreKidRequest $request)
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



        Kid::create([
            'title' => $request->title,
            'discreption' => $request->discreption,
            'oldPrice' => $request->oldPrice,
            'price' => $request->price,
            'img1' => $imagename1,
            'img2' => $imagename2,
            'img3' => $imagename3,
        ]);




        // Session::flash('message', "my message");

        // return redirect('/add-all/#kid');
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $kiddetails = Kid::find($id);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render('Shop/Kid/KidDetail', [
                "kid" => $kiddetails,
                "card" => $card,
                "total" => $total

            ]);
        }
        return Inertia::render('Shop/Kid/KidDetail', [
            "kid" => $kiddetails,


        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id)
    {
        $kid = Kid::find($id);
        return Inertia::render('Shop/Kid/KidEdit', [
            "kid" => $kid,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKidRequest $request, $id)
    {
        $kid = Kid::find($id);
        $kid->title = $request->title;
        $kid->discreption = $request->discreption;
        $kid->oldPrice = $request->oldPrice;
        $kid->price = $request->price;


        if ($request->hasFile('img1')) {
            $img1 = $request->img1;
            $imagename1 = time() . '1.' . $img1->getClientOriginalExtension();
            $img1->move('products', $imagename1);
            $kid->img1 = $imagename1;
        }
        if ($request->hasFile('img2')) {
            $img2 = $request->img2;
            $imagename2 = time() . '2.' . $img2->getClientOriginalExtension();
            $img2->move('products', $imagename2);
            $kid->img2 = $imagename2;
        }
        if ($request->hasFile('img3')) {
            $img3 = $request->img3;
            $imagename3 = time() . '3.' . $img3->getClientOriginalExtension();
            $img3->move('products', $imagename3);
            $kid->img3 = $imagename3;
        }
        $kid->update();

        return redirect("/add-kid-clothes");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        Kid::find($id)->delete();
        return redirect('/kid-clothes');
    }
}
