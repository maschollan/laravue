<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all()->toArray();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'creator' => 'required|string',
        ]);

        if($validator->fails()) 
        {
            return response()->json($validator->errors());
        }
        
        $book = new Book([
            'name' => $request->input('name'),
            'creator' => $request->input('creator'),
            'rating' => $request->input('rating'),
            'category' => $request->input('category'),
            'detail' => $request->input('detail')
        ]);

        $book->save();

        return response()->json("book add succesfully");
    }

    public function show($id)
    {
        $book = Book::find($id);
        return response()->json($book);
    }

    public function update($id, Request $request)
    {
        $book = Book::find($id);
        $book->update($request->all());

        return response()->json('Book updated!');
    }

    public function destroy($id)
    {
        $book = Book::find($id);
        $book->delete();

        return response()->json('Book deleted!');
    }
}
