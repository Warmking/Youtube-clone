import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from './utensils/store'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer"

const router = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
  {
    path:'/watch',
    element:<WatchVideo/>
  }
]
}])

function App() {
  return (
    <>
      <Provider store={store} >
        <div>
          <Header />
          <RouterProvider router={router}>
            <Body />
          </RouterProvider>
        </div>
      </Provider>
    </>
  );
}

export default App;
