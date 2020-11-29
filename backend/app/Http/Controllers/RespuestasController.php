<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Respuestas;
use App\Http\Resources\Respuestas as RespuestasResource;

class RespuestasController extends Controller
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
            'idOpcionFormulario' => 'required',
            'idBeneficiario' => 'required',
            'textoRespuesta' => 'nullable',
            'respuesta' => 'required'
        ]);

        $rows = DB::table('respuestas AS r')
                        ->where('r.idBeneficiario', '=', $request->input('idBeneficiario'))
                        ->orderBy('r.idRespuesta', 'desc')
                        ->limit(1)->get();
 
        
        if(strcmp(($request -> input('respuesta')), 'Sí') == 0){
            switch($request -> input('idOpcionFormulario')){
                case 5: case 7: case 8: case 9: case 10: case 12:
                    $numPond = 2;
                break;
                default:
                    $numPond = 3;
                break;
            }
        } else if(strcmp(($request -> input('respuesta')), 'No') == 0){
            $numPond = 0;
        } else {
            $numPond = 1;
        }

        $respuesta = array_merge($request->all(), ['ponderacion' => $numPond]);

        
            

            if(isset($rows[0]->grupo)) {
                if(($rows[0]->idRespuesta) % 12 == 0) {
                    $numGrupo = $rows[0]->grupo +1;
                }
                else {
                    $numGrupo = $rows[0]->grupo;
                }
            }
            else {
                $numGrupo = 1;
            }
    
            $respuesta = Respuestas::create(array_merge($respuesta, ['grupo' => $numGrupo]));
            return (new RespuestasResource($respuesta))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($idBeneficiario)
    {
        return DB::table('respuestas AS r')
                ->leftJoin('opcion_formulario AS of', 'r.idOpcionFormulario', '=', 'of.idOpcionFormulario')
                ->leftJoin('formularios AS f', 'of.idFormulario', '=', 'f.idFormulario')
                ->where('r.idBeneficiario', '=', $idBeneficiario)
                ->where('of.idFormulario', '=', 1)
                ->groupBy('r.grupo', 'f.nombre', 'r.created_at')
                ->select('r.grupo', 'f.nombre', 'r.created_at')
                ->limit(1)
                ->get();
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
        $request->validate([
            'textoRespuesta' => 'nullable',
            'respuesta' => 'required',
            'idRespuesta' => 'required'
        ]);

        $formulario = Respuestas::find($request->input('idRespuesta'));

        $formulario->respuesta = $request->input('respuesta');
        $formulario->textoRespuesta = $request->input('textoRespuesta');

        if(strcmp(($request -> input('respuesta')), 'Sí') == 0){
            switch($request -> input('idOpcionFormulario')){
                case 5: case 7: case 8: case 9: case 10: case 12:
                    $numPond = 2;
                break;
                default:
                    $numPond = 3;
                break;
            }
        } else if(strcmp(($request -> input('respuesta')), 'No') == 0){
            $numPond = 0;
        } else {
            $numPond = 1;
        }

        $formulario->ponderacion = $numPond;

        $formulario->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($idBeneficiario)
    {
        return DB::table('respuestas')
            ->where('idBeneficiario','=',$idBeneficiario)
            ->delete();
    }

    public function searchByBenef($idBeneficiario) {
        return DB::table('respuestas AS r')
                ->leftJoin('opcion_formulario AS of', 'r.idOpcionFormulario', '=', 'of.idOpcionFormulario')
                ->leftJoin('formularios AS f', 'of.idFormulario', '=', 'f.idFormulario')
                ->where('r.idBeneficiario', '=', $idBeneficiario)
                ->where('of.idFormulario', '=', 1)
                ->groupBy('r.grupo', 'f.nombre')
                ->select('f.nombre', 'r.grupo')
                ->get();
    }

    public function detalle($idBeneficiario) {
        return DB::table('respuestas AS r')
            ->join('opcion_formulario AS of', 'r.idOpcionFormulario' , '=', 'of.idOpcionFormulario')
            ->join('preguntas AS p', 'of.idPregunta' , '=', 'p.idPregunta')
            ->join('formularios AS f', 'of.idFormulario' , '=', 'f.idFormulario')
            ->join('beneficiarios AS b', 'r.idBeneficiario' , '=', 'b.idBeneficiario')
            ->where('b.idBeneficiario', '=', $idBeneficiario)
            ->where('f.idFormulario', '=', 1)
            ->select('f.idFormulario', 'of.idOpcionFormulario', 'p.pregunta', 'r.respuesta', 'f.nombre', 'r.idRespuesta', 'r.ponderacion')
            ->get();
    }
}