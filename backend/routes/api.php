<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeneficiariosController;
use App\Http\Controllers\ConsultaNutricionController;
use App\Http\Controllers\ConsultaMedicaController;

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

//todas las rutas de beneficiarios
Route::resource('beneficiarios', BeneficiariosController::class);



Route::get('/estados', 'App\Http\Controllers\EstadoController@all');

Route::resource('consultaNutricion', ConsultaNutricionController::class);
Route::get('/consultaNutricion/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaNutricionController@searchByBenef');

Route::resource('consultaMedica', ConsultaMedicaController::class);
Route::get('/consultaMedica/beneficiario/{idBeneficiario}', 'App\Http\Controllers\ConsultaMedicaController@searchByBenef');