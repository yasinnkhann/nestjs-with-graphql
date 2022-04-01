import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ItemsModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/nestgraphql?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
