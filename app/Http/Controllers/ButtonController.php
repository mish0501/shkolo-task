<?php

namespace App\Http\Controllers;

use App\Button;
use App\Http\Requests\StoreButton;
use App\Http\Requests\UpdateButton;
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
     * @param  \App\Http\Requests\StoreButton  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreButton $request)
    {
        $validatedData = $request->validated();

        Button::create($validatedData);

        return ['type' => 'success', 'msgs' => ['Button added succefully.']];
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        return Button::findOrFail($id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateButton  $request
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateButton $request, $id)
    {
        $validatedData = $request->validated();

        $button = Button::findOrFail($id)->first();

        $button->update($validatedData);

        return ['type' => 'success', 'msgs' => ['Button edited succefully.']];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Button  $button
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Button::findOrFail($id)->first()->delete();

        return ['type' => 'success', 'msgs' => ['Button deleted succefully.']];
    }
}
