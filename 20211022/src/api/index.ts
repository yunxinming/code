import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://www.letsfun.cn/api',
})

const spareData = {
  title: '栏目标题',
  subtitle: '栏目副标题',
  recommend: [
    {
      title: '注册公司',
      pic: '../../public/1.jpg',
      icon: '../../public/1icon.png',
      content: [
        {
          title: '工商核名',
          pic: '../../public/item_bg1.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '广州公司注册',
          pic: '../../public/item_bg2.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '内资公司注册',
          pic: '../../public/item_bg3.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '外资公司注册',
          pic: '../../public/item_bg4.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '分公司注册',
          pic: '../../public/item_bg5.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '个体户注册',
          pic: '../../public/item_bg6.jpg',
          url_title: '免费咨询',
          url: '/',
        },
      ],
    },
    {
      title: '香港公司开户',
      pic: '../../public/2.jpg',
      icon: '../../public/2icon.png',
      content: [
        {
          title: '工商核名',
          pic: '../../public/item_bg1.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '广州公司注册',
          pic: '../../public/item_bg2.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '内资公司注册',
          pic: '../../public/item_bg3.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '外资公司注册',
          pic: '../../public/item_bg4.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '分公司注册',
          pic: '../../public/item_bg5.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '个体户注册',
          pic: '../../public/item_bg6.jpg',
          url_title: '免费咨询',
          url: '/',
        },
      ],
    },
    {
      title: '记账报税',
      pic: '../../public/3.jpg',
      icon: '../../public/3icon.png',
      content: [
        {
          title: '工商核名',
          pic: '../../public/item_bg1.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '广州公司注册',
          pic: '../../public/item_bg2.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '内资公司注册',
          pic: '../../public/item_bg3.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '外资公司注册',
          pic: '../../public/item_bg4.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '分公司注册',
          pic: '../../public/item_bg5.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '个体户注册',
          pic: '../../public/item_bg6.jpg',
          url_title: '免费咨询',
          url: '/',
        },
      ],
    },
    {
      title: '公司变更',
      pic: '../../public/4.jpg',
      icon: '../../public/4icon.png',
      content: [
        {
          title: '工商核名',
          pic: '../../public/item_bg1.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '广州公司注册',
          pic: '../../public/item_bg2.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '内资公司注册',
          pic: '../../public/item_bg3.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '外资公司注册',
          pic: '../../public/item_bg4.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '分公司注册',
          pic: '../../public/item_bg5.jpg',
          url_title: '免费咨询',
          url: '/',
        },
        {
          title: '个体户注册',
          pic: '../../public/item_bg6.jpg',
          url_title: '免费咨询',
          url: '/',
        },
      ],
    },
  ],
}

export async function GetData(url: string) {
  const { data } = await axios({
    method: 'GET',
    url,
  })
  return spareData || data
}
