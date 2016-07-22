<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            // Add tables
            $table->increments('id');
            $table->timestamp('start');
            $table->timestamp('end')->nullable();
            $table->text('comment');
            $table->integer('task_id')->unsigned()->nullable();
            $table->timestamps();

            // Add foreign keys
            $table->foreign('task_id')->references('id')->on('tasks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sessions');
    }
}