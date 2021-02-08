<?php

namespace Database\Seeders;

use App;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        App\Company::create([
            'host' => 'company1'
        ]);

        App\Company::create([
            'host' => 'company2'
        ]);
    }
}
