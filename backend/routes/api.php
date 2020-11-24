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
Route::get('/jornadas/{idJornada}/beneficiarios', 'App\Http\Controllers\JornadaController@searchBenefs');

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
Route::get('formulario/{idBeneficiario}', 'App\Http\Controllers\RespuestasController@searchByBenef');
Route::get('detalles/{idBeneficiario}', 'App\Http\Controllers\RespuestasController@detalle');
Route::delete('eliminar/{idBeneficiario}', 'App\Http\Controllers\RespuestasController@destroy');

Route::resource('nota', NotaController::class);
Route::get('/notas/beneficiario/{idBeneficiario}', 'App\Http\Controllers\NotaController@searchByBenef');


Route::post("upload", [ArchivoController::class, 'upload']);
Route::get("download/{folder?}/{file?}", [ArchivoController::class, 'download']);
Route::get("deleteFile/{folder?}/{file?}", [ArchivoController::class, 'deleteFile']);


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
