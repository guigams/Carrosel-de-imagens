import { useEffect, useState, useRef } from 'react'; 
import './style.css';

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  
  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
    .then((response) => response.json())
    .then(setData);
  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

  }

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if (!data || !data.length) return null;
  return(
    <div className="container">
      <button onClick={handleLeftClick} className="Left" id='teste'> 
        <img src="/static/images/seta2.png" alt="Scroll Left"/>
      </button>
      
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
            const {id, name, image} = item;
            return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>           
            </div>
           
          );
        })}
      </div>
      <button onClick={handleRightClick} className="Right">
          <img src="/static/images/seta2.png" alt="Scroll Right"/>
      </button>
    </div>
  );
}

export default App;