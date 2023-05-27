// Dependencies
import { createRoot } from 'react-dom/client';

// Components
import { Pet } from './components/Pet';
import { SearchPrams } from './components/SearchParams';

const App = () => (
  <div>
    <h1>Adopt Me!</h1>
    <SearchPrams />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
