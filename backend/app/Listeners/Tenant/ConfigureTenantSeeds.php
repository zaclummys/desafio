<?php

namespace App\Listeners\Tenant;

use Tenancy\Hooks\Migration\Events\ConfigureSeeds;

class ConfigureTenantSeeds {
    public function handle(ConfigureSeeds $event) {
        $event->seed(\Database\Seeders\UsersSeeder::class);
    }
}