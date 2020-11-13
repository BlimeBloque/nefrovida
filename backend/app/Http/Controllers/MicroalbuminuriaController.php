<?php

namespace App\Http\Controllers;

use App\Models\Microalbuminuria;
use Illuminate\Http\Request;
use App\Http\Resources\MicroalbuminuriaCollection;
use App\Http\Resources\Microalbuminuria as MicroalbuminuriaResource;
use Illuminate\Support\Facades\DB;

class MicroalbuminuriaController extends Controller
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
            'microAlbumina' => 'numeric|nullable',
            'valorMicroAlbuminaBajo' => 'numeric|nullable',
            'valorMicroAlbuminaAlto' => 'numeric|nullable',
            'creatinina' => 'numeric|nullable',
            'valorCreatininaBajo' => 'numeric|nullable',
            'valorCreatininaAlto' => 'numeric|nullable',
            'relacion' => 'numeric|nullable',
            'valorRelacionNormalBajo' => 'numeric|nullable',
            'valorRelacionNormalAlto' => 'numeric|nullable',
            'valorRelacionAnormalBajo' => 'numeric|nullable',
            'valorRelacionAnormalAlto' => 'numeric|nullable',
            'valorRelacionAnormalAltoBajo' => 'numeric|nullable',
            'valorRelacionAnormalAltoAlto' => 'numeric|nullable',
            'nota' => 'nullable',
            'metodo' => 'max:255|nullable',
        ]);

        $microalbuminuria = Microalbuminuria::create($request->all());

        return (new MicroalbuminuriaResource($microalbuminuria))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Microalbuminuria  $microalbuminuria
     * @return \Illuminate\Http\Response
     */
    public function show($idMicroalbuminuria)
    {
        return DB::table('microalbuminuria')->leftJoin('beneficiarios', 'microalbuminuria.idBeneficiario', '=', 'beneficiarios.idBeneficiario') 
            -> where('idMicroalbuminuria', '=', $idMicroalbuminuria) 
            -> select('microalbuminuria.*', 'beneficiarios.nombreBeneficiario', 'beneficiarios.sexo') -> get();
    }

    public function searchByBenef($idBeneficiario)
    {
        return DB::table('microalbuminuria')->where('idBeneficiario', '=', $idBeneficiario)
        ->select('idBeneficiario', 'idMicroalbuminuria', 'created_at', DB::raw('"microalbuminuría" as analisis'))
        ->latest()->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Microalbuminuria  $microalbuminuria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Microalbuminuria $microalbuminuria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Microalbuminuria  $microalbuminuria
     * @return \Illuminate\Http\Response
     */
    public function destroy(Microalbuminuria $microalbuminuria)
    {
        //
    }
}
