import Header from "../components/Header";

const AboutPage = () => {
    return `
        ${Header()}
    <main>
        <section class="container about" id="about">
            <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
            </div>
            <div class="about-container">
                <div class="left-about">
                    <h4>Thông tin của tôi</h4>
                    <p>
                        Hiện tại tôi là sinh viên kì 3 trường Cao Đẳng FPT Polytechnic.Mình bắt đầu học lập trình từ
                        năm ngoái và mình rất thích code. Ngoài việc học ở trường mình còn học thêm ở các trang mạng nhu
                        F8 và các kênh code ở nền tảng youtube.
                    </p>
                    <div class="btn-con">
                        <a href="#" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i  class="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div class="right-about">
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">2-3</p>
                            <p class="small-text">Projects </p> 
                        </div>
                    </div>
                   
                </div>
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
