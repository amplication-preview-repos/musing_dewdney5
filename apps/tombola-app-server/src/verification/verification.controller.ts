import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VerificationService } from "./verification.service";
import { VerificationControllerBase } from "./base/verification.controller.base";

@swagger.ApiTags("verifications")
@common.Controller("verifications")
export class VerificationController extends VerificationControllerBase {
  constructor(
    protected readonly service: VerificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
