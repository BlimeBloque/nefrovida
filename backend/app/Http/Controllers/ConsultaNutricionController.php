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
            -> select('consulta_nutricional.*', 'beneficiarios.nombreBeneficiario', 'beneficiarios.fechaNacimiento', 'beneficiarios.sexo') -> get();
    }

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('consulta_nutricional')->where('idBeneficiario', '=', $idBeneficiario)->select('idBeneficiario', 'idConsultaNutricional', 'created_at')
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $idConsultaNutricional)
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

        $consultaNutricional = ConsultaNutricional::find($idConsultaNutricional);
        
        $consultaNutricional->idBeneficiario = $request->input('idBeneficiario');
        $consultaNutricional->ocupacion = $request->input('ocupacion');
        $consultaNutricional->horariosComida = $request->input('horariosComida');
        $consultaNutricional->cantidadDestinadaAlimentos = $request->input('cantidadDestinadaAlimentos');
        $consultaNutricional->apetito = $request->input('apetito');
        $consultaNutricional->distension = $request->input('distension');
        $consultaNutricional->estreñimiento = $request->input('estreñimiento');
        $consultaNutricional->flatulencias = $request->input('flatulencias');
        $consultaNutricional->vomitos = $request->input('vomitos');
        $consultaNutricional->caries = $request->input('caries');
        $consultaNutricional->edema = $request->input('edema');
        $consultaNutricional->mareo = $request->input('mareo');
        $consultaNutricional->zumbido = $request->input('zumbido');
        $consultaNutricional->cefaleas = $request->input('cefaleas');
        $consultaNutricional->disnea = $request->input('disnea');
        $consultaNutricional->poliuria = $request->input('poliuria');
        $consultaNutricional->actividadFisica = $request->input('actividadFisica');
        $consultaNutricional->horasSueño = $request->input('horasSueño');
        $consultaNutricional->comidasAlDia = $request->input('comidasAlDia');
        $consultaNutricional->lugarComida = $request->input('lugarComida');
        $consultaNutricional->preparaComida = $request->input('preparaComida');
        $consultaNutricional->comeEntreComidas = $request->input('comeEntreComidas');
        $consultaNutricional->alimentosPreferidos = $request->input('alimentosPreferidos');
        $consultaNutricional->alimentosOdiados = $request->input('alimentosOdiados');
        $consultaNutricional->suplementos = $request->input('suplementos');
        $consultaNutricional->medicamentosActuales = $request->input('medicamentosActuales');
        $consultaNutricional->consumoAguaNatural = $request->input('consumoAguaNatural');
        $consultaNutricional->recordatorioDesayuno = $request->input('recordatorioDesayuno');
        $consultaNutricional->recordatorioColacionMañana = $request->input('recordatorioColacionMañana');
        $consultaNutricional->recordatorioComida = $request->input('recordatorioComida');
        $consultaNutricional->recordatorioColacionTarde = $request->input('recordatorioColacionTarde');
        $consultaNutricional->recordatorioCena = $request->input('recordatorioCena');
        $consultaNutricional->peso = $request->input('peso');
        $consultaNutricional->altura = $request->input('altura');
        $consultaNutricional->tipoDieta = $request->input('tipoDieta');
        $consultaNutricional->kilocaloriasTotales = $request->input('kilocaloriasTotales');
        $consultaNutricional->porcentajeHidratosCarbono = $request->input('porcentajeHidratosCarbono');
        $consultaNutricional->kilocaloriasHidratosCarbono = $request->input('kilocaloriasHidratosCarbono');
        $consultaNutricional->porcentajeProteinas = $request->input('porcentajeProteinas');
        $consultaNutricional->porcentajeGrasas = $request->input('porcentajeGrasas');
        $consultaNutricional->diagnostico = $request->input('diagnostico');

        $consultaNutricional->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($idConsultaNutricional)
    {
        ConsultaNutricional::destroy($idConsultaNutricional);
    }
}
