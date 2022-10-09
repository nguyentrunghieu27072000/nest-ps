import { Account } from './entities/account.entity';
import { User } from '../users/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateAccountDto } from './dtos/accounts.dto';
import { InjectRepository } from '@nestjs/typeorm';

export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
    private dataSource: DataSource,
  ) {}

  async createAccount(body: CreateAccountDto) {
    const { id, password, role, firstName, lastName } = body;
    const queryRunner = this.dataSource.createQueryRunner();
    // const account = await queryRunner.manager.findOneBy(Account, {
    //   accountId: id,
    // });

    // if (!!account) throw new Error('account already exists');

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(User, {
        userId: 'fe781f88-34db-4731-8250-5feca9044c02',
        firstName,
        lastName,
      });
      // await this.accountsRepository.save({
      //   accountId: id,
      //   password,
      //   role,
      // });
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
    return 'OK';
  }
}
