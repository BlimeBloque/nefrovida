<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeneficiariosController;
use App\Http\Controllers\ConsultaNutricionController;
use App\Http\Controllers\EvaluacionesRespuestasController;
use App\Http\Controllers\EvaluacionPreguntasController;
use App\Http\Controllers\OpcionEvaluacionController;
use App\Http\Controllers\NotaController;
use App\Http\Controllers\ArchivoController;
use App\Http\Controllers\ConsultaMedicaController;
use App\Http\Controllers\AntecedentesController;
use App\Http\Controllers\ExamenOrinaController;
use App\Http\Controllers\DepuracionCreatininaController;
use App\Http\Controllers\QuimicaSanguineaController;
use App\Http\Controllers\MicroalbuminuriaController;
use App\Http\Controllers\RespuestasController;
use App\Http\Controllers\PreguntasController;
use App\Http\Controllers\OpcionFormularioController;
use App\Http\Controllers\JWTController;

use Illuminate\Support\Facades\Http;
use App\Http\Controllers\ReportesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/eswtrdtf', 'App\Http\Controllers\JWTController@getToken');
Route::prefix('')->middleware('jwt')->group(function () {
    Route::get('/jornadas', 'App\Http\Controllers\JornadaController@all');
    Route::get('/jornadas/{idJornada}', 'App\Http\Controllers\JornadaController@search');
    Route::post('/jornadas', 'App\Http\Controllers\JornadaController@insert');
    Route::post('/jornadas/{idJornada}', 'App\Http\Controllers\JornadaController@edit');
    Route::delete('/jornadas/{idJornada}', 'App\Http\Controllers\JornadaController@delete');
    Route::get('/jornadas/{idJornada}/beneficiarios', 'App\Http\Controllers\JornadaController@searchBenefs');

    Route::get('/jornada/comparar', 'App\Http\Controllers\JornadaController@compararAll');
    Route::get('/comparar/{id0}/{id1}/{id2}/{id3}/{id4}', 'App\Http\Controllers\JornadaController@compare');

    Route::get('/escolaridades', 'App\Http\Controllers\EscolaridadesController@all');
    Route::get('/tiponota', 'App\Http\Controllers\TipoNotaController@all');

    //todas las rutas de beneficiarios
    Route::resource('beneficiarios', BeneficiariosController::class);

    //todas las rutas del examen de orina
    Route::resource('examenOrina', ExamenOrinaController::class);
    Route::get('/examenOrina/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ExamenOrinaController@searchByBenef');
    //todas las rutas de la depuración de creatinina
    Route::resource('depuracionCreatinina', DepuracionCreatininaController::class);
    Route::get('/depuracionCreatinina/beneficiario/{idBeneficiario}', 'App\Http\Controllers\DepuracionCreatininaController@searchByBenef');
    //todas las rutas de la química sanguínea
    Route::resource('quimicaSanguinea', QuimicaSanguineaController::class);
    Route::get('/quimicaSanguinea/beneficiario/{idBeneficiario}', 'App\Http\Controllers\QuimicaSanguineaController@searchByBenef');
    //todas las rutas de la microalbuminuria
    Route::resource('microalbuminuria', MicroalbuminuriaController::class);
    Route::get('/microalbuminuria/beneficiario/{idBeneficiario}', 'App\Http\Controllers\MicroalbuminuriaController@searchByBenef');

    Route::get('/estados', 'App\Http\Controllers\EstadoController@all');

    Route::resource('consultaNutricion', ConsultaNutricionController::class);
    Route::get('/consultaNutricion/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaNutricionController@searchByBenef');

    Route::resource('evaluacion', EvaluacionesRespuestasController::class);
    Route::resource('evaluacionesPreguntas', EvaluacionPreguntasController::class);
    Route::get('/opcionEvaluacion/evaluaciones/{idEvaluacion}', 'App\Http\Controllers\OpcionEvaluacionController@searchByTipoJornada');
    Route::get('evaluacionesInicio/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@searchByBenefStart');
    Route::get('evaluacionesFin/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@searchByBenefEnd');
    Route::get('detallesEvaluacionesInicio/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@detalleInicio');
    Route::get('detallesEvaluacionesFin/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@detalleFin');
    Route::delete('eliminarEvaluacionesInicio/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@destroyInicio');
    Route::delete('eliminarEvaluacionesFin/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@destroyFin');

    Route::resource('formulario', RespuestasController::class);
    Route::resource('preguntas', PreguntasController::class);
    Route::get('/opcionFormulario/formularios/{idFormulario}', 'App\Http\Controllers\OpcionFormularioController@searchByForm');
    Route::get('detalles/{idBeneficiario}', 'App\Http\Controllers\RespuestasController@detalle');
    Route::delete('eliminar/{idBeneficiario}', 'App\Http\Controllers\RespuestasController@destroy');

    Route::resource('nota', NotaController::class);
    Route::get('/notas/beneficiario/{idBeneficiario}', 'App\Http\Controllers\NotaController@searchByBenef');


    


    Route::resource('consultaMedica', ConsultaMedicaController::class);
    Route::get('/consultaMedica/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaMedicaController@searchByBenef');

    Route::resource('antecedentes', AntecedentesController::class);
    Route::get('/antecedentes/beneficiario/{idBeneficiario}', 'App\Http\Controllers\AntecedentesController@searchByBenef');

    Route::get('/tamizaje', 'App\Http\Controllers\TamizajeController@all');
    Route::get('/tamizaje/{idBeneficiario}', 'App\Http\Controllers\TamizajeController@searchAll');
    Route::get('/tamizaje/{idBeneficiario}/{idTamizaje}', 'App\Http\Controllers\TamizajeController@searchOne');
    Route::post('/tamizaje', 'App\Http\Controllers\TamizajeController@insert');
    Route::post('/tamizaje/{idBeneficiario}/{idTamizaje}', 'App\Http\Controllers\TamizajeController@edit');
    Route::delete('/tamizaje/{idBeneficiario}/{idTamizaje}', 'App\Http\Controllers\TamizajeController@delete');


    Route::get('reportes/getSexoTotal', 'App\Http\Controllers\ReportesController@countBySex');
    Route::get('reportes/getSexoJornada/{idJornada}', 'App\Http\Controllers\ReportesController@countBySexAndJourney');
    Route::get('reportes/getEdadesTotal', 'App\Http\Controllers\ReportesController@getEdadesTotales');
    Route::get('reportes/getEdadesJornada/{idJornada}', 'App\Http\Controllers\ReportesController@getEdadesJornada');
    Route::get('reportes/getPruebas', 'App\Http\Controllers\ReportesController@countPruebas');
    Route::get('reportes/getPruebas/{idJornada}', 'App\Http\Controllers\ReportesController@countPruebasJornada');
    Route::get('reportes/getTamizajes', 'App\Http\Controllers\ReportesController@countTamizajes');
    Route::get('reportes/getTamizajes/{idJornada}', 'App\Http\Controllers\ReportesController@countTamizajesJornada');
    Route::get('reportes/getCountBeneficiariosConPruebas', 'App\Http\Controllers\ReportesController@conutBenefSinAnalisis');
    Route::get('reportes/getCountBeneficiariosConPruebas/{idJornada}', 'App\Http\Controllers\ReportesController@conutBenefSinAnalisisJornada');
    Route::get('reportes/getCountIMC', 'App\Http\Controllers\ReportesController@countIMCGeneral');
    Route::get('reportes/getCountIMC/{idJornada}', 'App\Http\Controllers\ReportesController@countIMCJornada');
    Route::get('reportes/getCountIMCPorSexo', 'App\Http\Controllers\ReportesController@countIMCPorSexo');
    Route::get('reportes/getCountIMCPorSexo/{idJornada}', 'App\Http\Controllers\ReportesController@countIMCPorSexoJornada');
    Route::get('reportes/getCountEvaluaciones', 'App\Http\Controllers\ReportesController@countEvaluaciones');
    Route::get('reportes/getCountEvaluaciones/{idJornada}', 'App\Http\Controllers\ReportesController@countEvaluacionesJornada');
});

