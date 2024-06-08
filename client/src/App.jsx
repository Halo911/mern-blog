import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/mern-blog/" element={<Home />} />
        <Route path="/mern-blog/about" element={<About />} />
        <Route path="/mern-blog/projects" element={<Projects />} />
        <Route path="/mern-blog/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/mern-blog/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/mern-blog/create-post" element={<CreatePost />} />
          <Route
            path="/mern-blog/update-post/:postId"
            element={<UpdatePost />}
          />
        </Route>
        <Route path="/mern-blog/sign-up" element={<SignUp />} />
        <Route path="/mern-blog/sign-in" element={<SignIn />} />
        <Route path="/mern-blog/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
