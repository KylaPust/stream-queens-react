import React, { useState, useEffect } from 'react';

function ApiComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.kanye.rest/');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
            {data.quote}
          {/* {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))} */}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default ApiComponent;