<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Button extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'link', 'color', 'position'
    ];
}
