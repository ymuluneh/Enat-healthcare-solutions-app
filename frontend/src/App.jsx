import { Slide, ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import ManageBlogs from "./features/dashboard/components/ManageBlogs/ManageBlogs";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="colored" transition={Slide} />
      <AppRoutes />
      
    </>
  );
}

export default App;
