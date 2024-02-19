import React, { useState, useEffect } from 'react';
import { useGetClientsQuery } from '../services/clientsApi';
import { Footer } from '../components/Footer/Footer';

const Clients = () => {
  const { data: clientsApi, isFetching } = useGetClientsQuery();
  const [isClients, setClients] = useState([]);

  useEffect(() => {
    if (clientsApi?.data) {
      setClients(clientsApi.data);
    }
  }, [clientsApi]);

  if (isFetching) return 'Loading clients...';

  return (
    <div className='content'>
        <div className='clients-container'>
            <h1>Наши клиенты:</h1>
            <div className='clients-container-flex'>
            {isClients.map((client, i) => (
                <div key={i} className='clients-container-flex-box'>
                    <img src={client.logo} alt={client.name} />
                    <h2>{client.name}</h2>
                    <p>Rating: {client.rating}</p>
                    <a href={client.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                    </a>
                </div>
            ))} 
            </div>
        </div>
        <Footer/>
    </div>
    
  );
};

export default Clients;
