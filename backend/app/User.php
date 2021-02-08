<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Transaction;
use App\Traits\UsesUUID;

use Tenancy\Affects\Connections\Support\Traits\OnTenant;

class User extends Authenticatable implements JWTSubject {
    use Notifiable, UsesUUID, OnTenant;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'cpf', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier () {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims () {
        return [];
    }

    public function transactions () {
        return $this->hasMany(Transaction::class);
    }
}
