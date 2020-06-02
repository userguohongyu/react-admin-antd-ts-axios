import React from 'react';
import { Layout } from 'antd';
import Pheader from "./p-header/PHeader"
import { Route } from "react-router-dom";
import HomePage from "../page/HomePage/HomePage"
import PageA from "../page/PageA"
import PageB from "../page/PageB"
const { Footer, Content } = Layout;

class LayOut extends React.Component<any> {
    render() {
        return (
            <Layout>
                <Pheader />
                <Content>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/PageA" component={PageA} />
                    <Route exact path="/PageB" component={PageB} />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }

}



export default LayOut