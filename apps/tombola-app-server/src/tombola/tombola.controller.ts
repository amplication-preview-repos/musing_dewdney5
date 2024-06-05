import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TombolaService } from "./tombola.service";
import { TombolaControllerBase } from "./base/tombola.controller.base";

@swagger.ApiTags("tombolas")
@common.Controller("tombolas")
export class TombolaController extends TombolaControllerBase {
  constructor(
    protected readonly service: TombolaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
