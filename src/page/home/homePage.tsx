import './homePage.css';

import { Counter } from '../../component';

function HomePage() {
  return (
    <div className="homePage">
      <header className="homePage-header">
        <p>Welcome to your react/redux boilerplate!</p>
        <Counter />
      </header>
    </div>
  );
}

export { HomePage };
