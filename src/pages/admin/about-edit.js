import { getAbout, updateAbout } from "@/api/project";
import { useEffect, router, useState } from "@/lib";
const aboutEdit = ({ AboutId }) => {
    console.log(AboutId);
    const [abouts, setAbout] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setAbout(await getAbout(AboutId));

            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const aboutTT = document.querySelector("#about-tt");
        const aboutTTin = document.querySelector("#about-ttin");
        const Soluong = document.querySelector("#about-sl");

        form.addEventListener("submit", async function (e) {
            e.preventDefault(); // disable reload
            try {
                const formData = {
                    id: AboutId,
                    tiltle: aboutTT.value,
                    thongtin: aboutTTin.value,
                    soluong: Soluong.value
                };
                await updateAbout(formData);
                router.navigate("/admin/about");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `<div>
        <h1>Edit dự án</h1>
        <form id="form-edit">
            <input type="text" id="about-tt" class="border" value="${abouts.tiltle}"/>
            <input type="text" id="about-ttin" class="border" value="${abouts.thongtin}"/>
            <input type="text" id="about-sl" class="border" value="${abouts.soluong}"/>
            <button>Sửa</button>
        </form>
    </div>`;
};

export default aboutEdit;