<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Respuestas extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'idOpcionFormulario' => $this->idOpcionFormulario,
            'idBeneficiario' => $this->idBeneficiario,
            'textoRespuesta' => $this->textoRespuesta,
            'respuesta' => $this->respuesta,
            'ponderacion' => $this->ponderacion,
            'grupo' => $this->grupo
        ];
    }
}