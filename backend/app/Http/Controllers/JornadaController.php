<?php

namespace App\Http\Controllers;


use App\Models\Jornada;
use App\Http\Resources\Jornada as JornadaResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JornadaController extends Controller {
    public function all() {
        return DB::table('jornadas')->leftJoin('estados_mexico', 'jornadas.idEstado', '=', 'estados_mexico.idEstado')->select('jornadas.*', 'estados_mexico.nombreEstado', 'estados_mexico.siglas')->get();
    }

    public function search($idJornada) {
        return DB::table('jornadas')->leftJoin('estados_mexico', 'jornadas.idEstado', '=', 'estados_mexico.idEstado')->where('idJornada', '=', $idJornada)->select('jornadas.*', 'estados_mexico.nombreEstado', 'estados_mexico.siglas')->get();
    }

    public function searchBenefs($idJornada) {
        return DB::table('beneficiarios AS b')
            ->join('jornadas AS j', 'b.idJornada','=','j.idJornada')
            ->where('b.idJornada','=',$idJornada)
            //->select('b.idBeneficiario','b.nombreBeneficiario', 'b.idJornada', 'j.nombre', 'j.localidad', 'j.municipio')
            ->get();
    }

    public function insert(Request $request) {
        $rules = [
            'nombre' => 'required|string',
            'fecha' => 'required',
            'localidad' => 'required|string',
            'municipio' => 'required|string',
            'idEstado' => 'required|numeric',
        ];

        $customMessages = [
            'required' => 'Este campo es requerido.',
            'numeric' => 'Este campo debe contener solo números.',
            'string' => 'Este campo debe ser texto.',
        ];

        $this->validate($request, $rules, $customMessages);

        $jornada = Jornada::create($request->all());

        return (new JornadaResource($jornada))
            ->response()
            ->setStatusCode(201);
    }

    public function edit($id, Request $request) {
        //$request->merge(['correct' => (bool) json_decode($request->get('correct'))]);
        $rules = [
            'nombre' => 'required|string',
            'fecha' => 'required',
            'localidad' => 'required|string',
            'municipio' => 'required|string',
            'idEstado' => 'required|numeric',
        ];

        $customMessages = [
            'required' => 'Este campo es requerido.',
            'numeric' => 'Este campo debe contener solo números.',
            'string' => 'Este campo debe ser texto.',
        ];

        $this->validate($request, $rules, $customMessages);

        $query = DB::table('jornadas')->where('idJornada', $id)->update(['nombre' => $request->get('nombre'), 'fecha' => $request->get('fecha'), 'localidad' => $request->get('localidad'), 'municipio' => $request->get('municipio'), 'idEstado' => $request->get('idEstado')]);
        return $query;
    }

    public function delete($id) {
        $query = DB::table('jornadas')->where('idJornada', $id)->delete();

        return response()->json(null, 204);
    }

    public function compararAll() {
        return DB::table('jornadas')->select('idJornada as value', 'nombre as label')->get();
    }

    public function compare($id0, $id1, $id2, $id3, $id4) {
        $arrSocioDemografico = [];
        $arrTamizaje = [];

        if ($id0 != -1) {
            $Bid0 = DB::table('beneficiarios')->select('idBeneficiario as id')->where('idJornada', '=', $id0)->get();
            $SocioDemografico0 = [0 => [DB::table('beneficiarios')->select('fechaNacimiento as fecha', 'seguimiento', 'sexo')->where('idJornada', '=', $id0)->get()]];
            $arrSocioDemografico = ["SocioDemografico" => $SocioDemografico0];
            $T0 = [];
            foreach ($Bid0 as &$id) {
                $T0 = array_merge($T0, [DB::table('tamizajes')->where('idBeneficiario', '=',  intval($id->id))->orderByDesc('created_at')->limit(1)->get()]);
            }
            $arrTamizaje = ["Tamizaje" => [$T0]];
        }

        if ($id1 != -1) {
            $Bid1 = DB::table('beneficiarios')->select('idBeneficiario as id')->where('idJornada', '=', $id1)->get();
            $SocioDemografico1 = [1 => [DB::table('beneficiarios')->select('fechaNacimiento as fecha', 'seguimiento', 'sexo')->where('idJornada', '=', $id1)->get()]];
            $arrSocioDemografico = ["SocioDemografico" => $arrSocioDemografico["SocioDemografico"] + $SocioDemografico1];
            $T1 = [];
            foreach ($Bid1 as &$id) {
                $T1 = array_merge($T1, [DB::table('tamizajes')->where('idBeneficiario', '=',  intval($id->id))->orderByDesc('created_at')->limit(1)->get()]);
            }
            $arrTamizaje = ["Tamizaje" => [$T0, $T1]];
        }

        if ($id2 != -1) {
            $Bid2 = DB::table('beneficiarios')->select('idBeneficiario as id')->where('idJornada', '=', $id2)->get();
            $SocioDemografico2 = [2 => [DB::table('beneficiarios')->select('fechaNacimiento as fecha', 'seguimiento', 'sexo')->where('idJornada', '=', $id2)->get()]];
            $arrSocioDemografico = ["SocioDemografico" => $arrSocioDemografico["SocioDemografico"] + $SocioDemografico2];
            $T2 = [];
            foreach ($Bid2 as &$id) {
                $T2 = array_merge($T2, [DB::table('tamizajes')->where('idBeneficiario', '=',  intval($id->id))->orderByDesc('created_at')->limit(1)->get()]);
            }
            $arrTamizaje = ["Tamizaje" => [$T0, $T1, $T2]];
        }

        if ($id3 != -1) {
            $Bid3 = DB::table('beneficiarios')->select('idBeneficiario as id')->where('idJornada', '=', $id3)->get();
            $SocioDemografico3 = [3 => [DB::table('beneficiarios')->select('fechaNacimiento as fecha', 'seguimiento', 'sexo')->where('idJornada', '=', $id3)->get()]];
            $arrSocioDemografico = ["SocioDemografico" => $arrSocioDemografico["SocioDemografico"] + $SocioDemografico3];
            $T3 = [];
            foreach ($Bid3 as &$id) {
                $T3 = array_merge($T3, [DB::table('tamizajes')->where('idBeneficiario', '=',  intval($id->id))->orderByDesc('created_at')->limit(1)->get()]);
            }
            $arrTamizaje = ["Tamizaje" => [$T0, $T1, $T2, $T3]];
        }

        if ($id4 != -1) {
            $Bid4 = DB::table('beneficiarios')->select('idBeneficiario as id')->where('idJornada', '=', $id4)->get();
            $SocioDemografico4 = [4 => [DB::table('beneficiarios')->select('fechaNacimiento as fecha', 'seguimiento', 'sexo')->where('idJornada', '=', $id4)->get()]];
            $arrSocioDemografico = ["SocioDemografico" => $arrSocioDemografico["SocioDemografico"] + $SocioDemografico4];
            $T4  = [];
            foreach ($Bid4 as &$id) {
                $T4  = array_merge($T4, [DB::table('tamizajes')->where('idBeneficiario', '=',  intval($id->id))->orderByDesc('created_at')->limit(1)->get()]);
            }
            $arrTamizaje = ["Tamizaje" => [$T0, $T1, $T2, $T3, $T4]];
        }

        return $arrSocioDemografico + $arrTamizaje;
    }
}
