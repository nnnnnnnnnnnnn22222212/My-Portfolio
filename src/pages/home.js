import Header from "../components/Header";
import { useEffect, useState } from "@/lib";
import { getHome } from "@/api/prduc";
const HomePage = () => {
    const [homes, setHome] = useState([]);
    useEffect(() => {
        getHome().then((response) => {setHome(response.data)});
    }, []);
    return  `
    ${Header()}
    <header class="container header active" id="home">
        <div class="header-content">
            ${homes
                .map((home) => {
                    return `
                    <div class="left-header">
                    <div class="h-shape"></div>
                    <div class="image">
                        <img src="${home.img}" alt="">
                    </div>
                </div>
                <div class="right-header">
                    <h1 class="name">
                        Hi, Tôi tên là: <span>${home.tiltle}</span>
                        Là một Web Developer.
                    </h1>
                    <p>
                        ${home.details}
                    </p>
                    <div class="btn-con">
                    <a href="" class="main-btn">
                            <span class="btn-text">Download CV</span>
                             <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                    </div>
                    
                    
                    
                   
                    
                </div>
                    `
                })

            }
            
        </div>
    </header>`;
    
};

export default HomePage;
