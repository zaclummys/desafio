<?php

namespace App\Listeners\Tenant;

use Tenancy\Affects\Filesystems\Events\ConfigureDisk;

class ConfigureTenantDisk {
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle (ConfigureDisk $configure) {
        if (null == $configure->event->tenant) {
            return;
        }
        
        $configure->config = [
            'driver' => 'local',
            'root' => storage_path('app/public/tenant/' . $configure->event->tenant->getTenantKey()),
            'url' => env('APP_URL') . '/storage/tenant/' . $configure->event->tenant->getTenantKey(),
            'visibility' => 'public',
        ];
    }
}
