import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => String)
  async hello() {
    return 'Hello World!';
  }
  @Query(() => [User])
  async users() {
    return await this.userService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: number) {
    return await this.userService.findOne(id);
  }
}
