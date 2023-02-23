import { deleteAbout } from "@/api/prduc";
import { getAbout } from "@/api/prduc";
import { useEffect, useState } from "@/lib";
import adminHD from "../../components/adminHD";
const adminAbout = () => {
  const [Abouts, setAbout] = useState([]);
    useEffect(() => {
        getAbout().then((response) => {setAbout(response.data)});
    }, []);
    
  return `
  ${adminHD()}
  <div class="tong">
  <h1 class="nameee">Quản lý About</h1> <br>
<div class="suamain">


<table   class="suakhung">
    <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Thông tin</th>
            <th>Số lượng</th>
        </tr>
  </thead>
  <tbody>
    ${Abouts
      .map((about,index) => {
          return `
          <tr>
          <td>${index+1}</td>
          <td>${about.tiltle}</td>
          <td>${about.thongtin}</td>
          <td>${about.soluong}</td>
         
          <td>
              <button  class="btn"><a href="">Sửa</a></button>
             
          </td>
      </tr>
          `;
      }).join("")}
  
        
      
        
    </tbody>
    
</table>
</div>
<button class="btn btn-them"><a href="admin/about/add">Thêm</a></button>
</div>
  `
}

export default adminAbout