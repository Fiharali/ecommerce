<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WomenController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\ManController;
use App\Http\Controllers\KidController;
use App\Http\Controllers\PhoneController;
use App\Http\Controllers\PcController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\isAdmin;




Route::get('/stripe', [PaymentController::class, 'stripe'])->name('stripe')->middleware('auth');
Route::post('/stripe', [PaymentController::class, 'stripePost'])->name('stripe.post')->middleware('auth');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';




////////////////MAIN ROUTE////////////
Route::get('/',  [CardController::class, 'home']);
 Route::get('/dashboard',  [CardController::class, 'dashboard'])->name('dashboard')->middleware('isAdmin');
 Route::delete('/delete-user/{id}',  [RegisteredUserController::class, 'deleteuser'])->name('delete.user')->middleware('isAdmin');
////////////////END MAIN ROUTES////////////

////////////////WOMEN ROUTES////////////
Route::get('/women-clothes',  [WomenController::class, 'index'])->name("women");
Route::get('/women-details/{id}',  [WomenController::class, 'show'])->name("women.details");
Route::middleware('auth')->group(function () {
    Route::post('/add-women-to-cart/{id}',  [CardController::class, 'addWomenToCart'])->name("add.women.to.cart");
    Route::delete('/delete-cart-item/{id}',  [CardController::class, 'destroy'])->name('delete.cart.item');
});
Route::middleware('isAdmin')->group(function () {
Route::delete('/women-delete/{id}',  [WomenController::class, 'destroy'])->name("delete.women");
 Route::get('/add-women-clothes',  [WomenController::class, 'create'])->name("add.women.clothes");
 Route::post('/add-women-clothes',  [WomenController::class, 'store'])->name("add.women.clothes");
 Route::get('/women-edit/{id}',  [WomenController::class, 'edit'])->name("women.edit");
 Route::post('/women-update/{id}',  [WomenController::class, 'update'])->name("women.update");
});
////////////////end WOMEN ROUTES////////////

////////////////MEN ROUTES////////////
Route::get('/man-clothes',  [ManController::class, 'index'])->name("man");
Route::get('/man-details/{id}',  [ManController::class, 'show'])->name("man.details");
Route::middleware('auth')->group(function () {
    Route::post('/add-man-to-cart/{id}',  [CardController::class, 'addManToCart'])->name("add.man.to.cart");
    // Route::delete('/delete-cart-item/{id}',  [CardController::class, 'destroy'])->name('delete.cart.item');
});
Route::middleware('isAdmin')->group(function () {
Route::delete('/man-delete/{id}',  [ManController::class, 'destroy'])->name("delete.man");
 Route::get('/add-man-clothes',  [ManController::class, 'create'])->name("add.man.clothes");
 Route::post('/add-man-clothes',  [ManController::class, 'store'])->name("add.man.clothes");
 Route::get('/man-edit/{id}',  [ManController::class, 'edit'])->name("man.edit");
 Route::post('/man-update/{id}',  [ManController::class, 'update'])->name("man.update");
});
////////////////end MEN ROUTES////////////

////////////////kid ROUTES////////////
Route::get('/kid-clothes',  [KidController::class, 'index'])->name("kid");
Route::get('/kid-details/{id}',  [KidController::class, 'show'])->name("kid.details");
Route::middleware('auth')->group(function () {
    Route::post('/add-kid-to-cart/{id}',  [CardController::class, 'addkidToCart'])->name("add.kid.to.cart");
    // Route::delete('/delete-cart-item/{id}',  [CardController::class, 'destroy'])->name('delete.cart.item');
});
Route::middleware('isAdmin')->group(function () {
Route::delete('/kid-delete/{id}',  [KidController::class, 'destroy'])->name("delete.kid");
 Route::get('/add-kid-clothes',  [KidController::class, 'create'])->name("add.kid.clothes");
 Route::post('/add-kid-clothes',  [KidController::class, 'store'])->name("add.kid.clothes");
 Route::get('/kid-edit/{id}',  [KidController::class, 'edit'])->name("kid.edit");
 Route::post('/kid-update/{id}',  [KidController::class, 'update'])->name("kid.update");
});
////////////////end kid ROUTES////////////

///////////////Phone ROUTES////////////
Route::get('/phone-clothes',  [PhoneController::class, 'index'])->name("phone");
Route::get('/phone-details/{id}',  [PhoneController::class, 'show'])->name("phone.details");
Route::middleware('auth')->group(function () {
    Route::post('/add-phone-to-cart/{id}',  [CardController::class, 'addPhoneToCart'])->name("add.phone.to.cart");
});
Route::middleware('isAdmin')->group(function () {
Route::delete('/phone-delete/{id}',  [PhoneController::class, 'destroy'])->name("delete.phone");
 Route::get('/add-phone-clothes',  [PhoneController::class, 'create'])->name("add.phone.clothes");
 Route::post('/add-phone-clothes',  [PhoneController::class, 'store'])->name("add.phone.clothes");
 Route::get('/phone-edit/{id}',  [PhoneController::class, 'edit'])->name("phone.edit");
 Route::post('/phone-update/{id}',  [PhoneController::class, 'update'])->name("phone.update");
});
////////////////end Phone ROUTES////////////

///////////////Pc ROUTES////////////
Route::get('/pc-clothes',  [PcController::class, 'index'])->name("pc");
Route::get('/pc-details/{id}',  [PcController::class, 'show'])->name("pc.details");
Route::middleware('auth')->group(function () {
    Route::post('/add-pc-to-cart/{id}',  [CardController::class, 'addPcToCart'])->name("add.pc.to.cart");
});
Route::middleware('isAdmin')->group(function () {
Route::delete('/pc-delete/{id}',  [PcController::class, 'destroy'])->name("delete.pc");
 Route::get('/add-pc-clothes',  [PcController::class, 'create'])->name("add.pc.clothes");
 Route::post('/add-pc-clothes',  [PcController::class, 'store'])->name("add.pc.clothes");
 Route::get('/pc-edit/{id}',  [PcController::class, 'edit'])->name("pc.edit");
 Route::post('/pc-update/{id}',  [PcController::class, 'update'])->name("pc.update");
});
////////////////end Pc ROUTES////////////

