<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    function delete_image_posts()
    {
        if ($this->image_posts) {
            $thumbnailPath = public_path('assets/image/post/post_' . $this->image_posts);
            if (file_exists($thumbnailPath)) {
                unlink($thumbnailPath);
            }
        }
    }
}
