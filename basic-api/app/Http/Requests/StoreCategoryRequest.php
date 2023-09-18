<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StoreCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    protected function prepareForValidation(): void
    {
        $this->merge([
            'slug' => Str::slug(request()->name),
        ]);
    }
    public function attributes()
    {
        return [
            'name' => 'Nama',
            'slug' => 'Slug',
        ];
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:categories,name',
            'slug' => 'required|unique:categories,slug',

        ];
    }
    public function messages()
    {
        return [
            'required' => ':attribute is required',
            'unique' => ':attribute is exist, please change it',
        ];
    }
}
