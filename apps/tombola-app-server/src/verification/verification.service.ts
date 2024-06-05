import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VerificationServiceBase } from "./base/verification.service.base";

@Injectable()
export class VerificationService extends VerificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
