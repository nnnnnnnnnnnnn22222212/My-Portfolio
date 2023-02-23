import { useEffect, router } from "@/lib";
import axios from 'axios';
import { addHome } from "@/api/prduc";

const homeAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const homeAnh = document.querySelector("#img");
    const homeTieude = document.querySelector("#title");
    const homeChitiet = document.querySelector("#details");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); 
       const urll = await uppAnhHome(homeAnh.files)
        const formDAta = {
            img: urll,
            tiltle: homeTieude.value,
            details: homeChitiet.value
        };
        addHome(formDAta).then(() => router.navigate("admin"));
        
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
const uppAnhHome = async (files) => {
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
          <label>Anh</label>
          <input type="file" id="img" multiple class="border"/>
      </div>
      <div>
      <label>Tiêu đề</label>
      <input type="text" id="title" class="border"/>
      </div>
      <div>
      <label>Chi tiết</label>
      <input type="text" id="details" class="border"/>
      </div>
      
    
      <button>Thêm</button>
  </form>
</div>`;
}

export default homeAdd