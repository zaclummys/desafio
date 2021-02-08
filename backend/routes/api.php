<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
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

Route::post('/auth/login', [AuthController::class, 'login']);
Route::get('/auth/current', [AuthController::class, 'current']);

Route::middleware('auth:api')->group(function ($route) {
    $route->get('/transaction/all', [TransactionController::class, 'all']);
    $route->post('/transaction/create', [TransactionController::class, 'create']);
    $route->get('/transaction/{transaction}', [TransactionController::class, 'view']);
    $route->post('/transaction/{transaction}/update', [TransactionController::class, 'update']);
    $route->post('/transaction/{transaction}/delete', [TransactionController::class, 'delete']);
});