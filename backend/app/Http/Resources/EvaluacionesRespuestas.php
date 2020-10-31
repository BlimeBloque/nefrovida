<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EvaluacionesRespuestas extends JsonResource
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
            'idOpcionEvaluacion' => $this->idOpcionEvaluacion,
            'idBeneficiario' => $this->idBeneficiario,
            'otraRespuesta' => $this->otraRespuesta,
            'respuestasPosibles' => $this->respuestasPosibles,
            'grupo' => $this->grupo
        ];
    }
}
