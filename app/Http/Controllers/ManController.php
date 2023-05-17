<?php

namespace App\Http\Controllers;

use App\Models\Man;
use App\Models\Women;
use App\Http\Requests\StoreManRequest;
use App\Http\Requests\UpdateManRequest;
use Auth;
use Inertia\Inertia;
class ManController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $man = Man::paginate(8);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render(
                'Shop/Man/Man',
                [
                    "man" => $man,
                    "card" => $card,
                    "total" => $total
                ]
            );
        }
        return Inertia::render(
            'Shop/Man/Man',
            [
                "man" => $man,

            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        $man = Man::all();
        return Inertia::render('Shop/Dashboard/Man', [
            'man' => $man
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreManRequest $request)
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



        Man::create([
            'title' => $request->title,
            'discreption' => $request->discreption,
            'oldPrice' => $request->oldPrice,
            'price' => $request->price,
            'img1' => $imagename1,
            'img2' => $imagename2,
            'img3' => $imagename3,
        ]);




        // Session::flash('message', "my message");

        // return redirect('/add-all/#man');
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $mandetails = Man::find($id);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render('Shop/Man/ManDetail', [
                "man" => $mandetails,
                "card" => $card,
                "total" => $total

            ]);
        }
        return Inertia::render('Shop/Man/ManDetail', [
            "man" => $mandetails,


        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id)
    {
        $man = Man::find($id);
        return Inertia::render('Shop/Man/ManEdit', [
            "man" => $man,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManRequest $request, $id)
    {
        $man = Man::find($id);
        $man->title = $request->title;
        $man->discreption = $request->discreption;
        $man->oldPrice = $request->oldPrice;
        $man->price = $request->price;


        if ($request->hasFile('img1')) {
            $img1 = $request->img1;
            $imagename1 = time() . '1.' . $img1->getClientOriginalExtension();
            $img1->move('products', $imagename1);
            $man->img1 = $imagename1;
        }
        if ($request->hasFile('img2')) {
            $img2 = $request->img2;
            $imagename2 = time() . '2.' . $img2->getClientOriginalExtension();
            $img2->move('products', $imagename2);
            $man->img2 = $imagename2;
        }
        if ($request->hasFile('img3')) {
            $img3 = $request->img3;
            $imagename3 = time() . '3.' . $img3->getClientOriginalExtension();
            $img3->move('products', $imagename3);
            $man->img3 = $imagename3;
        }
        $man->update();

        return redirect("/add-all");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        Man::find($id)->delete();
        return redirect('/man-clothes');
    }
}
