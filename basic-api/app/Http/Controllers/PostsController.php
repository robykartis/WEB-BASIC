<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts_data = DB::table('posts')
            ->join('categories', 'posts.category_id', '=', 'categories.id')
            ->select('posts.*', 'categories.name as category_name')
            ->get();
        try {
            return response()->json([
                'status' => true,
                'message' => 'Success',
                'data' => [
                    'posts' => $posts_data,
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }


    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'required',
            'image_posts' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], [
            'title.required' => 'Title is required',
            'content.required' => 'Content is required',
            'category_id.required' => 'Category is required',
            'image_posts.required' => 'Image is required',
            'image_posts.image' => 'Image must be an image',
            'image_posts.mimes' => 'Image must be an image',
            'image_posts.max' => 'Image must be less than 2MB'
        ]);
        if ($validation->fails()) {
            return response()->json([
                'satus' => false,
                'message' => $validation->errors()->first(),
            ]);
        }
        try {
            $image = $request->file('image_posts');
            $file_name = rand(1000, 9999) . $image->getClientOriginalName();
            $img = Image::make($image->path());
            $img->resize('760', '760')
                ->save(public_path('assets/image/post') . '/post_' . $file_name);
            $posts = new Posts();
            $posts->title = $request->title;
            $posts->content = $request->content;
            $posts->category_id = $request->category_id;
            $posts->slug =  Str::slug($request->title);
            $posts->image_posts = $file_name;
            $posts->save();
            return response()->json([
                'satus' => true,
                'message' => 'Success',
                'data' => $posts
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
            $posts_data = DB::table('posts')
                ->join('categories', 'posts.category_id', '=', 'categories.id')
                ->select('posts.*', 'categories.name as category_name')
                ->where('posts.slug', $slug)
                ->first();

            if ($posts_data) {
                return response()->json([
                    'status' => true,
                    'message' => 'Sukses',
                    'data' => $posts_data
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Postingan dengan slug "' . $slug . '" tidak ditemukan'
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $validation = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'required',
            'image_posts' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], [
            'title.required' => 'Judul wajib diisi',
            'content.required' => 'Konten wajib diisi',
            'category_id.required' => 'Kategori wajib diisi',
            'image_posts.required' => 'Gambar wajib diisi',
            'image_posts.image' => 'Gambar harus berupa gambar',
            'image_posts.mimes' => 'Gambar harus berupa gambar',
            'image_posts.max' => 'Gambar harus kurang dari 2MB'
        ]);

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validation->errors()->first(),
            ]);
        }

        try {
            $post = Posts::where('slug', $slug)->first();
            if (!$post) {
                return response()->json([
                    'status' => false,
                    'message' => 'Postingan tidak ditemukan',
                ], 404);
            }

            if ($request->hasFile('image_posts')) {
                $post->delete_image_posts();
                $image = $request->file('image_posts');
                $file_name = rand(1000, 9999) . $image->getClientOriginalName();
                $img = Image::make($image->path());
                $img->resize(760, 760)
                    ->save(public_path('assets/image/post') . '/post_' . $file_name);
                $post->image_posts = $file_name;
            }

            $post->title = $request->title;
            $post->content = $request->content;
            $post->category_id = $request->category_id;
            $post->slug = Str::slug($request->title);
            $post->save();

            return response()->json([
                'status' => true,
                'message' => 'Sukses',
                'data' => $post
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
        try {
            $post = Posts::where('slug', $slug)->first();
            if (!$post) {
                return response()->json([
                    'status' => false,
                    'message' => 'Postingan tidak ditemukan',
                ], 404);
            }
            $post->delete_image_posts();
            $post->delete();

            return response()->json([
                'status' => true,
                'message' => 'Postingan berhasil dihapus',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
