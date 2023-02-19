import Header from "../components/Header";

const ContactPage = () => {
    return `
        ${Header()}
        <section class="container contact" id="contact">
        <div class="contact-container">
            <div class="main-title">
                <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
            </div>
            <div class="contact-content-con">
                <div class="left-contact">
                    <h4>Liện hệ tại đây</h4>
                   
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Địa chỉ</span>
                            </div>
                            <p>
                                : HA NOI, NAM TU LIEM, XUÂN PHƯƠNG
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <i class="fas fa-envelope"></i>
                                <span>Email</span>
                            </div>
                            <p>
                                <span>: son3332003@gmail.com</span>
                            </p>
                        </div>
                        
                        <div class="contact-item">
                            <div class="icon">
                                <i class="fas fa-user-graduate"></i>
                                <span>SDT</span>
                            </div>
                            <p>
                                <span>: 0822022138</span>
                            </p>
                        </div>
                   
                    </div>
                    <div class="contact-icons">
                        <div class="contact-icon">
                            <a href="www.facebook.com" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                           
                            <a href="#" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div class="right-contact">
                    <form action="" class="contact-form">
                        <div class="input-control i-c-2">
                            <input type="text" required placeholder="YOUR NAME">
                            <input type="email" required placeholder="YOUR EMAIL">
                        </div>
                        <div class="input-control">
                            <input type="text" required placeholder="ENTER SUBJECT">
                        </div>
                        <div class="input-control">
                            <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                        </div>
                        <div class="submit-btn">
                            <a href="#" class="main-btn">
                                <span class="btn-text">Download CV</span>
                                <span class="btn-icon"><i class="fas fa-download"></i></span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>`;
};

export default ContactPage;
