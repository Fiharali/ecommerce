<?php

namespace App\Http\Controllers;
use Stripe;
use Session;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Card;
use Auth;
class PaymentController extends Controller
{
    public function stripe()
    {
        return Inertia::render('Payment/Payment');
        // $total = Auth::user()->cards->sum('price');
        // return view('Pay', [
        //     'total'=>$total,
        // ]);
    }
    public function stripePost(Request $request)
    {
        $total = Auth::user()->cards->sum('price');
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        Stripe\Charge::create([
            'amount'=>$total,
            'currency'=>"usd",
            'source'=>'tok_visa',
            'description'=>'test '
        ]);


        Order::create([
            'amount' => $total,
            'user_id' => Auth::user()->id
        ]);

        Card::where('user_id', '=', Auth::user()->id)->delete();


        // Session::flash('message','payment success');

        $card = Auth::user()->cards;
        // $total = Auth::user()->cards->sum('price');

        // return Inertia::render('Home/Home', [
        //     "card" => $card,
        //     "total" => $total
        // ]);
        return redirect('/');

    }
}
