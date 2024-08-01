import { useEffect, useState } from 'react';
import { FaGasPump } from 'react-icons/fa';
import "./FuelInformationPage.css";

const FuelInformationPage = () => {
  const [fuelData, setFuelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchFuelData = async () => {
      try {
        const response = await fetch(`http://10.1.16.211/api/v1/fuel-information/?page=${page}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setFuelData(result.results || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFuelData();
  }, [page]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      {fuelData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fuelData.map(item => (
            <div key={item.id} className="card">
              <div className="card-icon">
                <FaGasPump size={50} color="#FFB300" />
              </div>
              <p className="text-lg font-semibold"><strong>Тип топлива:</strong> {item.fuel_type}</p>
              <p><strong>Цена:</strong> {item.price} сом</p>
              <p><strong>Локация:</strong> {item.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Нет информации о топливе</p>
      )}
      <div className="pagination flex justify-center space-x-2 mt-6">
        <button 
          className={`bg-blue-500 text-white px-4 py-2 rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`} 
          onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
          disabled={page === 1}
        >
          Назад
        </button>
        <span className="text-lg">Страница {page}</span>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={() => setPage(prev => prev + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default FuelInformationPage;
