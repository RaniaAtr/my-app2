"use client"
import { useState } from "react"


function Courses() {

    const[produit,setProduit]=useState ("");
  return (
    <div className="">
        <h1>Créer une liste de courses</h1>
        <input
        type="text"
        value={produit}
        onChange={(e) => setProduit(e.target.value)}
        placeholder="Entrez un produit" />
        <button>Ajouter un produit</button>
        <button>Accéder à ma liste </button>
    </div>
  )
}

export default Courses