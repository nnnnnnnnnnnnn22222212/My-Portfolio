

import BlogAdd from "@/pages/admin/blog-add";
import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import AdminProjectsPage from "./src/pages/admin/projects";
import AdminProjectAddPage from "./src/pages/admin/projects-add";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import NotFoundPage from "./src/pages/not-found";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";
import Blogs from "@/pages/admin/blogs";
import adminDelete from "@/pages/admin/admin-delete";
import adminAbout from "@/pages/admin/admin-about";
import adminBlog from "@/pages/admin/admin-blog";
import adminHome from "@/pages/admin/admin-home";
import homeAdd from "@/pages/admin/home-add";
import aboutAdd from "@/pages/admin/about-add";
import aboutEdit from "@/pages/admin/about-edit";
// import AdminProjectEditPage from "@/pages/admin/projects-edit";


const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:projectId", ({ data }) => render(() => ProjectDetailPage(data), app));
router.on("/post/:postId", () => render(PostDetailPage, app));
router.on("/posts", () => render(PostsPage, app));
// router.on("/admin/projects/:projectId/edit", ({ data }) =>
//     render(() => AdminProjectEditPage(data), app)
// );
router.on("/admin/about/:AboutId/edit", ({ data }) => render(() => aboutEdit(data), app));
router.on("/admin/projects", () => render(adminDelete, app))
router.on("/portfolio", () => render(AdminProjectsPage, app));
router.on("/portfolio/add", () => render(AdminProjectAddPage, app));
router.on("/blogs", () => render(Blogs, app));
router.on("/blog/add",() => render(BlogAdd, app));
router.on("admin", () => render(adminHome, app));
router.on("admin/about", () => render(adminAbout, app));
router.on("admin/blogs", () => render(adminBlog, app));
router.on("admin/home/add", () => render(homeAdd, app));
router.on("admin/about/add", () => render(aboutAdd, app));




router.notFound(() => render(NotFoundPage, app));

router.resolve();

