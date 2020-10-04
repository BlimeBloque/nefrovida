<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/*
class Escolaridades extends Model {
    protected $fillable = [
        'id',
        'nombre',
    ];
}
*/


class Escolaridad extends JsonResource
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
            'id' => $this->idEscolaridad,
            'nombre' => $this->nombreEscolaridad,
        ];
    }
}
