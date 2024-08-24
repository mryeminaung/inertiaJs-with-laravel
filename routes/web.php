<?php

use App\Http\Controllers\Post\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::controller(PostController::class)->group(function () {
    Route::get('/posts', 'index')->name('posts.index');
    Route::post('/posts/create', 'create')->name('posts.create');
    Route::get('/posts/{post}', 'show')->name('posts.show');
    Route::get('/posts/{post}/edit', 'edit')->name('posts.edit');
    Route::match(['put', 'match'], '/posts/{post}', 'update')->name('posts.update');
    Route::delete('/posts/{post}', 'destroy')->name('posts.delete');
});

Route::inertia('/about', 'About')->name('pages.about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
