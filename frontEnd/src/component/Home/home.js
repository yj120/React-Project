import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
const Home = () =>{

    const navigate = useNavigate();

    const onViewClick = ()=>{
        navigate('/ListPage');
    }
    
    return(
        <div className="main">
            <div className="channel">
                <div className="view">
                    <h2 className="view_text">
                        채팅방 둘러보기
                    </h2>
                    <button onClick={onViewClick}>
                        GO
                    </button>
                </div>
                <div className="attend"> 
                    <h2 className="attend_text">
                        채팅방 참여하기
                    </h2>
                    <button>
                        GO
                    </button>
                </div>
            </div>

        </div>

    )

}


export default Home;