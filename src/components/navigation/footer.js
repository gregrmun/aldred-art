import React from 'react';
import '../index.css';
import { Row, Col, Layout } from 'antd';
import { SocialIcon } from 'react-social-icons';



export default function AAFooter() {

    const { Footer } = Layout;

    return (
        <Col align="center">
            <Row style={{marginBottom: 20, width: 200, justifyContent: 'space-evenly'}}>
                <SocialIcon bgColor="#e2dec6" url="https://www.facebook.com/camaldred" />
                <SocialIcon bgColor="#e2dec6" url="https://www.instagram.com/aldred_art/" />
                <SocialIcon bgColor="#e2dec6" url="https://www.linkedin.com/in/cameron-aldred-5532a4100/" />
            </Row>
            <Row justify="center">
                <h5 style={{color: '#e2dec6'}}>Aldred Art ©2021</h5>
            </Row>
        </Col>
      
    )

}