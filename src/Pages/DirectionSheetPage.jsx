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
          throw new Error('Ошибка сети при получении данных');
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

  const handleDownload = async (fileId) => {
    const fileUrl = `http://10.1.16.211/api/v1/direction-sheet/files/${fileId}/`;

    try {
      // Получаем URL файла
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error(`Ошибка сети при получении URL файла: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      const fileDownloadUrl = `http://10.1.16.211${result.data.url}`;

      // Скачиваем файл
      const fileResponse = await fetch(fileDownloadUrl);
      if (!fileResponse.ok) {
        throw new Error(`Ошибка сети при скачивании файла: ${fileResponse.status} ${fileResponse.statusText}`);
      }
      const blob = await fileResponse.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileDownloadUrl.split('/').pop(); // Используем имя файла из URL
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a); // Удаляем элемент после использования
      window.URL.revokeObjectURL(url); // Очищаем созданный URL
    } catch (error) {
      console.error('Ошибка при скачивании файла:', error);
    }
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error-message">Ошибка: {error}</div>;

  return (
    <div className="direction-sheet-container">
      {data.length > 0 ? (
        <ul className="direction-sheet-list">
          {data.map(item => (
            <li key={item.id} className="direction-sheet-item">
              <p><strong>Водитель:</strong> {item.driver?.name} {item.driver?.surname}</p>
              <p><strong>Автомобиль:</strong> {item.car?.car_make} {item.car?.car_model}</p>
              <p><strong>Дата начала:</strong> {item.start_data}</p>
              <p><strong>Дата окончания:</strong> {item.end_data}</p>
              <p><strong>Заметки:</strong> {item.notes}</p>
              <p><strong>Гео:</strong> {item.geo}</p> 
              <button 
                className="open-button" data-pk={item.id}
                onClick={() => handleDownload(item.id)} // Передаем ID путевого листа
              >
                загрузить
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет доступных данных</p>
      )}
    </div>
  );
};

export default DirectionSheetPage;
