<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WomenController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\ManController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\isAdmin;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


// Route::get('/registerr', function () {
//     return Inertia::render('AuthAuth/Register');
// })->name('registerr');




// Route::resource('women', WomenController::class, [
//     'names' => [
//         'index' => 'women',
//         'store' => 'admin.product.store',
//         'update' => 'admin.product.update',
//         'destroy' => 'admin.product.delete'
//     ]
// ]);


////////////////MAIN ROUTE////////////
Route::get('/',  [CardController::class, 'home']);
 Route::get('/dashboard',  [CardController::class, 'dashboard'])->name('dashboard')->middleware('auth');
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
 Route::post('/add-women-clothes',  [WomenController::class, 'store'])->name("addd.women.clothes");
 Route::get('/women-edit/{id}',  [WomenController::class, 'edit'])->name("women.edit");
 Route::post('/women-update/{id}',  [WomenController::class, 'update'])->name("women.update");
});
////////////////end WOMEN ROUTES////////////

////////////////MEN ROUTES////////////
Route::get('/man-clothes',  [ManController::class, 'index'])->name("man");
Route::get('/man-details/{id}',  [ManController::class, 'show'])->name("man.details");
Route::middleware('auth')->group(function () {
    Route::post('/add-man-to-cart/{id}',  [CardController::class, 'addManToCart'])->name("add.man.to.cart");
    Route::delete('/delete-cart-item/{id}',  [CardController::class, 'destroy'])->name('delete.cart.item');
});
Route::middleware('isAdmin')->group(function () {
Route::delete('/man-delete/{id}',  [ManController::class, 'destroy'])->name("delete.man");
 Route::get('/add-man-clothes',  [ManController::class, 'create'])->name("add.man.clothes");
 Route::post('/add-man-clothes',  [ManController::class, 'store'])->name("addd.man.clothes");
 Route::get('/man-edit/{id}',  [ManController::class, 'edit'])->name("man.edit");
 Route::post('/man-update/{id}',  [ManController::class, 'update'])->name("man.update");
});
////////////////end MEN ROUTES////////////


