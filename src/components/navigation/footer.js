import React from 'react';
import '../index.css';
import { Row, Col, Layout, Typography, Divider, Space } from 'antd';
import { SocialIcon } from 'react-social-icons';



export default function AAFooter() {

    const { Footer } = Layout;

    return (
        <Col align="center">

           
            <Space direction="vertical" align="center" style={{justifyContent: 'space-evenly', marginBottom: 20}}>

                <Row>
                    <Typography className="footerTitle">
                        Aldred Art
                    </Typography>
                </Row>
            

                <Row style={{justifyContent: 'space-evenly', width: 400}}>
                    <Typography className="footerText" >
                        Surf Art <Divider type="vertical" style={{marginLeft: 8, marginRight: 16}} /> 
                         Illustration <Divider type="vertical" style={{marginLeft: 8, marginRight: 16}} />
                         Design
                    </Typography>
                </Row>

                <Row>
                    <Typography className="footerAddress">
                        Newquay, Cornwall, UK
                    </Typography>
                </Row>
            </Space>

            <Divider />

            <Row style={{marginBottom: 20, marginTop: 40, width: 200, justifyContent: 'space-evenly'}}>
                <SocialIcon bgColor="#048b87" url="https://www.facebook.com/camaldred" />
                <SocialIcon bgColor="#048b87" url="https://www.instagram.com/aldred_art/" />
                <SocialIcon bgColor="#048b87" url="https://www.linkedin.com/in/cameron-aldred-5532a4100/" />
            </Row>
            <Row justify="center">
                <h5 style={{color: '#048b87'}}>Aldred Art ©2021</h5>
            </Row>
        </Col>
      
    )

}