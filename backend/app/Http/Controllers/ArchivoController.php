<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArchivoController extends Controller
{
    function upload(Request $req){

        $result=$req->file('file')->store('ArchivosNotas');
        return ["result"=>$result];
    }

    function download(Request $req){

        $path = storage_path('app\ArchivosNotas\aKcONxvxfYU23ztfvO4wYUZ8ErEgoWeFLiBUcw1U.pdf');
        return response()->download($path);
    }
}
