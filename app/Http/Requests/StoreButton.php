<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreButton extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:255',
            'link' => 'required|url',
            'color' => 'required',
            'position' => 'required|unique:buttons,position'
        ];
    }
}
