<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    protected $fillable = ['title', 'body', 'user_id'];

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function path()
    {
        return '/threads/' . $this->id;
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function addReply($reply)
    {
        return $this->replies()->create($reply);
    }
}
