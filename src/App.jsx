import './index';

import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Favorite } from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import { NoFound } from './components/NoFound/NoFound';
import { List } from './components/List/List';

const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorite />} />
            <Route path='/list/:listId' element={<List />} />
            <Route path='*' element={<NoFound />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
};

export default App;
