<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name' => 'PHP',
            'slug' => 'php'
        ]);
        Category::create([
            'name' => 'Laravel',
            'slug' => 'laravel'
        ]);
        Category::create([
            'name' => 'Lumen',
            'slug' => 'lumen'
        ]);
        Category::create([
            'name' => 'Docker',
            'slug' => 'docker'
        ]);
    }
}
