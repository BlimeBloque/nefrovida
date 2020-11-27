<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Preguntas as PreguntasResource;
use App\Http\Resources\PreguntasCollection;
use App\Models\Preguntas;
use Illuminate\Support\Facades\DB;

class PreguntasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {

        return new PreguntasCollection(Preguntas::all());
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        return DB::table('preguntas')->where('idPregunta', '=', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $request->validate([
            "pregunta" => "required"
        ]);


        $pregunta = Preguntas::find($request->input('idPregunta'));
        $pregunta->Pregunta = $request->input('pregunta');
        $pregunta->save();

    }
}