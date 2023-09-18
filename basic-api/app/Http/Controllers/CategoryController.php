<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Support\Str;

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
    public function store(StoreCategoryRequest $request)
    {
        // $request->validated();
        try {

            $category = new Category();
            $category->name = $request->name;
            $category->slug =  $request->slug; //Str::slug($request->name);
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
    public function show($slug)
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
    public function update(UpdateCategoryRequest $request,  $slug)
    {
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
    public function destroy($slug)
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
