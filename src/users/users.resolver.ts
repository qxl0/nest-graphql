import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {

  }

  @Query(() => String)
  async hello() {
    return 'Hello World!';
  }
  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }
}
