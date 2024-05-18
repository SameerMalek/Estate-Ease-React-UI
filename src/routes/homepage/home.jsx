import './home.scss';
import SearchBar from "../../components/searchBar/searchBar.jsx"
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';
export default function home()
 {
    const {currentUser} = useContext(AuthContext)

    console.log(currentUser)
  return (
      <div className="home">
        <div className="textContainer">
           <div className="wrapper">
            <h1 className='title'>Unlock Your Dream Home with EstateEasy: Find Your Perfect Rental Today!</h1>
            <p>Discover your perfect rental effortlessly with EstateEasy, your go-to platform for hassle-free home hunting, offering a diverse range of properties, intuitive search filters, and reliable support.</p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Awards Gained</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
           </div>
        </div>
        <div className="imageContainer">
            <img src="/bg.png" alt="backgroundImage"/>
        </div>
      </div>
   
  )
}
