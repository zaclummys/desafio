<?php

namespace App\Listeners\Tenant;

use Tenancy\Hooks\Database\Events\Drivers\Configuring;

class ConfigureTenantDatabase {
    public function handle (Configuring $event) {
        $event->useConnection('sqlite', [
            'database' => database_path('tenant/' . $event->tenant->getTenantKey() . '.sqlite'),
        ]);
    }
}