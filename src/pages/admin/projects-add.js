import { useEffect, router } from "@/lib";
import axios from 'axios';
import { addPRD  } from "@/api/prduc";
import { fromJSON } from "postcss";
const AdminProjectAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#img");
        const projectlink = document.querySelector("#link");

        form.addEventListener("submit", async function (e) {
            e.preventDefault(); 
            const urls= await uppAnh(projectAuthor.files);

            const formDAta = {
                name: projectName.value,
                img: urls,
                link: projectlink.value
            };
            addPRD(formDAta).then(() => router.navigate("/admin/projects"));
    
        });
    });

    const uppAnh = async (files) => {
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
            <div>
            <label>Tên dư án</label>
            <input type="text" id="project-name" class="border"/>
            </div>
            <div>
                <label>Anh</label>
                <input type="file" id="img" multiple class="border"/>
            </div>
            <div>
            <label>link git</label>
            <input type="text" id="link" class="border"/>
            </div>
            
          
            <button>Thêm</button>
        </form>
    </div>`;
};

export default AdminProjectAddPage;
