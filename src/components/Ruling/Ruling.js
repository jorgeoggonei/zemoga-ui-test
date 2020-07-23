import React from 'react';
import './ruling.scss';

function Ruling(props) {
  const {
    personName,
    description,
    thumbsDown,
    thumbsUp,
    updateThumb,
    id,
    imageName,
    main,
    category
  } = props;

  const newThumbVal = (e) => {
    updateThumb(id, e.currentTarget.getAttribute('data-action'));
  };

  const positiveValue = thumbsUp !== 0 ? Math.round(thumbsUp*100/(thumbsUp+thumbsDown)) : (thumbsDown !== 0 ? 0 : 50);
  const negativeValue = thumbsDown !== 0 ? Math.round(thumbsDown*100/(thumbsUp+thumbsDown)) : (thumbsUp !== 0 ? 0 : 50);

  return (
    <div className={`ruling ${ main ? 'full' : 'half' }` }>
      <div className={`ruling__image ${ main ? 'full' : 'half' }`}>
        {
          main ?
            <>
              <img src={`images/rulings/${imageName}_big.jpg`} alt={personName} />
              <div className="percentage-bar">
                <span className="percentage-bar__positive" style={{flexBasis: positiveValue+'%'}}>
                  <img className="thumb thumb--up" src={`images/thumb.png`} alt="positive" />
                  <span className="percentage-bar__number">{ positiveValue }%</span>
                </span>
                <span className="percentage-bar__negative" style={{flexBasis: negativeValue+'%'}}>
                  <span className="percentage-bar__number">{ negativeValue }%</span>
                  <img className="thumb thumb--down" src={`images/thumb.png`} alt="negative" />
                </span>
              </div>
            </>
            :
            <img src={`images/rulings/${imageName}_small.jpg`} alt={personName} />
        }
      </div>
      <div className={`ruling__info ${ main ? 'full' : 'half' }` }>
        {
          main &&
            <p className={`ruling__info__opinion ${ main ? 'full' : 'half' }` }>What's your opinion on</p>
        }
        <h2 className={`ruling__info__person-name ${ main ? 'full' : 'half' }`}>
          { !main && 
            <button className={`thumb thumb thumb--${thumbsUp > thumbsDown ? 'up' : (thumbsUp < thumbsDown ? 'down' : 'neutral')}`}>
              <img src={`images/thumb.png`} alt="result" />
            </button>
          }
          <span className={`ruling__info__person-name__text ${ main ? 'full' : 'half' }`}>{personName}</span>
        </h2>
        {
          !main &&
            <p className={`ruling__info__date ${ main ? 'full' : 'half' }`}><strong>1 month ago</strong> in <strong>{category}</strong></p>
        }
        <p className={`ruling__info__description ${ main ? 'full' : 'half' }`}>{description}</p>
        { main &&
          <>
            <p className="ruling__info__veredict">What's your veredict?</p>
          </>
        }
        <div className={`ruling__thumbs ${ main ? 'full' : 'half' }`}>
          <button className="ruling__thumbs__thumb thumb thumb--up" data-action="up" onClick={newThumbVal}><img src={`images/thumb.png`} alt="positive" /></button>
          <button className="ruling__thumbs__thumb thumb thumb--down" data-action="down" onClick={newThumbVal}><img src={`images/thumb.png`} alt="negative" /></button>
        </div>
        {
          !main &&
            <div className="percentage-bar">
              <span className="percentage-bar__positive" style={{flexBasis: positiveValue+'%'}}>
                <img className="thumb thumb--up" src={`images/thumb.png`} alt="positive" />
                <span className="percentage-bar__number">{ positiveValue }%</span>
              </span>
              <span className="percentage-bar__negative" style={{flexBasis: negativeValue+'%'}}>
                <span className="percentage-bar__number">{ negativeValue }%</span>
                <img className="thumb thumb--down" src={`images/thumb.png`} alt="negative" />
              </span>
            </div>
        }
      </div>
    </div>
  );
}

export default Ruling;