<?php

namespace App\Http\Controllers;

use App\Models\Phone;
use App\Http\Requests\StorePhoneRequest;
use App\Http\Requests\UpdatePhoneRequest;
use Auth;
use Inertia\Inertia;
class PhoneController extends Controller
{  public function index()
    {
        $phone = Phone::paginate(8);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render(
                'Shop/Phone/Phone',
                [
                    "phone" => $phone,
                    "card" => $card,
                    "total" => $total
                ]
            );
        }
        return Inertia::render(
            'Shop/Phone/Phone',
            [
                "phone" => $phone,

            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $phone = Phone::all();
        return Inertia::render('Shop/Dashboard/Phone', [
            'phone' => $phone
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePhoneRequest $request)
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



        Phone::create([
            'title' => $request->title,
            'discreption' => $request->discreption,
            'oldPrice' => $request->oldPrice,
            'price' => $request->price,
            'img1' => $imagename1,
            'img2' => $imagename2,
            'img3' => $imagename3,
        ]);




        // Session::flash('message', "my message");

        // return redirect('/add-all/#phone');
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $phonedetails = Phone::find($id);
        if (Auth::check()) {
            $card = Auth::user()->cards;
            $total = Auth::user()->cards->sum('price');
            return Inertia::render('Shop/Phone/PhoneDetail', [
                "phone" => $phonedetails,
                "card" => $card,
                "total" => $total

            ]);
        }
        return Inertia::render('Shop/Phone/PhoneDetail', [
            "phone" => $phonedetails,


        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id)
    {
        $phone = Phone::find($id);
        return Inertia::render('Shop/Phone/PhoneEdit', [
            "phone" => $phone,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePhoneRequest $request, $id)
    {
        $phone = Phone::find($id);
        $phone->title = $request->title;
        $phone->discreption = $request->discreption;
        $phone->oldPrice = $request->oldPrice;
        $phone->price = $request->price;


        if ($request->hasFile('img1')) {
            $img1 = $request->img1;
            $imagename1 = time() . '1.' . $img1->getClientOriginalExtension();
            $img1->move('products', $imagename1);
            $phone->img1 = $imagename1;
        }
        if ($request->hasFile('img2')) {
            $img2 = $request->img2;
            $imagename2 = time() . '2.' . $img2->getClientOriginalExtension();
            $img2->move('products', $imagename2);
            $phone->img2 = $imagename2;
        }
        if ($request->hasFile('img3')) {
            $img3 = $request->img3;
            $imagename3 = time() . '3.' . $img3->getClientOriginalExtension();
            $img3->move('products', $imagename3);
            $phone->img3 = $imagename3;
        }
        $phone->update();

        return redirect("/add-phone-clothes");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        Phone::find($id)->delete();
        return redirect('/phone-clothes');
    }
}
