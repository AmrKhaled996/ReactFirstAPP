
import StylizedAtom from "../assets/react-core-concepts.png"
function randomValue(max){
    return Math.floor(Math.random()*(max))
  }
  
  function Header(){
    const dynamicValues=[ "fundamental", "core", "crucial" ]
   
    

   const value21 = dynamicValues[randomValue(dynamicValues.length)];
  return(
  
        <header>
          <img src={StylizedAtom} alt="Stylized atom" />
          <h1>React Essentials </h1>
          <p>
            {value21} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
  
  )
  
  }
  export default Header;