<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeneficiariosController;
use App\Http\Controllers\ConsultaNutricionController;
use App\Http\Controllers\EvaluacionesRespuestasController;
use App\Http\Controllers\EvaluacionesPreguntasController;
use App\Http\Controllers\OpcionEvaluacionController;
use App\Http\Controllers\NotaController;
use App\Http\Controllers\ArchivoController;
use App\Http\Controllers\ConsultaMedicaController;
use App\Http\Controllers\ExamenOrinaController;
use App\Http\Controllers\DepuracionCreatininaController;
use App\Http\Controllers\QuimicaSanguineaController;
use App\Http\Controllers\MicroalbuminuriaController;

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

Route::get('/jornadas', 'App\Http\Controllers\JornadaController@all');
Route::get('/jornadas/{idJornada}', 'App\Http\Controllers\JornadaController@search');
Route::post('/jornadas', 'App\Http\Controllers\JornadaController@insert');
Route::post('/jornadas/{idJornada}', 'App\Http\Controllers\JornadaController@edit');
Route::delete('/jornadas/{idJornada}', 'App\Http\Controllers\JornadaController@delete');


Route::get('/escolaridades', 'App\Http\Controllers\EscolaridadesController@all');
Route::get('/tiponota', 'App\Http\Controllers\TipoNotaController@all');

//todas las rutas de beneficiarios
Route::resource('beneficiarios', BeneficiariosController::class);

//todas las rutas del examen de orina
Route::resource('examenOrina', ExamenOrinaController::class);
//todas las rutas de la depuración de creatinina
Route::resource('depuracionCreatinina', DepuracionCreatininaController::class);
//todas las rutas de la química sanguínea
Route::resource('quimicaSanguinea', QuimicaSanguineaController::class);
//todas las rutas de la microalbuminuria
Route::resource('microalbuminuria', MicroalbuminuriaController::class);

Route::get('/estados', 'App\Http\Controllers\EstadoController@all');

Route::resource('consultaNutricion', ConsultaNutricionController::class);
Route::get('/consultaNutricion/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaNutricionController@searchByBenef');

Route::resource('evaluacion', EvaluacionesRespuestasController::class);
Route::get('/evaluacionesPreguntas', 'App\Http\Controllers\EvaluacionPreguntasController@all');
Route::get('/opcionEvaluacion/evaluaciones/{idEvaluacion}', 'App\Http\Controllers\OpcionEvaluacionController@searchByTipoJornada');
Route::get('evaluacionesInicio/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@searchByBenefStart');
Route::get('evaluacionesFin/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@searchByBenefEnd');
Route::get('detallesEvaluacionesInicio/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@detalleInicio');
Route::get('detallesEvaluacionesFin/{idBeneficiario}', 'App\Http\Controllers\EvaluacionesRespuestasController@detalleFin');

Route::resource('nota', NotaController::class);
Route::get('/notas/beneficiario/{idBeneficiario}', 'App\Http\Controllers\NotaController@searchByBenef');


Route::post("upload", [ArchivoController::class, 'upload']);
Route::get("download/{folder?}/{file?}", [ArchivoController::class, 'download']);


Route::resource('consultaMedica', ConsultaMedicaController::class);
Route::get('/consultaMedica/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaMedicaController@searchByBenef');

Route::get('/tamizaje', 'App\Http\Controllers\TamizajeController@all');
Route::get('/tamizaje/{idBeneficiario}', 'App\Http\Controllers\TamizajeController@searchAll');
Route::get('/tamizaje/{idBeneficiario}/{idTamizaje}', 'App\Http\Controllers\TamizajeController@searchOne');
Route::post('/tamizaje', 'App\Http\Controllers\TamizajeController@insert');
