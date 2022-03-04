
import { Mock } from '../../../domain/mock';
import { Injectable, Inject } from '@nestjs/common';
import { IMockRepository } from '../../../domain/repository/mock.repository';
import {v4 as uuidv4} from 'uuid';
import dynamoDb from '../dynamo'

@Injectable()
export class MockRepository implements IMockRepository {
  async listar(): Promise<Mock[]> {
    const itens = await dynamoDb.scan({
      TableName: 'mck-mock',
    }).promise();
    return itens.Items;
  }

  async pesquisar(id: string): Promise<Mock> {
    const item = await dynamoDb.get({
      TableName: 'mck-mock',
      Key: {
        id
      }
    }).promise();
    return item.Item;
  }

  async pesquisarPorUrl(url: string): Promise<Mock> {
    return await dynamoDb.get({
      TableName: 'mck-mock',
      Key: {
        url: url,
      }
    }).promise();
  }

  async pesquisarPorUrlDiferenteDoId(url: string, id: string): Promise<Mock> {
    return await dynamoDb.get({
      TableName: 'mck-mock',
      Key: {
        id: id,
        url: url
      }
    }).promise();
  }

  async incluir(registro: Mock): Promise<Mock> {
    registro.id = uuidv4();
    return await dynamoDb.put({
      TableName: 'mck-mock',
      Item : registro,
    }).promise();
  }

  async alterar(registro: Mock) {
    return await dynamoDb.put({
      TableName: 'mck-mock',
      Item : registro,      
    }).promise();
  }

  async remover(id: string) {
    return await dynamoDb.delete({
      TableName: 'mck-mock',
      Key: {
        HashKey: 'id',
        NumberRangeKey: id
      }
    }).promise();
  }
}