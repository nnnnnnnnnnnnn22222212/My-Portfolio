import { deleteHome } from "@/api/prduc";
import { getHome } from "@/api/prduc";
import { useEffect, useState } from "@/lib";
import adminHD from "../../components/adminHD";

const adminHome = () => {
  const [Homes, setHome] = useState([]);
    useEffect(() => {
        getHome().then((response) => {setHome(response.data)});
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
              
                deleteHome(id).then(() => {
                    const newHome = Homes.filter((homee) => homee.id !== +id);
                    setHome(newHome);
                });
              
                
            });
        }
    });
  return `
  ${adminHD()};
  <div class="tong">
  <h1 class="nameee">Quản lý Home</h1> <br>
<div class="suamain">


<table   class="suakhung">
    <thead>
        <tr>
        <th>#</th>
            <th>Ảnh</th>
            <th>Tiêu đề</th>
            <th>Thông tin</th>
            
         
        </tr>
  </thead>
  <tbody>
    ${Homes
      .map((home,index) => {
          return `
          <tr>
          <td>${index+1}</td>
          <td>
          <img width="150px" height="100px" src="${home.img}" alt="">
          </td>
          <td>${home.tiltle}</td>
          <td>${home.details}</td>
          <td>
              <button data-id="${home.id}" class="btn btn-remove">Xóa</button>
             
          </td>
      </tr>
          `;
      }).join("")}
  
        
      
        
    </tbody>
    
</table>
</div>
<buttonclass="btn btn-them"><a href="admin/home/add">Thêm</a></button>
</div>
  `
}

export default adminHome