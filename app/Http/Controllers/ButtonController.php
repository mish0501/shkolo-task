<?php

namespace App\Http\Controllers;

use App\Button;
use Illuminate\Http\Request;

class ButtonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allButtons = [];

        $buttons = Button::all();

        for ($i = 0; $i < 9; $i++) {

            $button = $buttons->where('position', $i)->first();

            $allButtons[$i] = $button ?: ['position' => $i];
        }

        return $allButtons;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'link' => 'required',
            'color' => 'required',
            'position' => 'required|unique:buttons,position'
        ]);

        $button = Button::create($validatedData);

        return ['type' => 'success'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Button  $button
     * @return \Illuminate\Http\Response
     */
    public function show(Button $button)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Button  $button
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Button $button)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Button  $button
     * @return \Illuminate\Http\Response
     */
    public function destroy(Button $button)
    {
        //
    }
}
