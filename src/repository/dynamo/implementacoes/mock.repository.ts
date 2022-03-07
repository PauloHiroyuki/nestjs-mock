
import { Mock } from '../../../domain/mock';
import { Injectable, Inject } from '@nestjs/common';
import { IMockRepository } from '../../../domain/repository/mock.repository';
import {v4 as uuidv4} from 'uuid';
import { DynamoConfig } from '../dynamo';

const TableName = 'mck-mock';

@Injectable()
export class MockRepository implements IMockRepository {
  
  dynamoDb;

  constructor(
    @Inject(DynamoConfig) dynamoConfig: DynamoConfig) {
      this.dynamoDb = dynamoConfig.dynamoDb;
  }

  async listar(): Promise<Mock[]> {
    return this.dynamoDb.scan({
      TableName,
    }).promise().then(x => x.Items);
  }

  async pesquisar(id: string): Promise<Mock> {
    return this.dynamoDb.get({
      TableName,
      Key: {
        id
      }
    }).promise().then(x => x.Item);
  }

  async pesquisarPorEndereco(endereco: string): Promise<Mock[]> {
    return this.dynamoDb.scan({
      TableName,
      FilterExpression: 'endereco = :endereco',
      ExpressionAttributeValues: {
        ':endereco': endereco,
      }
    }).promise().then(x => x.Items);
  }

  async pesquisarPorEnderecoDiferenteDoId(endereco: string, id: string): Promise<Mock[]> {
    return this.dynamoDb.scan({
      TableName,
      FilterExpression: 'endereco = :endereco and id <> :id',
      ExpressionAttributeValues: {
        ':endereco': endereco,
        ':id': id,
      }
    }).promise().then(x => x.Items);
  }

  async incluir(registro: Mock): Promise<Mock> {
    registro.id = uuidv4();
    return this.dynamoDb.put({
      TableName,
      Item : registro
    }).promise().then(() => registro);
  }

  async alterar(registro: Mock) {
    return this.dynamoDb.put({
      TableName,
      Item : registro,      
    }).promise();
  }

  async remover(id: string) {
    return this.dynamoDb.delete({
      TableName,
      Key: {
        id: id,
      }
    }).promise();
  }
}