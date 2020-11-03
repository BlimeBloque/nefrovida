<?php

namespace App\Http\Controllers;

use App\Models\ExamenOrina;
use Illuminate\Http\Request;
use App\Http\Resources\ExamenOrinaCollection;
use App\Http\Resources\ExamenOrina as ExamenOrinaResource;
use Illuminate\Support\Facades\DB;

class ExamenOrinaController extends Controller
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
            'color' => 'max:255|nullable',
            'aspecto' => 'max:255|nullable',
            'ph' => 'numeric|nullable',
            'densidad' => 'numeric|nullable',
            'nitritos' => 'max:255|nullable',
            'glucosa' => 'max:255|nullable',
            'proteinas' => 'max:255|nullable',
            'hemoglobina' => 'max:255|nullable',
            'cuerposCetonicos' => 'max:255|nullable',
            'bilirribuna' => 'max:255|nullable',
            'urobilinogeno' => 'max:255|nullable',
            'leucocitos' => 'max:255|nullable',
            'eritrocitosIntactos' => 'max:255|nullable',
            'eritrocitosCrenados' => 'max:255|nullable',
            'observacionLeucocitos' => 'max:255|nullable',
            'cristales' => 'max:255|nullable',
            'cilindros' => 'max:255|nullable',
            'celulasEpiteliales' => 'max:255|nullable',
            'bacterias' => 'max:255|nullable',
            'nota' => 'nullable',
            'metodo' => 'max:255|nullable',
        ]);

        $examenOrina = ExamenOrina::create($request->all());

        return (new ExamenOrinaResource($examenOrina))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ExamenOrina  $examenOrina
     * @return \Illuminate\Http\Response
     */
    public function show($idExamenOrina)
    {
        return DB::table('examen_orina')->leftJoin('beneficiarios', 'examen_orina.idBeneficiario', '=', 'beneficiarios.idBeneficiario') 
            -> where('idExamenOrina', '=', $idExamenOrina) 
            -> select('examen_orina.*', 'beneficiarios.nombreBeneficiario') -> get();
    } 

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('examen_orina')->where('idBeneficiario', '=', $idBeneficiario)
        ->select('idBeneficiario', 'idExamenOrina', 'created_at', DB::raw('"examen de orina" as analisis'))->latest()->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ExamenOrina  $examenOrina
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ExamenOrina $examenOrina)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ExamenOrina  $examenOrina
     * @return \Illuminate\Http\Response
     */
    public function destroy(ExamenOrina $examenOrina)
    {
        //
    }
}
