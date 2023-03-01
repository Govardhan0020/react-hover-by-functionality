import React from "react";
import MappingPage from "./MappingPage";
import "./style.css";

export default function App() {
 const ArrData =[
   { Name:"Gopal", place:"HYD" ,job:"java developer "},
   { Name:"Rajesh", place:"HYD" ,job:"React js   developer "},
   { Name:"Govardhan", place:"HYD" ,job:"web developer "},
   { Name:"Nidhi", place:"HYD" ,job:" AWS developer "},
 ]

  return (
    <div>
 <MappingPage Data={ArrData} />
    </div>
  );
}
