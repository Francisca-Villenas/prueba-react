import { useEffect, useState } from 'react';


const MiApi = () => {
  
  const [date, setDate] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
   const res = await fetch('https://api.victorsanmartin.com/feriados/en.json');
   const data = await res.json();
   setDate(data.data);
  }; 

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className='p-4'>
    <div className='input'>  
      <input
        placeholder='Buscar'
        type="text" 
        onChange={(e) => setSearch(e.target.value)} 
        value={search}
      />
    </div>

    <div className='list-api'>
      <ul>
        <h2>Fecha - Motivo</h2>

        {
          date.filter((x) => x.date.includes(search) || x.title.toLowerCase().includes(search.toLowerCase())).map((item) => {
            return <li key={item.date}>{item.date} - {item.title}</li>;
          })
        }
      </ul>

      
    </div>
    </div>

    </>
  );
};
export default MiApi;
