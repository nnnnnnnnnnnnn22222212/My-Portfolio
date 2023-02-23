import Header from "../components/Header";
import { useEffect, useState } from "@/lib";
import { getAbout } from "@/api/prduc";
const AboutPage = () => {
    const [abouts, setAbout] = useState([]);
    useEffect(() => {
        getAbout().then((response) => {setAbout(response.data)});
    }, []);
   
    return `
        ${Header()}
    <main>
        <section class="container about" id="about">
            <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
            </div>
            <div class="about-container">
                ${abouts
                    .map((about) =>{
                        return `
                        <div class="left-about">
                        <h4>${about.tiltle}</h4>
                        <p>
                            ${about.thongtin}
                        </p>
                   
                    </div>
                    <div class="right-about">
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">${about.soluong}</p>
                            <p class="small-text">Projects </p> 
                        </div>
                    </div>
                   
                </div>
                        `
                       
                    })

                }
                
               
            </div>
            <div class="about-stats">
                <h4 class="stat-title">My Skills</h4>
                <div class="progress-bars">
                    <div class="progress-bar">
                        <p class="prog-title">html5</p>
                        <div class="progress-con">
                            <p class="prog-text">50%</p>
                            <div class="progress">
                                <span class="html"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">css3</p>
                        <div class="progress-con">
                            <p class="prog-text">70%</p>
                            <div class="progress">
                                <span class="css"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">javascript</p>
                        <div class="progress-con">
                            <p class="prog-text">60%</p>
                            <div class="progress">
                                <span class="js"></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </main>
    `;
};

export default AboutPage;
