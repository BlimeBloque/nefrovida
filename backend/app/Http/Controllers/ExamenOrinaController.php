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
    public function show(ExamenOrina $examenOrina)
    {
        //
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
