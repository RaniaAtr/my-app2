
function FeaturedFilm({ titre, description, image }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={titre} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{titre}</h2>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
}

export default FeaturedFilm;
