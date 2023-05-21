<?php

namespace App\Http\Controllers;

use App\Models\Pc;
use App\Http\Requests\StorePcRequest;
use App\Http\Requests\UpdatePcRequest;
use Auth;
use Inertia\Inertia;
class PcController extends Controller
{  public function index()
    {
        $pc = Pc::paginate(8);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render(
                'Shop/Pc/Pc',
                [
                    "pc" => $pc,
                    "card" => $card,
                    "total" => $total
                ]
            );
        }
        return Inertia::render(
            'Shop/Pc/Pc',
            [
                "pc" => $pc,

            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $pc = Pc::all();
        return Inertia::render('Shop/Dashboard/Pc', [
            'pc' => $pc
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePcRequest $request)
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



        Pc::create([
            'title' => $request->title,
            'discreption' => $request->discreption,
            'oldPrice' => $request->oldPrice,
            'price' => $request->price,
            'img1' => $imagename1,
            'img2' => $imagename2,
            'img3' => $imagename3,
        ]);




        // Session::flash('message', "my message");

        // return redirect('/add-all/#pc');
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $pcdetails = Pc::find($id);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render('Shop/Pc/PcDetail', [
                "pc" => $pcdetails,
                "card" => $card,
                "total" => $total

            ]);
        }
        return Inertia::render('Shop/Pc/PcDetail', [
            "pc" => $pcdetails,


        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id)
    {
        $pc = Pc::find($id);
        return Inertia::render('Shop/Pc/PcEdit', [
            "pc" => $pc,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePcRequest $request, $id)
    {
        $pc = Pc::find($id);
        $pc->title = $request->title;
        $pc->discreption = $request->discreption;
        $pc->oldPrice = $request->oldPrice;
        $pc->price = $request->price;


        if ($request->hasFile('img1')) {
            $img1 = $request->img1;
            $imagename1 = time() . '1.' . $img1->getClientOriginalExtension();
            $img1->move('products', $imagename1);
            $pc->img1 = $imagename1;
        }
        if ($request->hasFile('img2')) {
            $img2 = $request->img2;
            $imagename2 = time() . '2.' . $img2->getClientOriginalExtension();
            $img2->move('products', $imagename2);
            $pc->img2 = $imagename2;
        }
        if ($request->hasFile('img3')) {
            $img3 = $request->img3;
            $imagename3 = time() . '3.' . $img3->getClientOriginalExtension();
            $img3->move('products', $imagename3);
            $pc->img3 = $imagename3;
        }
        $pc->update();

        return redirect("/add-pc-clothes");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        Pc::find($id)->delete();
        return redirect('/pc-clothes');
    }
}

