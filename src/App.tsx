import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditPage from "./pages/EditPage";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element = {<HomePage/>} />
        <Route path="/add-job" element = {<AddJobPage/>} />
        <Route path="/jobs" element = {<JobsPage/>} />
        <Route path="/jobs/:id" element = {<JobPage/>} />
        <Route path="/edit-job/:id" element = {<EditPage/>} />
        <Route path="*" element = {<NotFoundPage/>} />
      </Route>
    ) 
  );
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
