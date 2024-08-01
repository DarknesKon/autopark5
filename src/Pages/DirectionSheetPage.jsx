import { useEffect, useState } from 'react';
import "./DirectionSheetPage.css";

const DirectionSheetPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.1.16.211/api/v1/direction-sheet/objects/');
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

  const handleDownload = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'direction_sheet.docx';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="direction-sheet-container">
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
              <button 
                className="open-button" 
                onClick={() => handleDownload(`http://10.1.16.211/media//temp/31_07_2024_1722414777.docx`)}
              >
                загрузить
              </button>
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
