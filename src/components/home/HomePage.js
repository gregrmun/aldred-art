import React from "react";
import { Layout, Button, Row, Col, Affix } from 'antd';
import { useHistory } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../home/carousel.css';


import '../index.css';

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import HomeSlider from "../utils/homeslider";
import InstaFeeds from "../utils/instacanvas";




const { Header, Footer, Content } = Layout;



const HomePage = (props) => {

    const history = useHistory();

    const goToHome = () => {
      history.push("/");
    };  

    
    return (
    <Layout className="layout" >
        
       
        <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
            <NavbarStyled />
        </Header>

      
        <Content>

                <Col className="site-layout-content">
                    <div className="innerBox" >
                       <HomeSlider />
                    </div>
                    <div>
                        <InstaFeeds 
                            token={IGQVJVbTVLeFJXeVB6aHRuYTR4NGxzY2VPOGJQUXlwaVRoMFE3T3huWUpSdF8yamRsTld4VEMwcEJBd2NBV3FfR2pxclFaeElISW1sNnZAoNVc4bHFwNWx4REJ2TzkwNXdUYXBkVHU4QWRBT1FGa0tjUwZDZD}
                            limit={12}/>
                    </div>
                </Col>
        </Content>
        
    <Footer className="footer"> 
        <AAFooter/>
    </Footer>
        
    </Layout>
    );
}

export default HomePage;
