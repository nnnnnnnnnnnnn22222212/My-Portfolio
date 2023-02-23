import { useEffect, useState } from "@/lib";
import adminHD from "../../components/adminHD";
import axios from 'axios';
import { getPRD  } from "@/api/prduc";
import { deletePRD  } from "@/api/prduc";
import AdminProjectAddPage from "./projects-add";

const adminDelete = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getPRD().then((response) => {setProjects(response.data)});
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                // deletePRD(id).then(() => {
                //     const newsProject = projects.filter((project) => project.id != id);
                //     setProjects(newsProject);
                // });
                deletePRD(id).then(() => {
                    const newProjects = projects.filter((project) => project.id !== +id);
                    setProjects(newProjects);
                });
              
                
            });
        }
    });
  return `
    ${adminHD()}
    <div class="tong">
    <h1 class="nameee">Quản lý Projects</h1> <br>
  <div class="suamain">
  
 
  <table   class="suakhung">
      <thead>
          <tr>
              <th>ID</th>
              <th>Tên Dự an</th>
              <th>Anh</th>
              <th>link github</th>
          </tr>
    </thead>
    <tbody>
      ${projects
        .map((project,index) => {
            return `
            <tr>
            <td>${index+1}</td>
            <td>${project.name}</td>
            <td>
            <img width="150px" height="100px" src="${project.img}" alt="">
            </td>
            <td>${project.link}</td>
            <td>
                <button data-id="${project.id}" class="btn btn-remove">Xóa</button>
               
            </td>
        </tr>
            `;
        }).join("")}
    
          
      
          
      </tbody>

  </table>
  </div>
  <buttonclass="btn btn-them"><a href="/portfolio/add">Thêm</a></button>
  </div>
  `
}

export default adminDelete