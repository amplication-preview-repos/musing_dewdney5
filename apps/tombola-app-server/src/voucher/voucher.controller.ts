import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoucherService } from "./voucher.service";
import { VoucherControllerBase } from "./base/voucher.controller.base";

@swagger.ApiTags("vouchers")
@common.Controller("vouchers")
export class VoucherController extends VoucherControllerBase {
  constructor(
    protected readonly service: VoucherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
