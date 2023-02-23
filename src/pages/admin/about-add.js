import { useEffect, router } from "@/lib";

import { addAbout } from "@/api/prduc";

const aboutAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const aboutName = document.querySelector("#title");
    const aboutThongtin = document.querySelector("#thongtin");
    const aboutSL = document.querySelector("#soluong");

    form.addEventListener("submit",function (e) {
        e.preventDefault(); 
   

        const formDAta = {
            tiltle: aboutName.value,
            thongtin: aboutThongtin.value,
            soluong: aboutSL.value
        };
        addAbout(formDAta).then(() => router.navigate("admin/about"));

    });
});
  return `<div>
  <h1>Thêm Thông tin</h1>
  <form id="form-add">
      <input type="text" id="title" class="border red"/>
      <input type="text" id="thongtin" class="border"/>
      <input type="text" id="soluong" class="border"/>
    
      <button>Thêm</button>
  </form>
</div>`;
}

export default aboutAdd