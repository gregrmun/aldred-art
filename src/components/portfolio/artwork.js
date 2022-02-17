import React, { useEffect, useState } from "react";
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
import './portfolio.css';
import '../index.css';

const { Header, Content, Footer } = Layout;
const { Text, Title, Paragraph } = Typography;



const Artwork = () => {

    const history = useHistory();

    const goToBigTreeProduct = () => {
        history.push("/shop/product/big-tree")
      }

    // const handleBuyButtonPressed = () => {
    //     fetch("/api/config/")
    //     .then((result) => { return result.json(); })
    //     .then((data) => { 
    //         const stripe = Stripe(data.publicKey);

    //         fetch("/api/create-checkout-session/")
    //             .then((result) => { return result.json(); })
    //             .then((data) => { 
    //                 console.log(data);
    //                 return stripe.redirectToCheckout({sessionId: data.sessionId})
    //             })
    //             .then((res) => {
    //                 console.log(res);
    //             })
    //         });
    //     history.push("/api/create-checkout-session/");
    // }

    return (

        <Layout className="layout">
                
            <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                <NavbarStyled />
            </Header>
                
            <Content>
                <Col className="site-layout-content">
                    <Col className="artworkBox" align="center" justify="center" >
                        <Row className="artworkHeaderContainer">
                            <Text className="headerText" style={{color: '#fff'}}>Aldred's Favourites</Text>

                            <Divider type="horizontal" />


                            <Text className="artworkText" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <Button type="ghost" onClick={goToBigTreeProduct} className="artworkButton"> 
                                        <img
                                            className="artworkImage"
                                            src={require('../../assets/artwork/BigTreeInContext.jpg')}
                                        />
                                        
                                    </Button>
                                    <Text className="artworkText">
                                        "Big Tree"
                                    </Text>
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/TropicanaMockup.png')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Tropicana" 
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/WavesInContext.jpg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Inner Child"
                                    </Text>
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/SoulMatesInContext.jpg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Soul + Mates"
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/MirageInContext.jpg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Big Wave"
                                    </Text>
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/TrevoseMockup.png')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Trevose Head" 
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/EndlessShorebreakInContext.jpg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Endless Shorebreak"
                                    </Text>
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/IsolationInContext.jpg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Mirage" 
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>
                    </Col>

                    <Row className="moreBox" align="center">

                            <Col align="center">
                                <Paragraph className="productText" >
                                    MORE ARTWORK
                                </Paragraph>

                                <Row>
                                    <Col>
                                        <Space direction="vertical" style={{textAlign: 'center'}} >
                                            <img
                                                className="moreImage"
                                                src={require('../../assets/artwork/TropicanaMockup.png')}
                                            />
                                            
                                            <Text className="moreText">
                                                "Tropicana" 
                                            </Text>                                 
                                        </Space>
                                    </Col>

                                    <Col>
                                        <Space direction="vertical" style={{textAlign: 'center'}} >
                                            <img
                                                className="moreImage"
                                                src={require('../../assets/artwork/TropicanaMockup.png')}
                                            />
                                            
                                            <Text className="moreText">
                                                "Tropicana" 
                                            </Text>                                 
                                        </Space>
                                    </Col>

                                    <Col>
                                        <Space direction="vertical" style={{textAlign: 'center'}} >
                                            <img
                                                className="moreImage"
                                                src={require('../../assets/artwork/TropicanaMockup.png')}
                                            />
                                            
                                            <Text className="moreText">
                                                "Tropicana" 
                                            </Text>                                 
                                        </Space>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </Col>
            </Content>

            <Footer className="footer"> 
            <AAFooter/>
            </Footer>
        </Layout>
    )
}

export default Artwork;