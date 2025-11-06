import http from "../../interseptor/interseptor"

export async function getTopCourses () {
  
  try{
  const response = await http.get (
    "/Home/GetCoursesTop?Count=4")=>{
      
    }
 
  }
catch (err) {
    console.error(err);
  };
}