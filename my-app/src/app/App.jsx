import React from 'react';

import { Routing } from "../pages";
import "./style.css"

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};
export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom'

// import { Homepage } from '../pages/index'
// import { Notfoundpage } from '../pages/index'

// function App() {
//   return (
//     // <div>dwdwd</div>
//     <Routes>
//       <Route path="/" element={<Homepage />} />

//       <Route path="*" element={<Notfoundpage />} />
//     </Routes>
//   );
// }

// export default App;

