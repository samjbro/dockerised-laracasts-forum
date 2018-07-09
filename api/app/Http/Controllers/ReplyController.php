<?php

namespace App\Http\Controllers;

use App\Reply;
use App\Thread;
use Illuminate\Http\Request;
use Mockery\Exception;

class ReplyController extends Controller
{
    public function store (Request $request, Thread $thread)
    {
        $reply = $thread->addReply([
            'user_id' => auth()->id(),
            'body' => $request->body
        ]);
        return response()->json($reply);
    }
}
