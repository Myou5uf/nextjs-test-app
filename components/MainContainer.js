import React from 'react';
import A from './A';
import Head from 'next/head';

const MainContainer = ({children, keywords, title}) => {
  return (
    <>
      <Head>
        <meta keywords={"Nextjs - The React Framework for the Web " + keywords}></meta>
        <title>{title}</title>
      </Head>
      <style jsx>
        {`
          .navbar {
            background-color: orange;
            padding: 15px;
          }
          
          .navbar__list {
            display: flex;
            list-style-type: none;
            column-gap: 24px;
          }
          
          .navbar__link {
            text-decoration: none;
            color: #fff;
            font-size: 20px;
          }
        `}
      </style>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <A href="/">Главная</A>
          </li>
          <li>
            <A href="/users">Список пользователей</A>
          </li>
        </ul>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
};

export default MainContainer;
