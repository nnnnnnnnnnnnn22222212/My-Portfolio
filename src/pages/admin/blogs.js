import { useEffect, useState } from "@/lib";
import Header from "../../components/Header";
import axios from 'axios';

const Blogs = () => {
    const [Blog, setBlog] = useState([])
    useEffect(() =>{
        axios.get("http://localhost:3000/blogs").then((response)=>{setBlog(response.data)})
    }, [])
    
  return `
    ${Header()}
    <section class="container" id="blogs">
    <div class="blogs-content">
        <div class="main-title">
            <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
        </div>
        <div class="blogs">
            ${Blog
                .map((blog,index)=>{
                    return`
                    <div class="blog" data-id="${index+1}">
                    <img src="${blog.img}" alt="">
                    <div class="blog-text">
                        <h4>
                           ${blog.tieude}
                        </h4>
                        <p>
                            ${blog.chitiet}</p>
                    </div>
                </div>
                    `
                }).join("")

            }
            
          
  `
}

export default Blogs