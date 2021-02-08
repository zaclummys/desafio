<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider {
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        \Tenancy\Affects\Connections\Events\Resolving::class => [
            \App\Listeners\Tenant\ResolveTenantConnection::class,
        ],
        
        \Tenancy\Affects\Connections\Events\Drivers\Configuring::class => [
            \App\Listeners\Tenant\ConfigureTenantConnection::class,
        ],
        
        \Tenancy\Affects\Filesystems\Events\ConfigureDisk::class => [
            \App\Listeners\Tenant\ConfigureTenantDisk::class
        ],        

        \Tenancy\Hooks\Database\Events\Drivers\Configuring::class => [
            \App\Listeners\Tenant\ConfigureTenantDatabase::class,
        ],

        \Tenancy\Hooks\Migration\Events\ConfigureMigrations::class => [
            \App\Listeners\Tenant\ConfigureTenantMigrations::class
        ],

        \Tenancy\Hooks\Migration\Events\ConfigureSeeds::class => [
            \App\Listeners\Tenant\ConfigureTenantSeeds::class
        ]
    ];
}
