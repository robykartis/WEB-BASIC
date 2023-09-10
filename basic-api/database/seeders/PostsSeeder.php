<?php

namespace Database\Seeders;

use App\Models\Posts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Posts::create([
            'title' => 'Post 1',
            'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia ut reprehenderit quisquam error est libero! Sapiente excepturi tempore assumenda quam ratione hic nisi, cumque quibusdam aperiam? Quisquam itaque voluptatibus quibusdam laudantium. Cum asperiores sint, consectetur enim minus quo odio, neque quam nihil, voluptatem quas a laboriosam excepturi. Dolorum maiores, sed doloremque eius natus aut quam doloribus aspernatur eligendi dolore magnam accusamus fugiat similique fuga sint quaerat? Sint error possimus esse necessitatibus ipsam animi itaque in ex quis, voluptas, rem laudantium, dolorum facere quo obcaecati recusandae veritatis laboriosam saepe. Suscipit laboriosam eaque, architecto culpa repudiandae commodi corrupti aliquid laudantium necessitatibus.',
            'slug' => 'post-1',
            'category_id' => 1,
            'image_posts' => '1.jpg',
        ]);
        Posts::create([
            'title' => 'Post 2',
            'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia ut reprehenderit quisquam error est libero! Sapiente excepturi tempore assumenda quam ratione hic nisi, cumque quibusdam aperiam? Quisquam itaque voluptatibus quibusdam laudantium. Cum asperiores sint, consectetur enim minus quo odio, neque quam nihil, voluptatem quas a laboriosam excepturi. Dolorum maiores, sed doloremque eius natus aut quam doloribus aspernatur eligendi dolore magnam accusamus fugiat similique fuga sint quaerat? Sint error possimus esse necessitatibus ipsam animi itaque in ex quis, voluptas, rem laudantium, dolorum facere quo obcaecati recusandae veritatis laboriosam saepe. Suscipit laboriosam eaque, architecto culpa repudiandae commodi corrupti aliquid laudantium necessitatibus.',
            'slug' => 'post-2',
            'category_id' => 2,
            'image_posts' => '2.jpg',
        ]);
        Posts::create([
            'title' => 'Post 3',
            'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia ut reprehenderit quisquam error est libero! Sapiente excepturi tempore assumenda quam ratione hic nisi, cumque quibusdam aperiam? Quisquam itaque voluptatibus quibusdam laudantium. Cum asperiores sint, consectetur enim minus quo odio, neque quam nihil, voluptatem quas a laboriosam excepturi. Dolorum maiores, sed doloremque eius natus aut quam doloribus aspernatur eligendi dolore magnam accusamus fugiat similique fuga sint quaerat? Sint error possimus esse necessitatibus ipsam animi itaque in ex quis, voluptas, rem laudantium, dolorum facere quo obcaecati recusandae veritatis laboriosam saepe. Suscipit laboriosam eaque, architecto culpa repudiandae commodi corrupti aliquid laudantium necessitatibus.',
            'slug' => 'post-3',
            'category_id' => 3,
            'image_posts' => '3.jpg',
        ]);
        Posts::create([
            'title' => 'Post 4',
            'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia ut reprehenderit quisquam error est libero! Sapiente excepturi tempore assumenda quam ratione hic nisi, cumque quibusdam aperiam? Quisquam itaque voluptatibus quibusdam laudantium. Cum asperiores sint, consectetur enim minus quo odio, neque quam nihil, voluptatem quas a laboriosam excepturi. Dolorum maiores, sed doloremque eius natus aut quam doloribus aspernatur eligendi dolore magnam accusamus fugiat similique fuga sint quaerat? Sint error possimus esse necessitatibus ipsam animi itaque in ex quis, voluptas, rem laudantium, dolorum facere quo obcaecati recusandae veritatis laboriosam saepe. Suscipit laboriosam eaque, architecto culpa repudiandae commodi corrupti aliquid laudantium necessitatibus.',
            'slug' => 'post-4',
            'category_id' => 4,
            'image_posts' => '4.jpg',
        ]);
        Posts::create([
            'title' => 'Post 2',
            'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia ut reprehenderit quisquam error est libero! Sapiente excepturi tempore assumenda quam ratione hic nisi, cumque quibusdam aperiam? Quisquam itaque voluptatibus quibusdam laudantium. Cum asperiores sint, consectetur enim minus quo odio, neque quam nihil, voluptatem quas a laboriosam excepturi. Dolorum maiores, sed doloremque eius natus aut quam doloribus aspernatur eligendi dolore magnam accusamus fugiat similique fuga sint quaerat? Sint error possimus esse necessitatibus ipsam animi itaque in ex quis, voluptas, rem laudantium, dolorum facere quo obcaecati recusandae veritatis laboriosam saepe. Suscipit laboriosam eaque, architecto culpa repudiandae commodi corrupti aliquid laudantium necessitatibus.',
            'slug' => 'post-5',
            'category_id' => 1,
            'image_posts' => '5.jpg',
        ]);
        Posts::create([
            'title' => 'Post 6',
            'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia ut reprehenderit quisquam error est libero! Sapiente excepturi tempore assumenda quam ratione hic nisi, cumque quibusdam aperiam? Quisquam itaque voluptatibus quibusdam laudantium. Cum asperiores sint, consectetur enim minus quo odio, neque quam nihil, voluptatem quas a laboriosam excepturi. Dolorum maiores, sed doloremque eius natus aut quam doloribus aspernatur eligendi dolore magnam accusamus fugiat similique fuga sint quaerat? Sint error possimus esse necessitatibus ipsam animi itaque in ex quis, voluptas, rem laudantium, dolorum facere quo obcaecati recusandae veritatis laboriosam saepe. Suscipit laboriosam eaque, architecto culpa repudiandae commodi corrupti aliquid laudantium necessitatibus.',
            'slug' => 'post-6',
            'category_id' => 2,
            'image_posts' => '6.jpg',
        ]);
    }
}
