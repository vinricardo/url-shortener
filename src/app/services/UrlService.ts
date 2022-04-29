import { writeOnLog } from '../../../logs/SendToLog';
import { prismaClient } from '../../../prisma/client';

export interface UrlConfig {
  url: string;
  short: string;
}

export class UrlService {
  async getOne(short: string) {
    const url = await prismaClient.url.findUnique({
      where: {
        short,
      },
    });
    if (url) return url;
    else {
      writeOnLog(`URL not found: ${short}`);
      return { message: "URL not found", url: null };
    }
  }

  async create(urlInfo: UrlConfig) {
    let shortUsed = await this.getOne(urlInfo.short);

    if (!shortUsed.url) {
      const shortener = await prismaClient.url.create({
        data: {
          url: urlInfo.url,
          short: urlInfo.short,
        },
      });
      return { message: "URL shortened successfully", url: shortener };
    } else {
      writeOnLog(`URL already exists: ${urlInfo.short}`);
      return { message: "URL already exists", url: null };
    }
  }

  async getAll() {
    const urls = await prismaClient.url.findMany();
    return { message: "URLs list", result: urls };
  }
}
