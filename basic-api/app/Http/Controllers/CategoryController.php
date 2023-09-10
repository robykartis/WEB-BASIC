<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category_data = Category::all();
        try {
            return response()->json([
                'satus' => true,
                'message' => 'Success',
                'data' => $category_data
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'satus' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required',
        ], [
            'name.required' => 'Name is required',
        ]);
        if ($validation->fails()) {
            return response()->json([
                'satus' => false,
                'message' => $validation->errors()->first(),
            ]);
        }
        try {

            $category = new Category();
            $category->name = $request->name;
            $category->slug =  Str::slug($request->name);
            $category->save();
            return response()->json([
                'satus' => true,
                'message' => 'Success',
                'data' => $category
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'satus' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        try {
            $category = Category::where('slug', $slug)->first();

            if ($category) {
                return response()->json([
                    'status' => true,
                    'message' => 'Success',
                    'data' => $category
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Category not found'
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $slug)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required',
        ], [
            'name.required' => 'Nama wajib diisi',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validation->errors()->first(),
            ]);
        }

        try {
            $category = Category::where('slug', $slug)->first();
            if (!$category) {
                return response()->json([
                    'status' => false,
                    'message' => 'Kategori tidak ditemukan',
                ], 404);
            }

            $category->name = $request->name;
            $category->slug = Str::slug($request->name);
            $category->save();

            return response()->json([
                'status' => true,
                'message' => 'Sukses',
                'data' => $category
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $category = Category::where('slug', $slug)->first();
        if (!$category) {
            return response()->json([
                'status' => false,
                'message' => 'Kategori tidak ditemukan',
            ], 404);
        }

        try {
            $category->delete();
            return response()->json([
                'status' => true,
                'message' => 'Sukses',
                'data' => $category
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
