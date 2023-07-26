import React from 'react';
import './Article.scss';
import play from '../../../images/icon-play.svg';
import movieData from './data.json';

export default function Article() {
  const moveSite = (site) => {
    if (site !== 'none') {
      window.open(site, '_blank');
    } else {
      alert('준비중...');
    }
  };

  return (
    <article className='cardArticle'>
      {movieData?.map((data) => {
        return (
          <section className='card'>
            <div className='textGroup'>
              <img className='poster' alt='poster' src={require(`${data.image}`)}></img>
              <h3 className='title'>{data.title}</h3>
              <ol className='info'>
                <div className='subjectGroup'>
                  <li className='subjectList'>
                    <span className='infoPadding type'>개요</span>
                    <span className='content subject'>{data.summary}</span>
                  </li>
                  <li>
                    <span className='infoPadding type'>평점 🧡</span>
                    <span className='content'>{data.score}</span>
                  </li>
                </div>
                <li>
                  <span className='infoPadding type'>개봉</span>
                  <span className='content'>{data.open}</span>
                </li>
                <li>
                  <span className='infoPadding type'>출연</span>
                  <span className='content'>{data.character}</span>
                </li>
              </ol>
            </div>
            <div className='btnGroup'>
              <button className='btnTicketing' onClick={() => moveSite(data.link)}>
                예매하기
              </button>
              <button className='btnPreview' disabled>
                <img src={play} alt='playBtn' />
                예고편
              </button>
            </div>
          </section>
        );
      })}
    </article>
  );
}
