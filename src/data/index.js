const menus = [
    { id: 1, icon: "fas fa-home", link: "/" },
    { id: 2, icon: "fas fa-user", link: "/about" },
    { id: 3, icon: "fas fa-briefcase", link: "/portfolio" },
    { id: 4, icon: "fas fa-newspaper", link: "/blogs" },
    { id: 5, icon: "fas fa-envelope-open", link: "/contact" },
];
const admin = [
    { id: 1, icon: "fas fa-home", link: "/admin" },
    { id: 2, icon: "fas fa-user", link: "/admin/about" },
    { id: 3, icon: "fas fa-briefcase", link: "/admin/projects" },
    { id: 4, icon: "fas fa-newspaper", link: "/admin/blogs" },
];

const projects = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Dat" },
            { id: 2, name: "Kien" },
            { id: 3, name: "Kien" },
        ],
    },
    { id: 2, name: "Dự án mẫu", author: "Đạt" },
    { id: 3, name: "Dự án Tốt nghiệp", author: "Kiên" },
];
export { projects, menus, admin };
