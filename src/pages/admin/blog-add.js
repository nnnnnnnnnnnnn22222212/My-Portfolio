import { useEffect, router } from "@/lib";
import axios from 'axios';
import { addBlogs } from "@/api/prduc";
const BlogsAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const blogAnh = document.querySelector("#img");
        const blogTieude = document.querySelector("#tieude");
        const blogChitiet = document.querySelector("#chitiet");

        form.addEventListener("submit", async function (e) {
            e.preventDefault(); 
           const urll = await uppAnhBlog(blogAnh.files)
            const formDAta = {
                img: urll,
                tieude: blogTieude.value,
                chitiet: blogChitiet.value
            };
            addBlogs(formDAta).then(() => router.navigate("admin/blogs"));
            
            // fetch("http://localhost:3000/blogs", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(formDAta),
            // })
            //     .then(() => router.navigate("/blogs"))
            //     .catch((error) => console.log(error));
        });
    });
    const uppAnhBlog = async (files) => {
        const CLOUD_NAME = "dtmgrjrhi";
        const PRESET_NAME = "test-upp";
        const FODER_NAME = "ECMA";
        const url = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FODER_NAME);
      for(const file of files){
        formData.append("file", file);
        const respon = await axios
            .post(api, formData, {
            headers: {
                 "Content-Type": "multipart/form-data",

             },
        });
        url.push(respon.data.secure_url);
        
      }
    
      return url;
    }
    return `<div>
        <h1>Thêm dự án</h1>
        <form id="form-add">
        <input type="file" id="img" multiple class="border red"/>
            <input type="text" id="tieude" class="border red"/>
            <input type="text" id="chitiet" class="border"/>
          
            <button>Thêm</button>
        </form>
    </div>`;
};

export default BlogsAdd;