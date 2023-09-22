import {Container, Pencil} from "./style"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
export function CardAdmin(){
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  function handleDish(id){
    navigate(`/dishes/${id}`)
  }
  return(
    <Container>

      <Pencil
      //  onClick={() => handleDish()}
      >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7514 4.81033L21.1896 12.2486M7.99997 25H2.06262C1.7808 25 1.51052 24.888 1.31124 24.6888C1.11196 24.4895 1.00001 24.2192 1.00001 23.9374V18C0.999523 17.8621 1.02626 17.7253 1.07868 17.5977C1.1311 17.4701 1.20818 17.354 1.30551 17.2562L17.2447 1.31701C17.3436 1.21661 17.4614 1.13687 17.5914 1.08245C17.7214 1.02803 17.8609 1 18.0018 1C18.1427 1 18.2822 1.02803 18.4122 1.08245C18.5422 1.13687 18.66 1.21661 18.7589 1.31701L24.683 7.24107C24.7834 7.33995 24.8631 7.45781 24.9175 7.58779C24.972 7.71777 25 7.85727 25 7.99819C25 8.1391 24.972 8.27861 24.9175 8.40859C24.8631 8.53857 24.7834 8.65642 24.683 8.7553L8.7438 24.6945C8.64599 24.7918 8.52994 24.8689 8.40231 24.9213C8.27467 24.9737 8.13795 25.0005 7.99997 25Z" stroke="#E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </Pencil>
 
        <img src="/assets/gambe.png" alt="" 
        onClick={() => handleDish()}
        />
 
        <h4> Spaguetti Gambe &gt; </h4>
        <p> Massa fresca com camarões e pesto. </p>
        <h5>R$ 79,97</h5>
 
        {/* <div className="divone">
        <svg width="50" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4707 12C3.4707 11.5858 3.80649 11.25 4.2207 11.25H20.7207C21.1349 11.25 21.4707 11.5858 21.4707 12C21.4707 12.4142 21.1349 12.75 20.7207 12.75H4.2207C3.80649 12.75 3.4707 12.4142 3.4707 12Z" fill="white"/>
        </svg>
          <span> 01 </span>
          <svg width="50" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4707 12C3.4707 11.5858 3.80649 11.25 4.2207 11.25H20.7207C21.1349 11.25 21.4707 11.5858 21.4707 12C21.4707 12.4142 21.1349 12.75 20.7207 12.75H4.2207C3.80649 12.75 3.4707 12.4142 3.4707 12Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4707 3C12.8849 3 13.2207 3.33579 13.2207 3.75V20.25C13.2207 20.6642 12.8849 21 12.4707 21C12.0565 21 11.7207 20.6642 11.7207 20.25V3.75C11.7207 3.33579 12.0565 3 12.4707 3Z" fill="white"/>
          </svg>
          <Button 
            title="incluir"
            />
          </div> */}
  </Container>
  )
}