<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ConsultaMedica;
use App\Http\Resources\ConsultaMedicaCollection;
use App\Http\Resources\ConsultaMedica as ConsultaMedicaResource;
use Illuminate\Support\Facades\DB;

class ConsultaMedicaController extends Controller
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
            'padecimientoActual' => 'max:255|nullable',
            'taDerecho' => 'max:255|nullable',
            'taIzquierdo' => 'max:255|nullable',
            'frecuenciaCardiaca' => 'numeric|nullable',
            'frecuenciaRespiratoria' => 'numeric|nullable',
            'temperatura' => 'numeric|nullable',
            'peso' => 'numeric|nullable',
            'talla' => 'numeric|nullable',
            'cabezaCuello' => 'max:255|nullable',
            'torax' => 'max:255|nullable',
            'abdomen' => 'max:255|nullable',
            'extremidades' => 'max:255|nullable',
            'neurologicoEstadoMental' => 'max:255|nullable',
            'otros' => 'max:255|nullable',
            'diagnosticos' => 'max:255|nullable',
            'planDeTratamiento' => 'max:255|nullable',
        ]);

        $consultaMedica = ConsultaMedica::create($request->all());

        return (new ConsultaMedicaResource($consultaMedica))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($idConsultaMedica)
    {
        return DB::table('consulta_medica')->leftJoin('beneficiarios', 'consulta_medica.idBeneficiario', '=', 'beneficiarios.idBeneficiario') 
            -> where('idConsultaMedica', '=', $idConsultaMedica) 
            -> select('consulta_medica.*', 'beneficiarios.nombreBeneficiario', 'beneficiarios.fechaNacimiento', 'beneficiarios.sexo') -> get();
    }

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('consulta_medica')->where('idBeneficiario', '=', $idBeneficiario)->select('idBeneficiario', 'idConsultaMedica', 'created_at')
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
    public function update(Request $request, $idConsultaMedica)
    {
        $request->validate([
            'idBeneficiario' => 'required|numeric',
            'padecimientoActual' => 'max:255|nullable',
            'taDerecho' => 'max:255|nullable',
            'taIzquierdo' => 'max:255|nullable',
            'frecuenciaCardiaca' => 'numeric|nullable',
            'frecuenciaRespiratoria' => 'numeric|nullable',
            'temperatura' => 'numeric|nullable',
            'peso' => 'numeric|nullable',
            'talla' => 'numeric|nullable',
            'cabezaCuello' => 'max:255|nullable',
            'torax' => 'max:255|nullable',
            'abdomen' => 'max:255|nullable',
            'extremidades' => 'max:255|nullable',
            'neurologicoEstadoMental' => 'max:255|nullable',
            'otros' => 'max:255|nullable',
            'diagnosticos' => 'max:255|nullable',
            'planDeTratamiento' => 'max:255|nullable',
        ]);

        $consultaMedica = ConsultaMedica::find($idConsultaMedica);
        
        $consultaMedica->idBeneficiario = $request->input('idBeneficiario');
        $consultaMedica->padecimientoActual = $request->input('padecimientoActual');
        $consultaMedica->taDerecho = $request->input('taDerecho');
        $consultaMedica->taIzquierdo = $request->input('taIzquierdo');
        $consultaMedica->frecuenciaCardiaca = $request->input('frecuenciaCardiaca');
        $consultaMedica->frecuenciaRespiratoria = $request->input('frecuenciaRespiratoria');
        $consultaMedica->temperatura = $request->input('temperatura');
        $consultaMedica->peso = $request->input('peso');
        $consultaMedica->talla = $request->input('talla');
        $consultaMedica->cabezaCuello = $request->input('cabezaCuello');
        $consultaMedica->torax = $request->input('torax');
        $consultaMedica->abdomen = $request->input('abdomen');
        $consultaMedica->extremidades = $request->input('extremidades');
        $consultaMedica->neurologicoEstadoMental = $request->input('neurologicoEstadoMental');
        $consultaMedica->otros = $request->input('otros');
        $consultaMedica->diagnosticos = $request->input('diagnosticos');
        $consultaMedica->planDeTratamiento = $request->input('planDeTratamiento');

        $consultaMedica->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($idConsultaMedica)
    {
        ConsultaMedica::destroy($idConsultaMedica);
    }
}