import  { useEffect, useState } from 'react';
import "./DirectionSheetPage.css"

const DirectionSheetPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.1.16.212/api/v1/direction-sheet/objects/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.results || []); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="direction-sheet-container">
      <h1>Direction Sheet</h1>
      {data.length > 0 ? (
        <ul className="direction-sheet-list">
          {data.map(item => (
            <li key={item.id} className="direction-sheet-item">
              <p><strong>Driver:</strong> {item.driver?.name} {item.driver?.surname}</p>
              <p><strong>Car:</strong> {item.car?.car_make} {item.car?.car_model}</p>
              <p><strong>Start Date:</strong> {item.start_data}</p>
              <p><strong>End Date:</strong> {item.end_data}</p>
              <p><strong>Notes:</strong> {item.notes}</p>
              <p><strong>Geo:</strong> {item.geo}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
      
    </div>
  );
};

export default DirectionSheetPage;
