<?php

namespace App\Http\Controllers;

use App\Models\DepuracionCreatinina;
use Illuminate\Http\Request;
use App\Http\Resources\DepuracionCreatininaCollection;
use App\Http\Resources\DepuracionCreatinina as DepuracionCreatininaResource;
use Illuminate\Support\Facades\DB;

class DepuracionCreatininaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'idBeneficiario' => 'required|numeric',
            'talla' => 'numeric|nullable',
            'peso' => 'numeric|nullable',
            'volumen' => 'numeric|nullable',
            'superficieCorporal' => 'numeric|nullable',
            'creatininaEnSuero' => 'numeric|nullable',
            'valorCreatininaBajoMujer' => 'numeric|nullable',
            'valorCreatininaAltoMujer' => 'numeric|nullable',
            'valorCreatininaBajoHombre' => 'numeric|nullable',
            'valorCreatininaAltoHombre' => 'numeric|nullable',
            'depuracionCreatinina' => 'numeric|nullable',
            'valorDepuracionBajoMujer' => 'numeric|nullable',
            'valorDepuracionAltoMujer' => 'numeric|nullable',
            'valorDepuracionBajoHombre' => 'numeric|nullable',
            'valorDepuracionAltoHombre' => 'numeric|nullable',
            'nota' => 'nullable',
            'metodo' => 'max:255|nullable',
        ]);

        $depuracionCreatinina = DepuracionCreatinina::create($request->all());

        return (new DepuracionCreatininaResource($depuracionCreatinina))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DepuracionCreatinina  $depuracionCreatinina
     * @return \Illuminate\Http\Response
     */
    public function show(DepuracionCreatinina $depuracionCreatinina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DepuracionCreatinina  $depuracionCreatinina
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DepuracionCreatinina $depuracionCreatinina)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DepuracionCreatinina  $depuracionCreatinina
     * @return \Illuminate\Http\Response
     */
    public function destroy(DepuracionCreatinina $depuracionCreatinina)
    {
        //
    }
}
