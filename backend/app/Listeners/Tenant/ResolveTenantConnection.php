<?php

namespace App\Listeners\Tenant;

use Tenancy\Identification\Contracts\Tenant;
use Tenancy\Affects\Connections\Contracts\ProvidesConfiguration;
use Tenancy\Affects\Connections\Events\Resolving;
use Tenancy\Affects\Connections\Events\Drivers\Configuring;

class ResolveTenantConnection implements ProvidesConfiguration {
    public function handle(Resolving $event)
    {
        return $this;
    }

    public function configure(Tenant $tenant): array {
        $config = [];

        event(new Configuring($tenant, $config, $this));

        return $config;
    }
}