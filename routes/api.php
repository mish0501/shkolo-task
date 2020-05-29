<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('dashboard', function () {
    return json_encode('[{"id": 1,"position": 0,"title": "primary","link": "#","color": "primary"},{"id": 2,"position": 5,"title": "warning","link": "#","color": "warning"},{"id": 3,"position": 3,"title": "success","link": "#","color": "success"},{"id": 4,"position": 7,"title": "info","link": "#","color": "info"},{"position": 1},{"position": 2},{"position": 4},{"position": 6},{"position": 8}]');
});
