export async function GET () {

    const data={

        "prenom":"Rania",
        "ville":"Paris",
        "panier" :[
            "farine","lait","oeufs"
        ]
    }
    return Response.json ({data})

}