import { Navigate, Route, Routes } from "react-router";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import RegisterPage from "../Pages/Auth/RegisterPage/RegisterPage";
import LoginPage from "../Pages/Auth/LoginPage/LoginPage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import HomePage from "../Pages/HomePage/HomePage";
import AppLayout from "./AppLayout";
import PaidCoursePage from "../Pages/PaidCoursePage/PaidCoursePage";
import FreeCoursePage from "../Pages/FreeCoursePage/FreeCoursePage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import CourseVideoPage from "../Pages/Courses/CourseVideoPage/CourseVideoPage";
import Lecture from "../Pages/LectureTextPage/Lecture";
import TestPage from "../Pages/TestPage/TestPage";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import EditPage from "../Pages/EditPage/EditPage";
import AdminPage from "../Pages/AdminPage/AdminPage";
import CreateFreeCourse from "../Widgets/AdminWidgets/CreateFreeCourse/CreateFreeCourse";
import CreatePaidCourse from "../Widgets/AdminWidgets/CreatePaidCourse/CreatePaidCourse";
import ContactList from "../Widgets/AdminWidgets/ContactList/ContactList";
import RequestList from "../Widgets/AdminWidgets/RequestList/RequestList";
import VideoPlayer from "../Widgets/VideoPlayer/VideoPlayer";
import CreateVideoLecture from "../Widgets/AdminWidgets/CreateVideoLecture/CreateVideoLecture";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/admin-page/*" element={<AdminPage />}>
          <Route index element={<Navigate to="create-free" replace />} />
          <Route path="create-free" element={<CreateFreeCourse />} />
          <Route path="create-paid" element={<CreatePaidCourse />} />
          <Route path="contact-list" element={<ContactList />} />
          <Route path="request-list" element={<RequestList />} />
          <Route path="create-video-lecture" element={<CreateVideoLecture />} />
        </Route>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/course-free" element={<FreeCoursePage />} />
        <Route path="/course-paid" element={<PaidCoursePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/course-free-details/:id" element={<CourseVideoPage />} />
        <Route path="/watch/:id" element={<VideoPlayer />} />
        <Route path="/course-free-edit/:id" element={<EditPage />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/text-lecture" element={<Lecture />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/register-page" element={<RegisterPage />} />

      <Route path="/login-page" element={<LoginPage />} />

      <Route path="/forgot-password-page" element={<ForgotPasswordPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
