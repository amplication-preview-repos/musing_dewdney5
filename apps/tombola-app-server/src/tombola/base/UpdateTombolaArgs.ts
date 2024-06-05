/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TombolaWhereUniqueInput } from "./TombolaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TombolaUpdateInput } from "./TombolaUpdateInput";

@ArgsType()
class UpdateTombolaArgs {
  @ApiProperty({
    required: true,
    type: () => TombolaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TombolaWhereUniqueInput)
  @Field(() => TombolaWhereUniqueInput, { nullable: false })
  where!: TombolaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TombolaUpdateInput,
  })
  @ValidateNested()
  @Type(() => TombolaUpdateInput)
  @Field(() => TombolaUpdateInput, { nullable: false })
  data!: TombolaUpdateInput;
}

export { UpdateTombolaArgs as UpdateTombolaArgs };
