<?php

use App\Reply;
use App\Thread;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = factory(User::class)->create([
            'email' => 'test@comms-express.com',
            'password' => bcrypt('secret')
        ]);
//        $threads = factory(Thread::class, 50)->create();
//        $threads->each(function ($thread) {
//           factory(Reply::class, 10)->create(['thread_id' => $thread->id]);
//        });
    }
}
