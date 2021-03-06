import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  
  const menuList = [
    "여성", 
    "Divided", 
    "남성", 
    "신생아/유아", 
    "아동", 
    "H&M Home", 
    "Sale", 
    "지속가능성"
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }

  const search = (event) => {
    if(event.key === "Enter") {
      // 입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      //url를 바꿔준다.
      navigate(`/?q=${keyword}`);


     
    }
  }

  return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>

        <div className="nav-section">
            <img 
              width={100} 
              src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"/>
        </div>

        <div>
          <div className="menu-area">
            <ul className="menu-list">
              {menuList.map((menu) =>
                <li>{menu}</li>
              )}
            </ul>
          </div>
          <div className="search-area">
              <FontAwesomeIcon icon={faSearch}/>
              <input className="input-style" type="text" onKeyPress={(event)=>search(event)}/> 
          </div>
        </div>
      </div>
  );
};

export default Navbar