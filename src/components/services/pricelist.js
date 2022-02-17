import React from 'react';
import { 
    Layout,  
    Image, 
    Typography, 
    Space, 
    Button,
    Affix,
    Col,
    Row,
    Divider,
    } from 'antd';

import { useHistory } from 'react-router-dom';

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import './services.css';
import '../index.css';

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const PriceList = () => {

    return (
        <Layout className="layout">
            <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                <NavbarStyled />
            </Header>

            <Content>

            <Col className="site-layout-content">


                <Col justify="center" align="center" style={{flexDirection: 'row'}}>
                    <Row className="faqheaderContainer">
                        <Text className="priceListHeaderText">Price List</Text>
                    </Row>
                    
                    <img src={require('../../assets/faqs/PriceList.png')} style={{width: 600}}/>
                </Col>
            </Col>
            </Content>

            <Footer className="footer">
                <AAFooter />
            </Footer>
        </Layout>
    )

}

export default PriceList;