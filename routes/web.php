<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WomenController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/nav', function () {
    return Inertia::render('nav');
});


Route::get('/', function () {
    return Inertia::render('Home/Home');
});

// Route::resource('women', WomenController::class, [
//     'names' => [
//         'index' => 'women',
//         'store' => 'admin.product.store',
//         'update' => 'admin.product.update',
//         'destroy' => 'admin.product.delete'
//     ]
// ]);


 Route::get('/women-clothes',  [WomenController::class, 'index'])->name("women");
 Route::get('/women-details/{id}',  [WomenController::class, 'show'])->name("women.details");

