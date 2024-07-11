import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => String)
export class AuthResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
