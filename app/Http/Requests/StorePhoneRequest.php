<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePhoneRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|max:50',
            'discreption' => 'required|max:255',
            'oldPrice' => 'required|numeric|max:9999',
            'price' => 'required|numeric|max:9999',
            'img1' => 'required',
            'img2' => 'required',
            'img3' => 'required',
        ];
    }
}
