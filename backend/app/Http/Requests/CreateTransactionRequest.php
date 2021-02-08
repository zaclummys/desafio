<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTransactionRequest extends FormRequest {
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules () {
        return [
            'value' => ['required', 'integer', 'min:0', 'max:2147483647'],
            'status' => ['required', 'in:processing,accepted,denied'],
            'document' => ['required', 'mimes:jpeg,png,pdf', 'max:5120'],
        ];
    }
}
