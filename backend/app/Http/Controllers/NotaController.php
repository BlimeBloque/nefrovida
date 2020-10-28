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
            'url_archivo' => 'nullable',
        ]);

        $nota = Nota::create($request->all());

        return (new NotaResource($nota))
            ->response()
            ->setStatusCode(201);
    }

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('notas')->where('idBeneficiario', '=', $idBeneficiario)->select('idBeneficiario', 'idNota', 'created_at')
            -> latest()->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($idNota)
    {
        return DB::table('notas')->leftJoin('beneficiarios', 'notas.idBeneficiario', '=', 'beneficiarios.idBeneficiario')
                                ->leftJoin('tipo_nota', 'notas.idTipoNota', '=', 'tipo_nota.idTipoNota')
                                -> where('idNota', '=', $idNota)->get();
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
    public function update(Request $request, $idNota)
    {
        $request->validate([
            'idBeneficiario' => 'required|numeric',
            'idTipoNota' => 'required|numeric',
            'comentario' => 'required',
            'url_archivo' => 'nullable',
        ]);

        $query = DB::table('notas')->where('idNota', $idNota)->update(['idBeneficiario'=> $request->get('idBeneficiario') , 'idTipoNota' => $request->get('idTipoNota') , 'comentario' => $request->get('comentario') , 'url_archivo' => $request->get('url_archivo')]);
        return $query;
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
