import Header from "../components/Header";

const HomePage = () => {
    return  `
    ${Header()}
    <header class="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img src="me.jpg" alt="">
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, Tôi tên là: <span>Nguyễn Lê Trường Sơn</span>
                    Là một Web Developer.
                </h1>
                <p>
                    Tôi là một Nhà phát triển web, tôi thích tạo các trang web đẹp.
                </p>
                <div class="btn-con">
                <a href="http://localhost:5173/#/123" class="main-btn">
                        <span class="btn-text">Download CV</span>
                         <span class="btn-icon"><i class="fas fa-download"></i></span>
                </a>
                </div>
                
                
                
               
                
            </div>
        </div>
    </header>`;
    
};

export default HomePage;
