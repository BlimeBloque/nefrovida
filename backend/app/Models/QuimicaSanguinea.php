<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuimicaSanguinea extends Model
{
    protected $table = "quimica_sanguinea";
    protected $primaryKey = "idQuimicaSanguinea";

    protected $fillable = [
        'idBeneficiario',
        'glucosa',
        'valorGlucosaBajo',
        'valorGlucosaAlto',
        'urea',
        'valorUreaBajo',
        'valorUreaAlto',
        'bun',
        'valorBunBajo',
        'valorBunAlto',
        'creatinina',
        'creatininaMujerBajo',
        'creatininaMujerAlto',
        'creatininaHombreBajo',
        'creatininaHombreAlto',
        'nota',
        'metodo',
    ];
}
