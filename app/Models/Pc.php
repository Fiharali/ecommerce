<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pc extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'discreption', 'oldPrice' ,'price' , 'img1' , 'img2' , 'img3'];

}
