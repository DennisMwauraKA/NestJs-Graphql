import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {

  @Field()
  name: string;

  @Field()
  email: string;
}

/*in this module you input what you want in the database*/