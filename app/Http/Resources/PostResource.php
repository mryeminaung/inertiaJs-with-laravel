<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => ucwords($this->title),
            'body' => substr($this->body, 0, 30),
            'createdAt' => $this->created_at->diffForHumans(),
        ];
    }
}
