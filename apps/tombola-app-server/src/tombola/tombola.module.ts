import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TombolaModuleBase } from "./base/tombola.module.base";
import { TombolaService } from "./tombola.service";
import { TombolaController } from "./tombola.controller";
import { TombolaResolver } from "./tombola.resolver";

@Module({
  imports: [TombolaModuleBase, forwardRef(() => AuthModule)],
  controllers: [TombolaController],
  providers: [TombolaService, TombolaResolver],
  exports: [TombolaService],
})
export class TombolaModule {}
