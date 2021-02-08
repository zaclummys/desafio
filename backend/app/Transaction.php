<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Tenancy\Affects\Connections\Support\Traits\OnTenant;

use App\Traits\UsesUUID;

class Transaction extends Model
{
    use  SoftDeletes, UsesUUID, OnTenant;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'value', 'document', 'status'
    ];

    public function user () {
        return $this->belongsTo(App\User::class);
    }
}
