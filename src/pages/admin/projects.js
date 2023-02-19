import { useEffect, useState } from "@/lib";
import Header from "../../components/Header";

const AdminProjectsPage = () => {

 
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                
                fetch(`http://localhost:3000/projects/${id}`, { method: "DELETE" }).then(() => {
                    const newsProject = projects.filter((project) => project.id != id);
                    setProjects(newsProject);
                });
            });
        }
    });

    return `
    ${Header()}
     <section class="container" id="portfolio">
    <div class="main-title">
        <h2>My <span>Projects</span><span class="bg-text">My Work</span></h2>
    </div>
    <p class="port-text">
        Đây là một vài dự án của tôi làm được của bản thân tôi.
    </p>
    <div class="portfolios">
        ${projects
            .map((project,index) => {
                return `
                <div class="portfolio-item" data-id="${index+1}">
                <div class="image">
                    <img src="${project.img}" alt="">
                </div>
                <div class="hover-items">
                    <h3>Project Source</h3>
                    <div class="icons">
                        <a href="${project.link}" class="icon">
                            <i  class="fab fa-github"></i>
                        </a>
                        
                    </div>
                    <div class="icons">
                        <a class="icon">
                        <button data-id="${project.id}" class="btn btn-remove">Xóa</button>
                        </a>
                        
                    </div>
                </div>
            </div>
                `
            }  ).join("")

            

        }
        

        
    </div>
</section>`;
};

export default AdminProjectsPage;


