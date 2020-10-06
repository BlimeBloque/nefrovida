<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
/*
protected $fillable = [
        'nombreBeneficiario',
        'edad',
        'idEscolaridad',
        'sexo',
        'telefono',
        'direccion',
        'activo',
        'fechaNacimiento',
    ];
*/

class Beneficiario extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            'idBeneficiario' => $this->idBeneficiario,
            'nombreBeneficiario' => $this->nombre,
            'edad' => $this->edad,
            'idEscolaridad' => (int) $this->idEscolaridad,
            'sexo' => $this->sexo,
            'telefono' => $this->telefono,
            'direccion' => $this->direccion,
            'activo' => $this->activo,
            'fechaNacimiento' => $this->fechaNacimiento,
        ];
    }
}
