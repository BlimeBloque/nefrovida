<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Jornada extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            'idJornada' => $this->idJornada,
            'nombre' => $this->nombre,
            'fecha' => $this->fecha,
            'localidad' => $this->localidad,
            'municipio' => $this->municipio,
            'idEstado' => (int) $this->idEstado,
        ];
    }
}
