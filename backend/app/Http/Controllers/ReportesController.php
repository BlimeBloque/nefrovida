<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ReportesController extends Controller
{
    public function getEdadesTotales()
    {
      $edades =  DB::table('beneficiarios') -> select('fechaNacimiento') -> get();
      $years = array();
 
    foreach($edades as $edad) {
        $year= Carbon::parse($edad->fechaNacimiento)->age;
        array_push($years, $year);
    }
        return $years;
    }

    //Traer las edades de beneficiarios de una jornada en especifico
    public function getEdadesJornada($idJornada)
    {
        return DB::table('beneficiarios') -> where('idJornada' , '=', $idJornada) -> select('fechaNacimiento') -> get();
    }

    //Contar el numero de hombres y mujeres en total
    public function countBySex()
    {
        $hombres =  DB::table('beneficiarios')->where('sexo', '=', 'H')->count();
        $mujeres =  DB::table('beneficiarios')->where('sexo', '=', 'M')->count();
        return [$hombres, $mujeres];
    }

    //Contar el numero de hombres y mujeres en una jornada en específico
    public function countBySexAndJourney($idJornada)
    {
        $hombres =  DB::table('beneficiarios')->where('idJornada', '=', $idJornada)->where('sexo', '=', 'H')->count();
        $mujeres =  DB::table('beneficiarios')->where('idJornada', '=', $idJornada)->where('sexo', '=', 'M')->count();
        return [$hombres, $mujeres];
    }

    public function countPruebas()
    {
        $orina =  DB::table('examen_orina')->count();
        $quimica =  DB::table('quimica_sanguinea')->count();
        $micro =  DB::table('microalbuminuria')->count();
        $depuracion =  DB::table('depuracion_creatinina')->count();
        return [$orina, $quimica, $micro, $depuracion];
    }

    public function countTamizajes()
    {
        $tamizajes = DB::table('beneficiarios')->count();
        return $tamizajes;
    }

    public function conutBenefSinAnalisis()
    {
       
    }
  
}
