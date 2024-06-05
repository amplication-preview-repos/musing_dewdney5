import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TombolaServiceBase } from "./base/tombola.service.base";

@Injectable()
export class TombolaService extends TombolaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
