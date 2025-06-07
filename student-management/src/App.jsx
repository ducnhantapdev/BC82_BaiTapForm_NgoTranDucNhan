Sure, here's the proposed content for the file `src/App.jsx`:

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import StudentSearch from './components/StudentSearch';

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Student Management System</h1>
        <StudentSearch />
        <StudentForm />
        <StudentList />
      </div>
    </Provider>
  );
}

export default App;