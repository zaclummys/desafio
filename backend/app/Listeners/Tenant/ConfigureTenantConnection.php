<?php

namespace App\Listeners\Tenant;

use Tenancy\Affects\Connections\Events\Drivers\Configuring;

class ConfigureTenantConnection {
    public function handle (Configuring $event) {
        $event->useConnection('sqlite', [
            'database' => database_path('tenant/' . $event->tenant->getTenantKey() . '.sqlite'),
        ]);
    }
}