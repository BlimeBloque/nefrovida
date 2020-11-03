<?php

namespace App\Http\Controllers;

use App\Models\QuimicaSanguinea;
use Illuminate\Http\Request;
use App\Http\Resources\QuimicaSanguineaCollection;
use App\Http\Resources\QuimicaSanguinea as QuimicaSanguineaResource;
use Illuminate\Support\Facades\DB;

class QuimicaSanguineaController extends Controller
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
            'glucosa' => 'required|numeric',
            'valorGlucosaBajo' => 'required|numeric',
            'valorGlucosaAlto' => 'required|numeric',
            'urea' => 'required|numeric',
            'valorUreaBajo' => 'required|numeric',
            'valorUreaAlto' => 'required|numeric',
            'bun' => 'required|numeric',
            'valorBunBajo' => 'required|numeric',
            'valorBunAlto' => 'required|numeric',
            'creatinina' => 'required|numeric',
            'creatininaMujerBajo' => 'required|numeric',
            'creatininaMujerAlto' => 'required|numeric',
            'creatininaHombreBajo' => 'required|numeric',
            'creatininaHombreAlto' => 'required|numeric',
            'nota' => 'max:400|nullable',
            'metodo' => 'max:255|nullable',
        ]);

        $quimicaSanguinea = QuimicaSanguinea::create($request->all());

        return (new QuimicaSanguineaResource($quimicaSanguinea))
            ->response()
            ->setStatusCode(201);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\QuimicaSanguinea  $quimicaSanguinea
     * @return \Illuminate\Http\Response
     */
    public function show($idQuimicaSanguinea)
    {
        return DB::table('quimica_sanguinea')->leftJoin('beneficiarios', 'quimica_sanguinea.idBeneficiario', '=', 'beneficiarios.idBeneficiario') 
            -> where('idQuimicaSanguinea', '=', $idQuimicaSanguinea) 
            -> select('quimica_sanguinea.*', 'beneficiarios.nombreBeneficiario') -> get();
    }

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('quimica_sanguinea')->where('idBeneficiario', '=', $idBeneficiario)
        ->select('idBeneficiario', 'idQuimicaSanguinea', 'created_at', DB::raw('"química sanguínea" as analisis'))
        ->latest()->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\QuimicaSanguinea  $quimicaSanguinea
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, QuimicaSanguinea $quimicaSanguinea)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\QuimicaSanguinea  $quimicaSanguinea
     * @return \Illuminate\Http\Response
     */
    public function destroy(QuimicaSanguinea $quimicaSanguinea)
    {
        //
    }
}
