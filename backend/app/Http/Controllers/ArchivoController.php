<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArchivoController extends Controller
{
    function upload(Request $req){

        $result=$req->file('file')->store('ArchivosNotas');
        return ["result"=>$result];
    }

    function download(Request $req, String $folder, String $file){

        $path = storage_path('app\\' . $folder . '\\' . $file);
        return response()->download($path);
    }
}
