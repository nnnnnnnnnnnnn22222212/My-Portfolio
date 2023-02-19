import { useEffect, router } from "@/lib";
const BlogsAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const blogImg = document.querySelector("#img");
        const blogTieude = document.querySelector("#tieude");
        const blogChitiet = document.querySelector("#chitiet");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const formData = {
                img: blogImg.value,
                tieude: blogTieude.value,
                chitiet: blogChitiet.value
            };
            
            fetch("http://localhost:3000/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/blogs"))
                .catch((error) => console.log(error));
        });
    });
    return `<div>
        <h1>Thêm dự án</h1>
        <form id="form-add">
            <input type="text" id="img" class="border"/>
            <input type="text" id="tieude" class="border red"/>
            <input type="text" id="chitiet" class="border"/>
          
            <button>Thêm</button>
        </form>
    </div>`;
};

export default BlogsAdd;