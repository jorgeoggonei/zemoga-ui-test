import React, { useEffect, useState, useCallback  } from 'react';
import axios from 'axios';
import './home.scss';
import Ruling from '../../components/Ruling/Ruling';
import Message from '../../components/Message/Message';
import SubmitName from '../../components/SubmitName/SubmitName';

function Home() {
  const [rulings, setRulings] = useState([]);

  const fetchData = useCallback( () => {
    localStorage.getItem('rulingsData') ?
      setRulings( JSON.parse(localStorage.getItem('rulingsData')))
      :
      axios.get('rulings.json')
        .then(function (response) {
          setRulings(response.data.rulings);
          localStorage.setItem('rulingsData', JSON.stringify(response.data.rulings))
        })
        .catch(function (error) {
          console.log(error);
      });
  }, []);

  useEffect( () => {
    fetchData()
  }, [fetchData]);

  const updateThump = (id, action) => {
    rulings.forEach( (ruling, index) => {
      if(ruling.id === id) {
        if( action === 'up') {
          const newRulings = [...rulings];
          newRulings.splice(index,1, {
            description: ruling.description,
            id: ruling.id,
            imageName: ruling.imageName,
            personName: ruling.personName,
            thumbsDown: ruling.thumbsDown,
            thumbsUp: ruling.thumbsUp+1,
          });
          setRulings(newRulings);
          localStorage.setItem('rulingsData', JSON.stringify(newRulings));
        } else {
          const newRulings = [...rulings];
          newRulings.splice(index,1,{
            description: ruling.description,
            id: ruling.id,
            imageName: ruling.imageName,
            personName: ruling.personName,
            thumbsDown: ruling.thumbsDown+1,
            thumbsUp: ruling.thumbsUp,
          });
          setRulings(newRulings);
          localStorage.setItem('rulingsData', JSON.stringify(newRulings));
        }
      }
    })
  };

  return (
    <>
      {
        rulings.map( (ruling, index) => {
          return index === 0 && 
            <Ruling
              personName={ruling.personName}
              description={ruling.description}
              key={ruling.id}
              thumbsUp={ruling.thumbsUp}
              thumbsDown={ruling.thumbsDown}
              id={ruling.id}
              imageName={ruling.imageName}
              category={ruling.category}
              updateThumb={updateThump}
              main={true}
            />;
        })
      }
      <Message />
      <h3 className="prev-rulings">Previous Rulings</h3>
      <section className="ruling-group">
        {
          rulings.map( (ruling, index) => {
            return index !== 0 &&
              <Ruling
                personName={ruling.personName}
                description={ruling.description}
                key={ruling.id}
                thumbsUp={ruling.thumbsUp}
                thumbsDown={ruling.thumbsDown}
                id={ruling.id}
                imageName={ruling.imageName}
                category={ruling.category}
                updateThumb={updateThump}
                main={false}
              />;
          })
        }
      </section>
      <SubmitName />
    </>
  );
}

export default Home;
