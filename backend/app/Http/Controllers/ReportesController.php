<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Beneficiarios;

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

    //Traer las $edades de beneficiarios de una jornada en especifico
    public function getEdadesJornada($idJornada)
    {
    $edades =  DB::table('beneficiarios') -> where('idJornada', '=', $idJornada)->select('fechaNacimiento') -> get();
      $years = array();
 
    foreach($edades as $edad) {
        $year= Carbon::parse($edad->fechaNacimiento)->age;
        array_push($years, $year);
    }
        return $years;
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
        $hombres =  DB::table('beneficiarios')->where('idJornada', '=', $idJornada)->where('$sexo', '=', 'H')->count();
        $mujeres =  DB::table('beneficiarios')->where('idJornada', '=', $idJornada)->where('$sexo', '=', 'M')->count();
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

    public function countPruebasJornada($idJornada)
    {
       $orina = DB::table('examen_orina')->leftJoin('beneficiarios', 'examen_orina.idBeneficiario','=','beneficiarios.idBeneficiario')->where('idJornada','=',$idJornada)->count();
       $quimica = DB::table('quimica_sanguinea')->leftJoin('beneficiarios', 'quimica_sanguinea.idBeneficiario','=','beneficiarios.idBeneficiario')->where('idJornada','=',$idJornada)->count();
       $micro = DB::table('microalbuminuria')->leftJoin('beneficiarios', 'microalbuminuria.idBeneficiario','=','beneficiarios.idBeneficiario')->where('idJornada','=',$idJornada)->count();
       $depuracion = DB::table('depuracion_creatinina')->leftJoin('beneficiarios', 'depuracion_creatinina.idBeneficiario','=','beneficiarios.idBeneficiario')->where('idJornada','=',$idJornada)->count();
       return [$orina, $quimica, $micro, $depuracion];
    }

    public function countTamizajes()
    {
        $tamizajes = DB::table('beneficiarios')->count();
        return $tamizajes;
    }



function obtenerIMC($altura, $peso)
{
    if($altura == null || $peso == null)
        return null;

    $altura /= 100;
    return round(($peso/($altura*$altura)), 1);
}

function calcularIMC($imc, $sexo, $edad){
    if($imc == null)
        return null;

    switch($edad)
    {
        case 10:
            if($sexo === 'H')
            {
                if($imc <= 13.7)
                {
                    return "BAJO PESO";
                }
                else if($imc > 13.7 && $imc < 18.5)
                {
                    return "NORMAL";
                }
                else if($imc >= 18.5 && $imc < 21.4)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 13.5)
                {
                    return "BAJO PESO";
                }
                else if($imc > 13.5 && $imc < 19.0)
                {
                    return "NORMAL";
                }
                else if($imc >= 19.0 && $imc < 22.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 11:
            if($sexo === 'H')
            {
                if($imc <= 14.1)
                {
                    return "BAJO PESO";
                }
                else if($imc > 14.1 && $imc < 19.2)
                {
                    return "NORMAL";
                }
                else if($imc >= 19.2 && $imc < 22.5)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 13.9)
                {
                    return "BAJO PESO";
                }
                else if($imc > 13.9 && $imc < 19.9)
                {
                    return "NORMAL";
                }
                else if($imc >= 19.9 && $imc < 23.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 12:
            if($sexo === 'H')
            {
                if($imc <= 14.5)
                {
                    return "BAJO PESO";
                }
                else if($imc > 14.5 && $imc < 19.9)
                {
                    return "NORMAL";
                }
                else if($imc >= 19.9 && $imc < 23.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 14.4)
                {
                    return "BAJO PESO";
                }
                else if($imc > 14.4 && $imc < 20.8)
                {
                    return "NORMAL";
                }
                else if($imc >= 20.8 && $imc < 25.0)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 13:
            if($sexo === 'H')
            {
                if($imc <= 14.9)
                {
                    return "BAJO PESO";
                }
                else if($imc > 14.9 && $imc < 20.8)
                {
                    return "NORMAL";
                }
                else if($imc >= 20.8 && $imc < 24.8)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 14.9)
                {
                    return "BAJO PESO";
                }
                else if($imc > 14.9 && $imc < 21.8)
                {
                    return "NORMAL";
                }
                else if($imc >= 21.8 && $imc < 26.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 14:
            if($sexo === 'H')
            {
                if($imc <= 15.5)
                {
                    return "BAJO PESO";
                }
                else if($imc > 15.5 && $imc < 21.8)
                {
                    return "NORMAL";
                }
                else if($imc >= 21.8 && $imc < 25.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 15.4)
                {
                    return "BAJO PESO";
                }
                else if($imc > 15.4 && $imc < 22.7)
                {
                    return "NORMAL";
                }
                else if($imc >= 22.7 && $imc < 27.3)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;

        case 15:
            if($sexo === 'H')
            {
                if($imc <= 16.0)
                {
                    return "BAJO PESO";
                }
                else if($imc > 16.0 && $imc < 22.7)
                {
                    return "NORMAL";
                }
                else if($imc >= 22.7 && $imc < 27.0)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 15.9)
                {
                    return "BAJO PESO";
                }
                else if($imc > 15.9 && $imc < 23.5)
                {
                    return "NORMAL";
                }
                else if($imc >= 23.5 && $imc < 28.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;

        case 16:
            if($sexo === 'H')
            {
                if($imc <= 16.5)
                {
                    return "BAJO PESO";
                }
                else if($imc > 16.5 && $imc < 23.5)
                {
                    return "NORMAL";
                }
                else if($imc >= 23.5 && $imc < 27.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 16.2)
                {
                    return "BAJO PESO";
                }
                else if($imc > 16.2 && $imc < 24.1)
                {
                    return "NORMAL";
                }
                else if($imc >= 24.1 && $imc < 28.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 17:
            if($sexo === 'H')
            {
                if($imc <= 16.9)
                {
                    return "BAJO PESO";
                }
                else if($imc > 16.9 && $imc < 24.3)
                {
                    return "NORMAL";
                }
                else if($imc >= 24.3 && $imc < 28.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 16.4)
                {
                    return "BAJO PESO";
                }
                else if($imc > 16.4 && $imc < 24.5)
                {
                    return "NORMAL";
                }
                else if($imc >= 24.5 && $imc < 29.3)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 18:
            if($sexo === 'H')
            {
                if($imc <= 17.3)
                {
                    return "BAJO PESO";
                }
                else if($imc > 17.3 && $imc < 24.9)
                {
                    return "NORMAL";
                }
                else if($imc >= 24.9 && $imc < 29.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 16.4)
                {
                    return "BAJO PESO";
                }
                else if($imc > 16.4 && $imc < 24.8)
                {
                    return "NORMAL";
                }
                else if($imc >= 24.8 && $imc < 29.5)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 19:
            if($sexo === 'H')
            {
                if($imc <= 17.6)
                {
                    return "BAJO PESO";
                }
                else if($imc > 17.6 && $imc < 25.4)
                {
                    return "NORMAL";
                }
                else if($imc >= 25.4 && $imc < 29.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if($imc <= 16.5)
                {
                    return "BAJO PESO";
                }
                else if($imc > 16.5 && $imc < 25.0)
                {
                    return "NORMAL";
                }
                else if($imc >= 25.0 && $imc < 29.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
    }
}
   
public function conutBenefSinAnalisis()
{
    $total = DB::table('beneficiarios')->pluck('idBeneficiario')->toArray();
    $orina =  DB::table('examen_orina')->groupBy('idBeneficiario')->pluck('idBeneficiario')->toArray();
    $quimica =  DB::table('quimica_sanguinea')->groupBy('idBeneficiario')->pluck('idBeneficiario')->toArray();
    $micro =  DB::table('microalbuminuria')->groupBy('idBeneficiario')->pluck('idBeneficiario')->toArray();
    $depuracion =  DB::table('depuracion_creatinina')->groupBy('idBeneficiario')->pluck('idBeneficiario')->toArray();

   $examenes = array_merge($orina, $quimica, $micro, $depuracion);

    $res = array_diff($total, $examenes);
    return [count($total),count($res)];
}

public function countIMCGeneral(){

    $imcTotales = array();
    $bajoPesoCount = 0;
    $normalCount = 0;
    $sobrepesoCount = 0;
    $obesidadCount = 0;


    $consultas = DB::table('consulta_nutricional')->select('idConsultaNutricional','idBeneficiario', 'altura', 'peso')->get();

    foreach($consultas as $consulta){

        $actual = DB::table('consulta_nutricional')->select('idConsultaNutricional', 'idBeneficiario', 'altura', 'peso')->where('idBeneficiario','=',$consulta->idBeneficiario)->latest()->get();
        //return $actual;
        $consultaReciente = $consulta->idConsultaNutricional == $actual[0]->idConsultaNutricional ? true : false;
        if($consultaReciente){
            $beneficiario = Beneficiarios::find($consulta->idBeneficiario);
            $edad = Carbon::parse($beneficiario->fechaNacimiento)->age;
            $sexo = $beneficiario->sexo;
            $imc = $this->obtenerIMC($consulta->altura, $consulta->peso);
            $res = $this->calcularIMC($imc,  $sexo, $edad);
            if(strcmp($res, 'BAJO PESO') == 0){
                $bajoPesoCount ++;
            } else if (strcmp($res, 'NORMAL') == 0){
                $normalCount++;
            } else if (strcmp($res, 'SOBREPESO') == 0){
                $sobrepesoCount++;
            } else if (strcmp($res, 'OBESIDAD')== 0){
                $obesidadCount++;
            }  
        }        
    }

    $totalCuentasIMC =  $bajoPesoCount + $normalCount + $sobrepesoCount + $obesidadCount;
    $bajoPesoPorcientaje = ($bajoPesoCount * 100) / $totalCuentasIMC;
    $normalPorcentaje = ($normalCount * 100) / $totalCuentasIMC;
    $sobrepesoPorcentaje = ($sobrepesoCount * 100) / $totalCuentasIMC;
    $obesidadPorcentaje = ($obesidadCount * 100) / $totalCuentasIMC;

    array_push($imcTotales, $bajoPesoPorcientaje);
    array_push($imcTotales, $normalPorcentaje);
    array_push($imcTotales, $sobrepesoPorcentaje);
    array_push($imcTotales, $obesidadPorcentaje);

    return ($imcTotales);
}

public function countIMCPorSexo(){

    $imcTotales = array();
    $bajoPesoCountH = 0;
    $normalCountH = 0;
    $sobrepesoCountH = 0;
    $obesidadCountH = 0;
    $bajoPesoCountM = 0;
    $normalCountM = 0;
    $sobrepesoCountM = 0;
    $obesidadCountM = 0;

    $errores = 0;


    $consultas = DB::table('consulta_nutricional')->select('idConsultaNutricional','idBeneficiario', 'altura', 'peso')->get();

    foreach($consultas as $consulta){

        $actual = DB::table('consulta_nutricional')->select('idConsultaNutricional', 'idBeneficiario', 'altura', 'peso')->where('idBeneficiario','=',$consulta->idBeneficiario)->latest()->get();
        //return $actual;
        $consultaReciente = $consulta->idConsultaNutricional == $actual[0]->idConsultaNutricional ? true : false;
        if($consultaReciente){
            $beneficiario = Beneficiarios::find($consulta->idBeneficiario);
            $edad = Carbon::parse($beneficiario->fechaNacimiento)->age;
            $sexo = $beneficiario->sexo;
            $imc = $this->obtenerIMC($consulta->altura, $consulta->peso);
            $res = $this->calcularIMC($imc,  $sexo, $edad);
            if(strcmp($res, 'BAJO PESO') == 0){
                if(strcmp($sexo, 'H')== 0){
                    $bajoPesoCountH ++;
                } else {
                    $bajoPesoCountM ++;
                }
                
            } else if (strcmp($res, 'NORMAL') == 0){
                if(strcmp($sexo, 'H') == 0){
                    $normalCountH ++;
                } else {
                    $normalCountM++;
                }
                
            } else if (strcmp($res, 'SOBREPESO') == 0){
                if(strcmp($sexo, 'H')== 0){
                    $sobrepesoCountH ++;
                } else {
                    $sobrepesoCountM ++;
                }
                
            } else if (strcmp($res, 'OBESIDAD')== 0){
                if(strcmp($sexo, 'H')== 0){
                    $obesidadCountH ++;
                } else {
                    $obesidadCountM ++;
                }
                
            }  
        } else {
            $errores++;
        }        
    }

    $totalBajoPeso =  $bajoPesoCountH + $bajoPesoCountM ;
    $totalNormal =  $normalCountH + $normalCountM ;
    $totalSobrepeso =  $sobrepesoCountH + $sobrepesoCountM;
    $totalObesidad =  $obesidadCountM + $obesidadCountH;

    $bajoPesoPorcientajeH = $totalBajoPeso == 0 ? 0 : ($bajoPesoCountH * 100) / $totalBajoPeso;
    $bajoPesoPorcientajeM = $totalBajoPeso == 0 ? 0 : ($bajoPesoCountM * 100) / $totalBajoPeso;

    $normalPorcentajeH = $totalNormal == 0 ? 0 : ($normalCountH * 100) / $totalNormal;
    $normalPorcentajeM = $totalNormal == 0 ? 0 : ($normalCountM * 100) / $totalNormal;

    $sobrepesoPorcentajeH = $totalSobrepeso == 0 ? 0 : ($sobrepesoCountH * 100) / $totalSobrepeso;
    $sobrepesoPorcentajeM = $totalSobrepeso == 0 ? 0 : ($sobrepesoCountM * 100) / $totalSobrepeso;

    $obesidadPorcentajeM = $totalObesidad == 0 ? 0 : ($obesidadCountM * 100) / $totalObesidad;
    $obesidadPorcentajeH = $totalObesidad == 0 ? 0 : ($obesidadCountH * 100) / $totalObesidad;

    array_push($imcTotales, $bajoPesoPorcientajeH);
    array_push($imcTotales, $normalPorcentajeH);
    array_push($imcTotales, $sobrepesoPorcentajeH);
    array_push($imcTotales, $obesidadPorcentajeH);

    array_push($imcTotales, $bajoPesoPorcientajeM);
    array_push($imcTotales, $normalPorcentajeM);
    array_push($imcTotales, $sobrepesoPorcentajeM);
    array_push($imcTotales, $obesidadPorcentajeM);

    return ($imcTotales);
}
  
}
