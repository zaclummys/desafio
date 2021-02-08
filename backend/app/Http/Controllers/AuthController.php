<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller {
    public function login (LoginRequest $request) {
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return abort(401);
        }

        return response()->json([
            'token' => $token
        ]);
    }
}
