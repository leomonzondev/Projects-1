import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// const mercadopago = require("mercadopago")

// import { RandomUser } from './components/RandomUser/RandomUser';

// mercadopago.configure({
//   access_token: 'TEST-7430641751926020-100720-c489157b0f895aa6998329fd5a6bb47b-220986136'
// })


function BookList() {
  return (
    <section className="booklist">
      <Book number="8333"/>
      <Book job="developer"/>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = ({props}) => {

  const title = "Alien Covenant"

  return <article>
    <img className="imgs" alt="alien" src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/alien-covenant/119545296-5-esl-ES/Alien-Covenant.jpg"></img>
    <h1>{ title }</h1>
    <h4>Riddley Scott</h4>
    <p>{ props.job }</p>
    <p> { props.number } </p>
  </article>
}






ReactDOM.render(
  <React.StrictMode>
    {/* <RandomUser/> */}
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);


