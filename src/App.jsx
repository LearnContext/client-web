import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppLayout } from "./layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { CoursePage } from "./pages/CoursePage";
import { ContestPage } from "./pages/ContestPage";
import { CourseLayout } from "./layouts/CourseLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminUsers } from "./pages/admin/Admin-Users";
import { AdminContacts } from "./pages/admin/Admin-Contacts";
import { AdminUserUpdate } from "./pages/admin/Admin-User-Update";
import { AdminCourses } from "./pages/admin/Admin-Courses";
import { Contact } from "./pages/Contact";
import { AdminCoursesUpload } from "./pages/admin/Admin-Courses-Upload";
import { AdminCourseUpdate } from "./pages/admin/Admin-Course-Update";
import { AdminCourseView } from "./pages/admin/Admin-Course-View";
import { CourseView } from "./pages/CourseView";
import { CoursePlaylist } from "./pages/CoursePlaylist";
import { AboutPage } from "./pages/AboutPage";
import { FrontendPlaylist } from "./pages/courses/FrontendPlaylist";
import { BackendPlaylist } from "./pages/courses/BackendPlaylist";
import { ReactNativePlaylist } from "./pages/courses/ReactNativePlaylist";
import { ReactPlaylist } from "./pages/courses/ReactPlaylist";
import { MernPlaylist } from "./pages/courses/MernPlaylist";
import { PythonPlaylist } from "./pages/courses/PythonPlaylist";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="courses" element={<CourseLayout />}>
              {/* <Route path="" element={<CoursePage />} /> */}
              <Route path="dashboard" element={<CoursePage />} />
              <Route path=":id/view" element={<CourseView />} />
              <Route path="playlist" element={<CoursePlaylist />} />
              <Route path="frontend-development" element={<FrontendPlaylist />} />
              <Route path="backend-development" element={<BackendPlaylist />} />
              <Route path="react-native" element={<ReactNativePlaylist />} />
              <Route path="learn-react" element={<ReactPlaylist />} />
              <Route path="mern" element={<MernPlaylist />} />
              <Route path="python-language" element={<PythonPlaylist />} />
            </Route>

            <Route path="/contest" element={<ContestPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>

          {/* Admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/:id/edit" element={<AdminUserUpdate />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="course/upload" element={<AdminCoursesUpload />} />
            <Route path="course/:id/edit" element={<AdminCourseUpdate />} />
            <Route path="course/:id/view" element={<AdminCourseView />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App;