<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Microalbuminuria extends Model
{
    protected $table = "microalbuminuria";
    protected $primaryKey = "idMicroalbuminuria";

    protected $fillable = [
        'idBeneficiario',
        'microAlbumina',
        'valorMicroAlbuminaBajo',
        'valorMicroAlbuminaAlto',
        'creatinina',
        'valorCreatininaBajo',
        'valorCreatininaAlto',
        'valorRelacionNormalBajo',
        'valorRelacionNormalAlto',
        'valorRelacionAnormalBajo',
        'valorRelacionAnormalAlto',
        'nota',
        'metodo',
    ];
}
