// import React from 'react';
// import { ScrollView } from 'react-native';
// import YoutubeUI from './tugas/tugas12/app';
// import LoginPage from './tugas/tugas13/LoginPage';
// import SignUpPage from './tugas/tugas13/SignUpPage';
// import AboutPage from './tugas/tugas13/AboutPage';
// import Main from './tugas/tugas14/components/Main';
// import Note from './tugas/tugas14/components/Note';
// import NoteApps from './tugas/tugas14/App';
// import Navi from './tugas/tugas15/TugasNavigation/index';
// import Index from './tugas/tugas15/index';
// import Quiz3 from './tugas/quiz3/Index';

// export default function App() {
//   return (
//             //  <YoutubeUI />
//             <ScrollView>
//             {/* <LoginPage /> */}
//             {/* <SignUpPage /> */}
//             {/* <AboutPage /> */}
//             {/* <NoteApps/> */}
//           {/* <Navi/> */}
//           <Quiz3/>

//             </ScrollView>
//   );
// }

import React from 'react';

import Quiz3 from './tugas/quiz3/Index';

export default class App extends React.Component {
  render() {
    return (
      <Quiz3 />
    );
  }
}

