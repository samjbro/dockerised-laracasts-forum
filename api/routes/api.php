<?php

use Illuminate\Http\Request;

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


Route::group(['middleware' => 'jwt.auth'], function ($router) {
    Route::resource('threads', 'ThreadController');
    Route::resource('threads/{thread}/replies', 'ReplyController');
});

Route::post('me', 'AuthController@login');
Route::delete('me', 'AuthController@logout');

Route::get('data', 'DataController@index');

Route::post('data', 'DataController@reset');

