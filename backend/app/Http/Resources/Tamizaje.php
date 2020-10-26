<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Tamizaje extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            'idBeneficiario' => $this->idBeneficiario,
            'presionArterial' => $this->presionArterial,
            'peso' => $this->peso,
            'circunferenciaCintura' => $this->circunferenciaCintura,
            'circunferenciaCadera' => $this->circunferenciaCadera,
            'glucosaCapilar' => $this->glucosaCapilar,
            'talla' => $this->talla,
            'comentario' => $this->comentario,
        ];
    }
}
