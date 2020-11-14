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
            'glucosa' => 'nullable|numeric',
            'valorGlucosaBajo' => 'nullable|numeric',
            'valorGlucosaAlto' => 'nullable|numeric',
            'urea' => 'nullable|numeric',
            'valorUreaBajo' => 'nullable|numeric',
            'valorUreaAlto' => 'nullable|numeric',
            'bun' => 'nullable|numeric',
            'valorBunBajo' => 'nullable|numeric',
            'valorBunAlto' => 'nullable|numeric',
            'creatinina' => 'nullable|numeric',
            'creatininaMujerBajo' => 'nullable|numeric',
            'creatininaMujerAlto' => 'nullable|numeric',
            'creatininaHombreBajo' => 'nullable|numeric',
            'creatininaHombreAlto' => 'nullable|numeric',
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
            -> select('quimica_sanguinea.*', 'beneficiarios.nombreBeneficiario', 'beneficiarios.sexo') -> get();
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
    public function update(Request $request, $idQuimicaSanguinea)
    {
        $request->validate([
            'idBeneficiario' => 'required|numeric',
            'glucosa' => 'nullable|numeric',
            'valorGlucosaBajo' => 'nullable|numeric',
            'valorGlucosaAlto' => 'nullable|numeric',
            'urea' => 'nullable|numeric',
            'valorUreaBajo' => 'nullable|numeric',
            'valorUreaAlto' => 'nullable|numeric',
            'bun' => 'nullable|numeric',
            'valorBunBajo' => 'nullable|numeric',
            'valorBunAlto' => 'nullable|numeric',
            'creatinina' => 'nullable|numeric',
            'creatininaMujerBajo' => 'nullable|numeric',
            'creatininaMujerAlto' => 'nullable|numeric',
            'creatininaHombreBajo' => 'nullable|numeric',
            'creatininaHombreAlto' => 'nullable|numeric',
            'nota' => 'max:400|nullable',
            'metodo' => 'max:255|nullable',
        ]);

        $quimicaSanguinea = QuimicaSanguinea::find($idQuimicaSanguinea);

        $quimicaSanguinea->idBeneficiario = $request->input("idBeneficiario");
        $quimicaSanguinea->glucosa = $request->input("glucosa");
        $quimicaSanguinea->valorGlucosaBajo = $request->input("valorGlucosaBajo");
        $quimicaSanguinea->valorGlucosaAlto = $request->input("valorGlucosaAlto");
        $quimicaSanguinea->urea = $request->input("urea");
        $quimicaSanguinea->valorUreaBajo = $request->input("valorUreaBajo");
        $quimicaSanguinea->valorUreaAlto = $request->input("valorUreaAlto");
        $quimicaSanguinea->bun = $request->input("bun");
        $quimicaSanguinea->valorBunBajo = $request->input("valorBunBajo");
        $quimicaSanguinea->valorBunAlto = $request->input("valorBunAlto");
        $quimicaSanguinea->creatinina = $request->input("creatinina");
        $quimicaSanguinea->creatininaMujerBajo = $request->input("creatininaMujerBajo");
        $quimicaSanguinea->creatininaMujerAlto = $request->input("creatininaMujerAlto");
        $quimicaSanguinea->creatininaHombreBajo = $request->input("creatininaHombreBajo");
        $quimicaSanguinea->creatininaHombreAlto = $request->input("creatininaHombreAlto");
        $quimicaSanguinea->nota = $request->input("nota");
        $quimicaSanguinea->metodo = $request->input("metodo");

        $quimicaSanguinea->save();
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
