# cat-fact-explorer

Give me a nice webapp for this openapi schema

reason about functionality first

{
    "openapi": "3.0.0",
    "info": {
        "title": "Cat Facts API",
        "version": "1.0"
    },
    "paths": {
        "/breeds": {
            "get": {
                "tags": [
                    "Breeds"
                ],
                "summary": "Get a list of breeds",
                "description": "Returns a a list of breeds",
                "operationId": "getBreeds",
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "limit the amount of results returned",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Breed"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/fact": {
            "get": {
                "tags": [
                    "Facts"
                ],
                "summary": "Get Random Fact",
                "description": "Returns a random fact",
                "operationId": "getRandomFact",
                "parameters": [
                    {
                        "name": "max_length",
                        "in": "query",
                        "description": "maximum length of returned fact",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/CatFact"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Fact not found"
                    }
                }
            }
        },
        "/facts": {
            "get": {
                "tags": [
                    "Facts"
                ],
                "summary": "Get a list of facts",
                "description": "Returns a a list of facts",
                "operationId": "getFacts",
                "parameters": [
                    {
                        "name": "max_length",
                        "in": "query",
                        "description": "maximum length of returned fact",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "limit the amount of results returned",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/CatFact"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Breed": {
                "title": "Breed model",
                "description": "Breed",
                "properties": {
                    "breed": {
                        "title": "Breed",
                        "description": "Breed",
                        "type": "string",
                        "format": "string"
                    },
                    "country": {
                        "title": "Country",
                        "description": "Country",
                        "type": "string",
                        "format": "string"
                    },
                    "origin": {
                        "title": "Origin",
                        "description": "Origin",
                        "type": "string",
                        "format": "string"
                    },
                    "coat": {
                        "title": "Coat",
                        "description": "Coat",
                        "type": "string",
                        "format": "string"
                    },
                    "pattern": {
                        "title": "Pattern",
                        "description": "Pattern",
                        "type": "string",
                        "format": "string"
                    }
                },
                "type": "object"
            },
            "CatFact": {
                "title": "CatFact model",
                "description": "CatFact",
                "properties": {
                    "fact": {
                        "title": "Fact",
                        "description": "Fact",
                        "type": "string",
                        "format": "string"
                    },
                    "length": {
                        "title": "Length",
                        "description": "Length",
                        "type": "integer",
                        "format": "int32"
                    }
                },
                "type": "object"
            }
        }
    }
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/cat-fact-explorer.git
cd cat-fact-explorer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
