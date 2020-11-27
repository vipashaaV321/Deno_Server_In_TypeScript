import { Application ,Router} from "https://deno.land/x/oak@v6.3.2/mod.ts";

//model
interface Course{
    name:string,
    price:number,
    certification:boolean

}

//Data
let courses:Array<Course>=[
    {
        name:"Deno",
        price:5000,
        certification:false
    },
    {
        name:"Nextjs",
        price:7000,
        certification:false
    },{
        name:"Redux",
        price:15000,
        certification:true
    },{
        name:"Brainjs",
        price:2000,
        certification:false
    },{
        name:"gatsby",
        price:1000,
        certification:false
    },
]

//controllers
export const getCourses=({response}:{response:any})=>{
    response.body=courses
}

export const addCourses=async({request,response}:{request:any,response:any})=>{
    const body=await request.body()
    const course:Course=body.value;

    courses.push(course)
    response.body={status:"added"}
    response.status=200
}

const router=new Router()

const PORT=4300;
const app=new Application();
app.use(router.routes())
app.use(router.allowedMethods())


//routes
router.get("/",({request,response}:{request:any,response:any})=>{
    response.body="API"
})

router.get("/getCourse",getCourses)
router.post("/addCourse",addCourses)

console.log(`server is running on port ${PORT}`)

app.listen({port:PORT})