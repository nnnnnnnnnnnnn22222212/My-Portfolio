import { useEffect, router } from "@/lib";
import axios from 'axios';
const AdminProjectAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#img");
        const projectlink = document.querySelector("#link");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); 
         
          
            const formData = {
                name: projectName.value,
                img: projectAuthor.value,
                link: projectlink.value
            };
          
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/portfolio"))
                .catch((error) => console.log(error));
        });
    });
    const uppAnh = (files) =>{
        const nameClou = "dgsjhfk9l";
        const pre_name = "uppload";
        const Foder_Name = "ECMA";
        const url = [];
        const api = `https://api.cloudinary.com/v1_1/${nameClou}/image/upload`;
        const fData = new formData();
        fData.append("uppload_preset", pre_name);
        fData.append("folder", Foder_Name);
        for(const file of files){
            fData.append("file",file);
            axios.post(api, fData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => console.log(response));
        }
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
