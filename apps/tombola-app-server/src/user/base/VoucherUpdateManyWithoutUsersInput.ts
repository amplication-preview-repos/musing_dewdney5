/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VoucherWhereUniqueInput } from "../../voucher/base/VoucherWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VoucherUpdateManyWithoutUsersInput {
  @Field(() => [VoucherWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VoucherWhereUniqueInput],
  })
  connect?: Array<VoucherWhereUniqueInput>;

  @Field(() => [VoucherWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VoucherWhereUniqueInput],
  })
  disconnect?: Array<VoucherWhereUniqueInput>;

  @Field(() => [VoucherWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VoucherWhereUniqueInput],
  })
  set?: Array<VoucherWhereUniqueInput>;
}

export { VoucherUpdateManyWithoutUsersInput as VoucherUpdateManyWithoutUsersInput };
