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
        'relacion',
        'valorRelacionNormalBajo',
        'valorRelacionNormalAlto',
        'valorRelacionAnormalBajo',
        'valorRelacionAnormalAlto',
        'valorRelacionAnormalAltoBajo',
        'valorRelacionAnormalAltoAlto',
        'nota',
        'metodo',
    ];
}
