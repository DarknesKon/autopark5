import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import "./TransportPage.css";

const TransportPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`http://10.1.16.211/api/v1/car-info/?page=${page}`);
        const result = response.data;

        setCars(prevCars => [...prevCars, ...result.results]);
        setHasMore(result.next !== null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [page]);

  const loadMore = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderedCars = useMemo(() => (
    cars.map((car, index) => (
      <li key={index} className="car-item">
        <h2>{car.car_make} {car.car_model}</h2>
        <p>Color: {car.color}</p>
        <p>Year: {car.year_of_issue}</p>
        <p>Gasoline Consumption: {car.gasoline_consumption}</p>
        <p>Mileage: {car.car_mileage}</p>
        <p>State Number: {car.state_number}</p>
      </li>
    ))
  ), [cars]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="transport-container">
      <h1>Информация о Транспорте</h1>
      <ul className="car-list">{renderedCars}</ul>
      {hasMore && <button onClick={loadMore} className="load-more-button">Load More</button>}
    </div>
  );
};

export default TransportPage;
