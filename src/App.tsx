import { Outlet } from 'react-router';
import './App.css'
import Layout from './components/layout';

function App() {

  return (
    <div>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </div>
  )
}

export default App;
