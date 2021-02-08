<?php

namespace Database\Seeders;

use App;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder {
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run () {
        App\User::create([
            'name' => 'John Doe',
            'email' => 'johndoe@gmail.com',
            'cpf' => '999.999.999-99',
            'password' => bcrypt('12345678'),
        ]);

        App\User::create([
            'name' => 'Jane Doe',
            'email' => 'janedoe@gmail.com',
            'cpf' => '888.888.888-88',
            'password' => bcrypt('12345678'),
        ]);
    }
}