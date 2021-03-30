<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        return view('blog.welcome');
    }
    
    public function aboutMe()
    {
        return view('blog.aboutMe');
    }
}
