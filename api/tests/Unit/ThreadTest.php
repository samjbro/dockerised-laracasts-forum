<?php

namespace Tests\Unit;

use App\Thread;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ThreadTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_thread_has_replies()
    {
        $thread = factory(Thread::class)->create();
        $this->assertInstanceOf(Collection::class, $thread->replies);
    }
}
