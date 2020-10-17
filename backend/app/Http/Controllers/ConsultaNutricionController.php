<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ConsultaNutricional;
use App\Http\Resources\ConsultaNutricionalCollection;
use App\Http\Resources\ConsultaNutricional as ConsultaNutricionalResource;
use Illuminate\Support\Facades\DB;

class ConsultaNutricionController extends Controller
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
            'ocupacion' => 'max:255|nullable',
            'horariosComida' => 'max:255|nullable',
            'cantidadDestinadaAlimentos' => 'max:255|nullable',
            'apetito' => 'max:255|nullable',
            'distension' => 'max:255|nullable',
            'estreñimiento' => 'max:255|nullable',
            'flatulencias' => 'max:255|nullable',
            'vomitos' => 'max:255|nullable',
            'caries' => 'max:255|nullable',
            'edema' => 'max:255|nullable', 
            'mareo' => 'max:255|nullable',
            'zumbido' => 'max:255|nullable',
            'cefaleas' => 'max:255|nullable',
            'disnea' => 'max:255|nullable',
            'poliuria' => 'max:255|nullable',
            'actividadFisica' => 'max:255|nullable',
            'horasSueño' => 'max:255|nullable',
            'comidasAlDia' => 'max:255|nullable',
            'lugarComida' => 'max:255|nullable',
            'preparaComida' => 'max:255|nullable',
            'comeEntreComidas' => 'max:255|nullable',
            'alimentosPreferidos' => 'max:255|nullable',
            'alimentosOdiados' => 'max:255|nullable',
            'suplementos' => 'max:255|nullable',
            'medicamentosActuales' => 'max:255|nullable',
            'consumoAguaNatural' => 'max:255|nullable',
            'recordatorioDesayuno' => 'max:255|nullable',
            'recordatorioColacionMañana' => 'max:255|nullable',
            'recordatorioComida' => 'max:255|nullable',
            'recordatorioColacionTarde' => 'max:255|nullable',
            'recordatorioCena' => 'max:255|nullable',
            'peso' => 'numeric|nullable',
            'altura' => 'numeric|nullable',
            'tipoDieta' => 'max:255|nullable',
            'kilocaloriasTotales' => 'numeric|nullable',
            'porcentajeHidratosCarbono' => 'numeric|nullable',
            'kilocaloriasHidratosCarbono' => 'numeric|nullable',
            'porcentajeProteinas' => 'numeric|nullable',
            'porcentajeGrasas' => 'numeric|nullable',
            'diagnostico' => 'max:255|nullable',
        ]);

        $consultaNutricional = ConsultaNutricional::create($request->all());

        return (new ConsultaNutricionalResource($consultaNutricional))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($idConsultaNutricional)
    {
        return DB::table('consulta_nutricional')->leftJoin('beneficiarios', 'consulta_nutricional.idBeneficiario', '=', 'beneficiarios.idBeneficiario') 
            -> where('idConsultaNutricional', '=', $idConsultaNutricional) 
            -> select('consulta_nutricional.*', 'beneficiarios.nombreBeneficiario') -> get();
    }

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('consulta_nutricional')->where('idBeneficiario', '=', $idBeneficiario)->select('idBeneficiario', 'idConsultaNutricional', 'created_at')->get();
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
