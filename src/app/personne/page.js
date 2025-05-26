import axios from "axios"

async function personne() {
     const res = await axios.get("http://localhost:3000/api/test");

     console.log (res.data);

     const txt=JSON.stringify(res.data); // pour transformer objet en string 




  return (
    <div>{txt}</div>
  )
}

export default personne
export const dynamic='force-dynamic'