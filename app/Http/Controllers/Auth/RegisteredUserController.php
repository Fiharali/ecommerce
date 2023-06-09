<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('AuthAuth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $connected = @fsockopen("www.google.com", 80);
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if ($connected) {


            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            event(new Registered($user));

            Auth::login($user);
            $mail_data = [

                'reci' => Auth::user()->email,
                'from' => 'abdelalifihar@gmail.com',
                'name' => Auth::user()->name,
                'subject' => 'welcome in our site',

            ];
            \Mail::send('emailll',$mail_data , function($message) use ($mail_data){
                $message->to($mail_data['reci'])
                ->from($mail_data['from'] , $mail_data['name'])
                ->subject($mail_data['subject']);

        });
            return redirect('/');
        } else {
            $p = 'fff';

        }






    }
    public function deleteuser($id){
         User::find($id)->delete();

    }
}
