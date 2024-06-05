import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VerificationModuleBase } from "./base/verification.module.base";
import { VerificationService } from "./verification.service";
import { VerificationController } from "./verification.controller";
import { VerificationResolver } from "./verification.resolver";

@Module({
  imports: [VerificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VerificationController],
  providers: [VerificationService, VerificationResolver],
  exports: [VerificationService],
})
export class VerificationModule {}
