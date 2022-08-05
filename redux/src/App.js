
import Navbar from "./Components/Navbar";
import {Provider} from 'react-redux';
import store from "./store";
import UserList from "./Components/Users";

function App() {

  return (
    <Provider store={store}>
      <Navbar title="Redux App"/>
      <UserList />
    </Provider>
  )
}

export default App;
