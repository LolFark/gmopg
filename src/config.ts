import {AxiosRequestConfig} from 'axios'
import * as process from 'process'

export type TConfig = {
  axios?: AxiosRequestConfig
  SiteID?: string
  SitePass?: string
  ShopID?: string
  ShopPass?: string
}

export const defaults: TConfig = {
  axios: {
    timeout: 3*60*1000,
    baseURL: 'https://pt01.mul-pay.jp',
    headers: {
      'user-agent': 'GMO PG Client: Unofficial',
      'content-length': '0',
    },
  },
}

export default class Config {
  static buildByEnv(): TConfig {
    const c: TConfig = {}
    c.axios = {}

    if (process.env.GMOPG_ENDPOINT) {
      c.axios.baseURL = process.env.GMOPG_ENDPOINT
    }
    if (process.env.GMOPG_TIMEOUT) {
      c.axios.timeout = +`${process.env.GMOPG_TIMEOUT}`
    }
    if (process.env.GMOPG_SITEID) {
      c.SiteID = process.env.GMOPG_SITEID
    }
    if (process.env.GMOPG_SITEPASS) {
      c.SitePass = process.env.GMOPG_SITEPASS
    }
    if (process.env.GMOPG_SHOPID) {
      c.ShopID = process.env.GMOPG_SHOPID
    }
    if (process.env.GMOPG_SHOPPASS) {
      c.ShopPass = process.env.GMOPG_SHOPPASS
    }

    return c
  }
}
