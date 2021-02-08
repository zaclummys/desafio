<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;

use Tenancy\Identification\Contracts\Tenant;
use Tenancy\Identification\Concerns\AllowsTenantIdentification;

use Illuminate\Notifications\Notifiable;

use App\Traits\UsesUUID;

use Illuminate\Database\Eloquent\Model;

use Tenancy\Identification\Drivers\Http\Contracts\IdentifiesByHttp;

class Company extends Model implements Tenant, IdentifiesByHttp {
    use Notifiable, UsesUUID, AllowsTenantIdentification;

    protected $dispatchesEvents = [
        'created' => \Tenancy\Tenant\Events\Created::class,
        'updated' => \Tenancy\Tenant\Events\Updated::class,
        'deleted' => \Tenancy\Tenant\Events\Deleted::class,
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'host'
    ];

    public function tenantIdentificationByHttp (\Illuminate\Http\Request  $request): ?Tenant {
        return Company::where('host', $request->getHost())->first();
    }
}
