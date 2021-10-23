import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://www.letsfun.cn/api',
})

export async function GetData(url: string) {
  const { data } = await axios({
    method: 'GET',
    url,
  })
  return data
}
