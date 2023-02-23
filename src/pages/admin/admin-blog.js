import { deleteBlog } from "@/api/prduc";
import { getBlog } from "@/api/prduc";
import { useEffect, useState } from "@/lib";
import adminHD from "../../components/adminHD";

const adminBlog = () => {
  const [Blogs, setBlog] = useState([]);
    useEffect(() => {
        getBlog().then((response) => {setBlog(response.data)});
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
              
                deleteBlog(id).then(() => {
                    const newBlog = Blogs.filter((blogg) => blogg.id !== +id);
                    setBlog(newBlog);
                });
              
                
            });
        }
    });
  return `
  ${adminHD()}
  <div class="tong">
  <h1 class="nameee">Quản lý Blog</h1> <br>
<div class="suamain">


<table   class="suakhung">
    <thead>
        <tr>
            <th>ID</th>
            <th>Tên Blog</th>
            <th>Thông tin</th>
            <th>Anh</th>
            
         
        </tr>
  </thead>
  <tbody>
    ${Blogs
      .map((blog,index) => {
          return `
          <tr>
          <td>${index+1}</td>
          <td>${blog.tieude}</td>
          <td>${blog.chitiet}</td>
          <td>
          <img width="150px" height="100px" src="${blog.img}" alt="">
          </td>
         
          <td>
              <button data-id="${blog.id}" class="btn btn-remove">Xóa</button>
             
          </td>
      </tr>
          `;
      }).join("")}
  
        
      
        
    </tbody>
    
</table>
</div>
<buttonclass="btn btn-them"><a href="/blog/add">Thêm</a></button>
</div>
  `
}

export default adminBlog