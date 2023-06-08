<?php

namespace App\Http\Controllers;

use Stripe;
use Session;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Card;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{


    public function stripe()
    {
        $total = Auth::user()->cards->sum('price');
        if ($total > 1) {
            return Inertia::render('Payment/Payment', [
                'total' => $total,
            ]);
        } else {
            return redirect('/');
        }

        // return view('Pay', [
        //     'total'=>$total,
        // ]);
    }
    public function stripePost(Request $request)
    {

        $connected = @fsockopen("www.google.com", 80);
        if ($connected) {

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
                'source' => 'tok_visa',

            ));
            Stripe\Charge::create([
                'amount' => $total,
                'currency' => "usd",
                "customer" => $customer->id,
                'description' => 'test ',


            ]);


            Order::create([
                'amount' => $total,
                'city' => $request->city,
                'phone' => $request->phone,
                'address' => $request->address,
                'user_id' => Auth::user()->id
            ]);

            Card::where('user_id', '=', Auth::user()->id)->delete();


            $mail_data = [

                'reci' => Auth::user()->email,
                'from' => 'abdelalifihar@gmail.com',
                'name' => Auth::user()->name,
                'subject' => 'payment success',

            ];
            \Mail::send('emailll', $mail_data, function ($message) use ($mail_data) {
                $message->to($mail_data['reci'])
                    ->from($mail_data['from'], $mail_data['name'])
                    ->subject($mail_data['subject']);
            });

            // Session::flash('message','payment success');
            return redirect('/');
        } else {
            $p = 'fff';
        }
    }
}
