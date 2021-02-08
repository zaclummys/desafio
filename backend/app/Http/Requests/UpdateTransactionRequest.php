<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTransactionRequest extends FormRequest {
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules () {
        return [
            'value' => ['integer', 'min:0', 'max:2147483647'],
            'document' => ['mimes:jpeg,png,pdf', 'max:5120'],
            'status' => 'in:processing,accepted,denied',
        ];
    }
}
