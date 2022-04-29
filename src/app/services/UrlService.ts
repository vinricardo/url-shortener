import { prismaClient } from '../../../prisma';

export interface UrlConfig {
  url: string;
  short: string;
}

export class UrlService {
  async create(urlInfo: UrlConfig) {
    const shortener = await prismaClient.url.create({
      data: {
        url: urlInfo.url,
        short: urlInfo.short,
      },
    });
    return shortener;
  }

  async getAll() {
    const urls = await prismaClient.url.findMany();
    return urls;
  }

  async getOne(short: string) {
    const url = await prismaClient.url.findUnique({
      where: {
        short,
      },
    });
    return url;
  }
}
