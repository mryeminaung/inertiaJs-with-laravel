<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';
    protected $fillable = ['title', 'body'];

    public function scopeFilter($query, $filter)
    {
        // $query is current query that's Post::all()
        // $search is $filter['search']
        $query->when($filter['search'] ?? null, function ($query, $search) {
            $query->where('title', 'like', "%" . $search . "%")
                ->orWhere('body', 'like', "%" . $search . "%");
        });
    }

    public function getTitleAttribute($value)
    {
        return ucwords($value);
    }
}
