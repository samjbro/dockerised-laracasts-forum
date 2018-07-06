<?php

namespace App\Http\Controllers;

use App\Reply;
use App\User;
use Illuminate\Http\Request;
use App\Thread;
use Illuminate\Support\Facades\Artisan;

class DataController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            'threads' => Thread::all(),
            'replies' => Reply::all(),
            'users' => User::all()
        ]);
    }

    public function reset(Request $request)
    {
        if (env('APP_ENV') === 'testing')
        {
            Artisan::call('migrate:refresh', [
                '--seed' => $request->input('seed')
            ]);
        }
    }
}
