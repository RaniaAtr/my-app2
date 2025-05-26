
export default async function page ({params}) {
    const{produits}= await params
    console.log (produits);
    return
    <div>
        <h1>ma liste de courses</h1>
        <ul>
            {produits && produits.map((prod,index))}

        </ul>


    </div>
    
}