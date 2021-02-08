<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;

use App\Http\Requests\CreateTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;

use App\Repositories\TransactionRepository;

use Storage;

class TransactionController extends Controller
{
    public function __construct () {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all () {
        return auth()->user()->transactions()->orderByDesc('created_at')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create (CreateTransactionRequest $request) {
        $value = $request->value;

        $document = Storage::disk('tenant')->url(
            $request->document->store('/', [
                'disk' => 'tenant'
            ])
        );

        auth()->user()->transactions()->create([
            'value' => $value,
            'document' => $document,
            'status' => 'processing',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function view (Transaction $transaction) {
        $this->authorize('view', $transaction);

        return $transaction;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update (UpdateTransactionRequest $request, Transaction $transaction) {
        $this->authorize('update', $transaction);

        if ($request->value) {
            $transaction->value = $request->value;
        }

        if ($request->status) {
            $transaction->status = $request->status;
        }

        if ($request->document) {            
            $transaction->document = Storage::disk('public')->url(
                $request->document->store('/', [
                    'disk' => 'public'
                ])
            );
        }

        $transaction->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete (Transaction $transaction) {
        $this->authorize('delete', $transaction);

        $transaction->delete();
    }
}