Route::prefix('movil')->group(function() {
    Route::get('/jornadas', 'App\Http\Controllers\JornadaController@all');
    Route::get('/jornadas/{idJornada}', 'App\Http\Controllers\JornadaController@search');
    Route::post('/jornadas', 'App\Http\Controllers\JornadaController@insert');
    Route::get('/jornadas/{idJornada}/beneficiarios', 'App\Http\Controllers\JornadaController@searchBenefs');

    Route::get('/escolaridades', 'App\Http\Controllers\EscolaridadesController@all');
    Route::get('/tiponota', 'App\Http\Controllers\TipoNotaController@all');

    //todas las rutas de beneficiarios
    Route::get('/beneficiarios', 'App\Http\Controllers\BeneficiariosController@index');
    Route::get('/beneficiarios/{idBeneficiario}', 'App\Http\Controllers\BeneficiariosController@show');
    Route::post('/beneficiarios', 'App\Http\Controllers\BeneficiariosController@store');

    //todas las rutas del examen de orina
    Route::get('/examenOrina/{idExamenOrina}', 'App\Http\Controllers\ExamenOrinaController@show');
    Route::get('/examenOrina/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ExamenOrinaController@searchByBenef');
    //todas las rutas de la depuración de creatinina
    Route::get('/depuracionCreatinina/{idDepuracionCreatinina}', 'App\Http\Controllers\DepuracionCreatininaController@show');
    Route::get('/depuracionCreatinina/beneficiario/{idBeneficiario}', 'App\Http\Controllers\DepuracionCreatininaController@searchByBenef');
    //todas las rutas de la química sanguínea
    Route::get('/quimicaSanguinea/{idQuimicaSanguinea}', 'App\Http\Controllers\QuimicaSanguineaController@show');
    Route::get('/quimicaSanguinea/beneficiario/{idBeneficiario}', 'App\Http\Controllers\QuimicaSanguineaController@searchByBenef');
    //todas las rutas de la microalbuminuria
    Route::get('/microalbuminuria/{idMicroalbuminuria}', 'App\Http\Controllers\MicroalbuminuriaController@show');
    Route::get('/microalbuminuria/beneficiario/{idBeneficiario}', 'App\Http\Controllers\MicroalbuminuriaController@searchByBenef');

    Route::get('/estados', 'App\Http\Controllers\EstadoController@all');

    Route::get('/consultaNutricion/{idConsultaNutricion}', 'App\Http\Controllers\ConsultaNutricionController@show');
    Route::get('/consultaNutricion/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaNutricionController@searchByBenef');

    Route::resource('evaluacion', EvaluacionesRespuestasController::class);
    Route::resource('evaluacionesPreguntas', EvaluacionPreguntasController::class);
    Route::get('/opcionEvaluacion/evaluaciones/{idEvaluacion}', 'App\Http\Controllers\OpcionEvaluacionController@searchByTipoJornada');
    Route::get('evaluacionesInicio/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@searchByBenefStart');
    Route::get('evaluacionesFin/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@searchByBenefEnd');
    Route::get('detallesEvaluacionesInicio/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@detalleInicio');
    Route::get('detallesEvaluacionesFin/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@detalleFin');

    Route::get('detalles/{idBeneficiario}', 'App\Http\Controllers\RespuestasController@detalle');

    Route::get('/nota/{idNota}', 'App\Http\Controllers\NotaController@show');
    Route::get('/notas/beneficiario/{idBeneficiario}', 'App\Http\Controllers\NotaController@searchByBenef');
    Route::post('/nota', 'App\Http\Controllers\NotaController@store');

    Route::post("upload", [ArchivoController::class, 'upload']);
    
    Route::get('/consultaMedica/{idConsultaMedica}', 'App\Http\Controllers\ConsultaMedicaController@show');
    Route::get('/consultaMedica/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaMedicaController@searchByBenef');

    Route::get('/antecedentes/{idAntecedente}', 'App\Http\Controllers\AntecedentesController@show');
    Route::get('/antecedentes/beneficiario/{idBeneficiario}', 'App\Http\Controllers\AntecedentesController@searchByBenef');

    Route::get('/tamizaje', 'App\Http\Controllers\TamizajeController@all');
    Route::get('/tamizaje/{idBeneficiario}', 'App\Http\Controllers\TamizajeController@searchAll');
    Route::get('/tamizaje/{idBeneficiario}/{idTamizaje}', 'App\Http\Controllers\TamizajeController@searchOne');
    
    Route::get('reportes/getSexoTotal', 'App\Http\Controllers\ReportesController@countBySex');
    Route::get('reportes/getSexoJornada/{idJornada}', 'App\Http\Controllers\ReportesController@countBySexAndJourney');
    Route::get('reportes/getEdadesTotal', 'App\Http\Controllers\ReportesController@getEdadesTotales');
    Route::get('reportes/getEdadesJornada/{idJornada}', 'App\Http\Controllers\ReportesController@getEdadesJornada');
    Route::get('reportes/getPruebas', 'App\Http\Controllers\ReportesController@countPruebas');
    Route::get('reportes/getPruebas/{idJornada}', 'App\Http\Controllers\ReportesController@countPruebasJornada');
    Route::get('reportes/getTamizajes', 'App\Http\Controllers\ReportesController@countTamizajes');
    Route::get('reportes/getTamizajes/{idJornada}', 'App\Http\Controllers\ReportesController@countTamizajesJornada');
    Route::get('reportes/getCountBeneficiariosConPruebas', 'App\Http\Controllers\ReportesController@conutBenefSinAnalisis');
    Route::get('reportes/getCountBeneficiariosConPruebas/{idJornada}', 'App\Http\Controllers\ReportesController@conutBenefSinAnalisisJornada');
    Route::get('reportes/getCountIMC', 'App\Http\Controllers\ReportesController@countIMCGeneral');
    Route::get('reportes/getCountIMC/{idJornada}', 'App\Http\Controllers\ReportesController@countIMCJornada');
    Route::get('reportes/getCountIMCPorSexo', 'App\Http\Controllers\ReportesController@countIMCPorSexo');
    Route::get('reportes/getCountIMCPorSexo/{idJornada}', 'App\Http\Controllers\ReportesController@countIMCPorSexoJornada');
    Route::get('reportes/getCountEvaluaciones', 'App\Http\Controllers\ReportesController@countEvaluaciones');
    Route::get('reportes/getCountEvaluaciones/{idJornada}', 'App\Http\Controllers\ReportesController@countEvaluacionesJornada');
});


Route::get('/token', fn () => Http::asForm()
    ->withBasicAuth(
        env('OKTA_CLIENT_ID'),
        env('OKTA_CLIENT_SECRET')
    )
    ->post(env('OKTA_ISSUER_URI') . '/v1/token', [
        'grant_type' => 'client_credentials',
        'scope' => env('OKTA_SCOPE'),
    ])
    ->throw()
    ->json());


//todas las notas de reportes
Route::post("upload", [ArchivoController::class, 'upload']);
    Route::get("download/{folder?}/{file?}", [ArchivoController::class, 'download']);
    Route::get("deleteFile/{folder?}/{file?}", [ArchivoController::class, 'deleteFile']);






