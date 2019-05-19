import React from 'react';

import Hero from '../components/Hero';
import BookList from '../components/Book-List';

function Home() {
  return (
    <div>
      <Hero />
      <main className="content">
        <BookList />
      </main>
    </div>
  );
}

export default Home;
