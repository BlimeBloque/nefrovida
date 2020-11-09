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
            'casa' => 'max:255|nullable',
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
            'metodosAnticonceptivos' => 'max:255|nullable',
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
    public function update(Request $request, $idAntecedentes)
    {
        $request->validate([
            'idBeneficiario' => 'required|numeric',
            'casa' => 'max:255|nullable',
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
            'metodosAnticonceptivos' => 'max:255|nullable',
        ]);

        $antecedentes = Antecedentes::find($idAntecedentes);

        $antecedentes->idBeneficiario = $request->input('idBeneficiario');
        $antecedentes->casa = $request->input('casa');
        $antecedentes->serviciosBasicos = $request->input('serviciosBasicos');
        $antecedentes->personalesPatologicos = $request->input('personalesPatologicos');
        $antecedentes->personalesNoPatologicos = $request->input('personalesNoPatologicos');
        $antecedentes->padreVivo = $request->input('padreVivo');
        $antecedentes->enfermedadesPadre = $request->input('enfermedadesPadre');
        $antecedentes->madreVivo = $request->input('madreVivo');
        $antecedentes->enfermedadesMadre = $request->input('enfermedadesMadre');
        $antecedentes->numHermanos = $request->input('numHermanos');
        $antecedentes->numHermanosVivos = $request->input('numHermanosVivos');
        $antecedentes->enfermedadesHermanos = $request->input('enfermedadesHermanos');
        $antecedentes->otrosHermanos = $request->input('otrosHermanos');
        $antecedentes->menarquia = $request->input('menarquia');
        $antecedentes->ritmo = $request->input('ritmo');
        $antecedentes->fum = $request->input('fum');
        $antecedentes->gestaciones = $request->input('gestaciones');
        $antecedentes->partos = $request->input('partos');
        $antecedentes->abortos = $request->input('abortos');
        $antecedentes->cesareas = $request->input('cesareas');
        $antecedentes->ivsa = $request->input('ivsa');
        $antecedentes->metodosAnticonceptivos = $request->input('metodosAnticonceptivos');

        $antecedentes->save();
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