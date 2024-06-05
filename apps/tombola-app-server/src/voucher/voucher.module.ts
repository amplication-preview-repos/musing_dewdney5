import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoucherModuleBase } from "./base/voucher.module.base";
import { VoucherService } from "./voucher.service";
import { VoucherController } from "./voucher.controller";
import { VoucherResolver } from "./voucher.resolver";

@Module({
  imports: [VoucherModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoucherController],
  providers: [VoucherService, VoucherResolver],
  exports: [VoucherService],
})
export class VoucherModule {}
