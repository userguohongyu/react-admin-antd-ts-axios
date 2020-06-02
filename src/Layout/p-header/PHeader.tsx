import React from 'react';
import { Layout } from 'antd';
import "./p-header.scss"
import { Link } from "react-router-dom";
const { Header } = Layout;


class Pheader extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
        this.headerState = [
            {
                id: 1,
                path: "/homePage",
                name: "首页"
            },
            {
                id: 2,
                path: "/PageA",
                name: "页面A"
            },
            {
                id: 3,
                path: "/PageB",
                name: "页面B"
            },
        ]

    }
    headerState: any;
    childClick(params: any) {
        console.log(params)
    }
    render() {
        return (
            <Header>
                <Link to="/">首页</Link>
                <Link to="/PageA">页面A</Link>
                <Link to="/PageB">页面B</Link>
            </Header>
        )
    }
}
export default Pheader


