import {courses1, courses2} from "./course.js";
import Course from "../backend/models/Course.js";


let c=0;
const dd = Promise.all(courses1.map(async (item,i)=>{
        // console.log(val);
    if(item.title&&item.courseCode&&item.department&&item.brief&&item.credit){
        await Course.create(item)
        console.log(c++)
    }
}))

