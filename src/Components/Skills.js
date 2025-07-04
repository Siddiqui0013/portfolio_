import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGithub, FaJava, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb,SiTailwindcss} from "react-icons/si";
import { TbBrandCSharp,TbBrandTypescript  } from "react-icons/tb";


const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        React: <FaReact/>,
        JavaScript: <DiJavascript1/>,
        Python: <FaPython/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Java : <FaJava/>,
        Tailwind : <SiTailwindcss/>,
        Github : <FaGithub/>,
        Bootstrap: <FaBootstrap/>,
        TypeScript : <TbBrandTypescript />,
        'C#' : <TbBrandCSharp/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
