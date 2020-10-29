<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Antecedentes;
use App\Http\Resources\AntecedentesCollection;
use App\Http\Resources\Antecedentes as AntecedentesResource;
use Illuminate\Support\Facades\DB;

class AntecedentesController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
            'casa' => 'required',
            'serviciosBasicos' => 'max:255|nullable',
            'personalesPatologicos' => 'max:255|nullable',
            'personalesNoPatologicos' => 'max:255|nullable',
            'padreVivo' => 'numeric|nullable',
            'enfermedadesPadre' => 'max:255|nullable',
            'madreVivo' => 'numeric|nullable',
            'enfermedadesMadre' => 'max:255|nullable',
            'numHermanos' => 'numeric|nullable',
            'numHermanosVivos' => 'numeric|nullable',
            'enfermedadesHermanos' => 'max:255|nullable',
            'otrosHermanos' => 'max:255|nullable',
            'menarquia' => 'numeric|nullable',
            'ritmo' => 'numeric|nullable',
            'fum' => 'date|nullable',
            'gestaciones' => 'numeric|nullable',
            'partos' => 'numeric|nullable',
            'abortos' => 'numeric|nullable',
            'cesareas' => 'numeric|nullable',
            'ivsa' => 'numeric|nullable',
            'metodos anticonceptivos' => 'max:255|nullable',
        ]);

        $antecedentes = Antecedentes::create($request->all());

        return (new AntecedentesResource($antecedentes))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($idAntecedentes)
    {
        return DB::table('antecedentes')->leftJoin('beneficiarios', 'antecedentes.idBeneficiario', '=', 'beneficiarios.idBeneficiario') 
            -> where('idAntecedentes', '=', $idAntecedentes) 
            -> select('antecedentes.*', 'beneficiarios.nombreBeneficiario', 'beneficiarios.fechaNacimiento', 'beneficiarios.sexo') -> get();
    }

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('antecedentes')->where('idBeneficiario', '=', $idBeneficiario)->select('idBeneficiario', 'idAntecedentes', 'created_at')
        -> latest()->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}