<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Card extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'price' , 'img1' ,'color','taille', 'user_id'];



    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
