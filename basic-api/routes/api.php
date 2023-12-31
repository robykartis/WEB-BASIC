<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::get('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('createNewToken', 'createNewToken');
});
Route::controller(CategoryController::class)->group(function () {
    Route::get('categories', 'index');
    Route::post('categories', 'store');
    Route::get('categories/{slug}', 'show');
    Route::put('categories/{slug}', 'update');
    Route::delete('categories/{slug}', 'destroy');
});
// Route::controller(PostsController::class)->group(function () {
//     Route::get('posts', 'index');
//     Route::post('posts', 'store');
//     Route::get('posts/{slug}', 'show');
//     Route::post('posts/{slug}', 'update');
//     Route::delete('posts/{slug}', 'destroy');
// });
