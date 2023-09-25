<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth_access', ['except' => ['login', 'register']]);
    }

    public function profil()
    {
        try {
            $user = auth()->user()->name;
            return response()->json([
                'status' => true,
                'message' => 'success',
                'data' => $user
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => $e->errorInfo
            ], 500);
        }
    }
    public function register(RegisterRequest $request)
    {

        try {
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->role_id = 3;
            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Daftar akun berhasil',
                'data' => $user
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->errorInfo
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => [
                'required',
                'email',
                function ($attribute, $value, $fail) {
                    $user = User::where('email', $value)->first();

                    if (!$user) {
                        $fail('Email yang Anda masukkan belum terdaftar.');
                    }
                },
            ],
            'password' => [
                'required',
                'min:3',
                function ($attribute, $value, $fail) use ($request) {
                    $user = User::where('email', $request->email)->first();

                    if ($user && !Hash::check($value, $user->password)) {
                        $fail('Password yang Anda masukkan salah.');
                    }
                },
            ],
        ], [
            'email.required' => 'Kolom email tidak boleh kosong.',
            'email.email' => 'Format email tidak valid.',
            'password.required' => 'Kolom password tidak boleh kosong.',
            'password.min' => 'Password yang anda masukan minimal 3 karakter.',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        try {
            $credentials = $request->only('email', 'password');
            $token = Auth::attempt($credentials);
            if (!$token) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unauthorized',
                ], 401);
            }
            $user = Auth::user();
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'auth' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status_kode' => 500,
                'status' => false,
                'message' => $e->errorInfo
            ], 500);
        }
    }
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }
    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
