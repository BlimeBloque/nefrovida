<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nota;
use App\Http\Resources\NotaCollection;
use App\Http\Resources\Nota as NotaResource;
use Illuminate\Support\Facades\DB;

class NotaController extends Controller
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
            'idTipoNota' => 'required|numeric',
            'comentario' => 'required',
        ]);

        $nota = Nota::create($request->all());

        return (new NotaResource($nota))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($idNota)
    {
        /*return DB::table('consulta_nutricional')->leftJoin('beneficiarios', 'consulta_nutricional.idBeneficiario', '=', 'beneficiarios.idBeneficiario') 
            -> where('idConsultaNutricional', '=', $idConsultaNutricional) 
            -> select('consulta_nutricional.*', 'beneficiarios.nombreBeneficiario', 'beneficiarios.edad', 'beneficiarios.sexo') -> get();*/
    }

    public function searchByBenef($idBeneficiario)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
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
