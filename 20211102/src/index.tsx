// webpack 浪费太多时间，就写一起了。

import React from 'react'
import ReactDOM from 'react-dom'

import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import '../public/css/swiper.min.css'
import '../public/css/navigation.min.css'
import '../public/css/pagination.min.css'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])

import bg from './assets/bg.png'
import searchIcon from './assets/query.png'
import frequent_flyer from './assets/home-frequent_flyer_2x.png'
import subscription_flight from './assets/home-subscription_flight_2x.png'
import traffic_query from './assets/home-traffic_query_2x.png'
import yi_security_check from './assets/home-yi_security_check_2x.png'
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import fj from './assets/飞机.png'
import jt from './assets/箭头.png'
import wanzhuanjichang from './assets/玩转机场1.png'
import './index.css'
import 'amfe-flexible'

const App = function App() {
  const serveData = [
    {
      title: '关注航班',
      img: frequent_flyer,
    },
    {
      title: '易安检',
      img: subscription_flight,
    },
    {
      title: '交通查询',
      img: traffic_query,
    },
    {
      title: '常旅客',
      img: yi_security_check,
    },
  ]
  const [switchTab, setSwitchTab] = useState(0)
  return (
    <div className="app">
      <header>
        <img src={bg} alt="广州白云机场" />
        <div>
          <h1>欢迎来到广州白云机场</h1>
          <span>切换机场</span>
        </div>
      </header>

      <div className="container">
        <div className="search">
          <img src={searchIcon} alt="搜索白云机场" />
          <input type="text" placeholder="查询航班、商店、服务…" />
        </div>
        <div className="serve">
          {serveData.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} className="icon" alt={item.title}></img>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        <div className="swiper">
          <img src={banner} alt="banner" />
          <Swiper pagination={true} className="mySwiper">
            <SwiperSlide>
              <h1>BAIYUNPORT</h1>
              <h2>INTERNATIONAL AIRPORT</h2>
            </SwiperSlide>
            <SwiperSlide>
              <h1>BAIYUNPORT</h1>
              <h2>INTERNATIONAL AIRPORT</h2>
            </SwiperSlide>
            <SwiperSlide>
              <h1>BAIYUNPORT</h1>
              <h2>INTERNATIONAL AIRPORT</h2>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="itinerary">
          <h1>我的航班</h1>
          <div className="ticket">
            <div className="title">
              <h3 className="left">2020.01.10 周三</h3>
              <div className="right">
                <img src={logo} alt="logo" />
                <span>CZ4317</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="info">
              <div className="left">
                <h1>08:25</h1>
                <h2>广州白云T1</h2>
              </div>
              <div className="center">
                <img src={fj} alt="" />
              </div>
              <div className="right">
                <h1>22:20</h1>
                <h2>北京首都T2</h2>
              </div>
            </div>
            <div className="line"></div>

            <div className="dengji-info">
              <p>
                航站楼<span>T1</span>
              </p>
              <p>
                登机口<span>A20</span>
              </p>
              <p>
                座位<span>C2</span>
              </p>
            </div>
          </div>
        </div>

        <div className="tabs">
          <div className="title">
            <ul>
              <li>
                <span className={switchTab === 0 ? 'active' : ''} onClick={() => setSwitchTab(0)}>
                  白云出发
                </span>
                <span className={switchTab === 1 ? 'active' : ''} onClick={() => setSwitchTab(1)}>
                  到达白云
                </span>
              </li>
              <li>
                <span>服务预订</span>
                <div>
                  <img src={jt} alt="箭头" />
                </div>
              </li>
            </ul>
          </div>
          <div className="card">
            <ul>
              {Array(6)
                .fill(0)
                .map((item, index) => (
                  <li key={index}>服务{index + 1}</li>
                ))}
            </ul>
          </div>
        </div>

        <div className="recreation">
          <h1>玩转机场</h1>
          <div className="img">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img key={index} src={wanzhuanjichang} alt="玩转机场" />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
