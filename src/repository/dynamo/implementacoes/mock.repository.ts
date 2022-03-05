
import { Mock } from '../../../domain/mock';
import { Injectable, Inject } from '@nestjs/common';
import { IMockRepository } from '../../../domain/repository/mock.repository';
import {v4 as uuidv4} from 'uuid';
import dynamoDb from '../dynamo'

@Injectable()
export class MockRepository implements IMockRepository {
  async listar(): Promise<Mock[]> {
    return dynamoDb.scan({
      TableName: 'mck-mock',
    }).promise().then(x => x.Items);
  }

  async pesquisar(id: string): Promise<Mock> {
    return dynamoDb.get({
      TableName: 'mck-mock',
      Key: {
        id
      }
    }).promise().then(x => x.Item);
  }

  async pesquisarPorEndereco(endereco: string): Promise<Mock> {
    return dynamoDb.scan({
      TableName: 'mck-mock',
      FilterExpression: 'endereco = :endereco',
      ExpressionAttributeValues: {
        ':endereco': endereco,
      }
    }).promise().then(x => x.Items);
  }

  async pesquisarPorEnderecoDiferenteDoId(endereco: string, id: string): Promise<Mock> {
    return dynamoDb.scan({
      TableName: 'mck-mock',
      FilterExpression: 'endereco = :endereco AND id <> :hid',
      ExpressionAttributeValues: {
        ':endereco': endereco,
        ':hid': id,
      }
    }).promise().then(x => x.Items);
  }

  async incluir(registro: Mock): Promise<Mock> {
    registro.id = uuidv4();
    return dynamoDb.put({
      TableName: 'mck-mock',
      Item : registro,
    }).promise();
  }

  async alterar(registro: Mock) {
    return dynamoDb.put({
      TableName: 'mck-mock',
      Item : registro,      
    }).promise();
  }

  async remover(id: string) {
    return dynamoDb.delete({
      TableName: 'mck-mock',
      Key: {
        HashKey: 'id',
        NumberRangeKey: id
      }
    }).promise();
  }
}