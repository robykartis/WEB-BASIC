<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Super Admin',
            'email' => 'au@email.com',
            'password' => Hash::make(123),
            'role' => 1
        ]);
        User::create([
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'password' => Hash::make(123),
            'role' => 2
        ]);
        User::create([
            'name' => 'Manager',
            'email' => 'manager@email.com',
            'password' => Hash::make(123),
            'role' => 3
        ]);
        User::create([
            'name' => 'User Account',
            'email' => 'user@email.com',
            'password' => Hash::make(123),
            'role' => 4
        ]);
    }
}
