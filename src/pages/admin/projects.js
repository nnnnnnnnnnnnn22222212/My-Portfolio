import { useEffect, useState } from "@/lib";
import Header from "../../components/Header";
import axios from 'axios';
import { getPRD  } from "@/api/prduc";
import { deletePRD  } from "@/api/prduc";
const AdminProjectsPage = () => {

 
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getPRD().then((response) => {setProjects(response.data)});
    }, []);
   

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
                    <h3>${project.name}</h3>
                    <div class="icons">
                        <a href="${project.link}" class="icon">
                            <i  class="fab fa-github"></i>
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


