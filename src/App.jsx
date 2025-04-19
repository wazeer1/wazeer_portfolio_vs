import "./App.css";
import "./tailwind.css";
import AppProvider from "./app/AppProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
