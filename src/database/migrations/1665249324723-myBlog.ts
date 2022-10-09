import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class myBlog1665249324723 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'userId',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'firstName',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'lastName',
            type: 'varchar',
            length: '50',
          },
        ],
      }),
      true,
    );

    // await queryRunner.createTable(
    //   new Table({
    //     name: 'account',
    //     columns: [
    //       {
    //         name: 'accountId',
    //         type: 'varchar',
    //         isPrimary: true,
    //       },
    //       {
    //         name: 'password',
    //         type: 'varchar',
    //         length: '255',
    //       },
    //       {
    //         name: 'role',
    //         type: 'varchar',
    //         length: '50',
    //       },
    //     ],
    //   }),
    //   true,
    // );

    // await queryRunner.createForeignKey(
    //   'account',
    //   new TableForeignKey({
    //     columnNames: ['accountId'],
    //     referencedColumnNames: ['userId'],
    //     referencedTableName: 'user',
    //     onDelete: 'CASCADE',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('account');
    await queryRunner.dropTable('user');
  }
}
