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
         $total = Auth::user()->cards->sum('price');
        if($total > 1){
            return Inertia::render('Payment/Payment', [
                'total'=>$total,
            ]);
        }else{
            return redirect('/');
        }

        // return view('Pay', [
        //     'total'=>$total,
        // ]);
    }
    public function stripePost(Request $request)
    {
        $total = Auth::user()->cards->sum('price');
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $customer = Stripe\Customer::create(array(
            "address" => [

                    "line1" => $request->line,
                    "city" => $request->city,
                    "country" => "Morocco",
                ],
            "email" => Auth::user()->email,
            "name" => Auth::user()->name,
            "phone" => $request->phone,
            'source'=>'tok_visa',

         ));
        Stripe\Charge::create([
            'amount'=>$total,
            'currency'=>"usd",
            "customer" => $customer->id,
            'description'=>'test ',


        ]);


        Order::create([
            'amount' => $total,
            'user_id' => Auth::user()->id
        ]);

        Card::where('user_id', '=', Auth::user()->id)->delete();




        Session::flash('message','payment success');
        return redirect('/');

    }
}
