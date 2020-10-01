<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
/*
protected $fillable = [
        'id',
        'nombre',
        'fecha',
        'localidad',
        'municipio',
        'idEstado'
    ];
*/

class Jornada extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'fecha' => $this->fecha,
            'localidad' => $this->localidad,
            'municipio' => $this->municipio,
            'idEstado' => (int) $this->idEstado,
        ];
    }
}
