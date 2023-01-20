import img from '../assets/img/2023.png';

const Header = () => {
  return (
    <div className='header'>
        <h1>Feriados de Chile</h1>
        <div className='container-img'>
            <img className='img' src={img} />
        </div>
        
    </div>
  );
};

export default Header;