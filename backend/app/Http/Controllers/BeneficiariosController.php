<?php

namespace App\Http\Controllers;

use App\Http\Resources\BeneficiarioCollection;
use App\Http\Resources\Beneficiario as BeneficiarioResource;
use App\Models\Beneficiarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BeneficiariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new BeneficiarioCollection(Beneficiarios::all());
        //return new BeneficiarioCollection(Beneficiarios::paginate());
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

            'nombreBeneficiario' => 'required',
            'idEscolaridad' => 'required',
            'sexo' => 'required',
            'telefono' => 'nullable',
            'direccion' => 'nullable',
            'fechaNacimiento' => 'required',
            'seguimiento' => 'required',
            'activo' => 'required',
            'idJornada' => 'required',
        ]);

        $beneficiario = Beneficiarios::create($request->all());

        return (new BeneficiarioResource($beneficiario))
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
        return DB::table('beneficiarios') -> where('idBeneficiario', '=', $idBeneficiario) -> get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($idBeneficiario)
    {
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $idBeneficiario)
    {
        $request->validate([

            'nombreBeneficiario' => 'required',
            'idEscolaridad' => 'required',
            'sexo' => 'required',
            'direccion' => 'required',
            'fechaNacimiento' => 'required',
            'telefono' => 'required',
            'seguimiento' => 'required',
            'activo' => 'required',
            'idJornada' => 'required',
        ]);

        $query = DB::table('beneficiarios')->where('idBeneficiario', $idBeneficiario)->update(['nombreBeneficiario'=> $request->get('nombreBeneficiario') , 'idEscolaridad' => $request->get('idEscolaridad') , 'telefono' => $request->get('telefono') , 'sexo' => $request->get('sexo') , 'direccion' => $request->get('direccion') , 'fechaNacimiento' => $request->get('fechaNacimiento') , 'seguimiento' => $request->get('seguimiento') ,  'activo' => $request->get('activo'), 'idJornada' => $request->get('idJornada') ]);
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
