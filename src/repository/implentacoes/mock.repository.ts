
import { Mock } from '../../domain/mock';
import { Injectable, Inject } from '@nestjs/common';
//import { Repository, Connection, getManager, EntityManager } from 'typeorm';
//import { MockSchema } from '../schema/mock.schema';
//import { InjectRepository } from '@nestjs/typeorm';
import { IMockRepository } from '../../domain/repository/mock.repository';
import {v4 as uuidv4} from 'uuid';
import dynamoDb from '../dynamo/dynamo'

@Injectable()
export class MockRepository implements IMockRepository {

  constructor(
//    private connection: Connection,
//    private entityManager: EntityManager
  ){}

  
  private listaMocks: Mock[] = [];


  async listar(): Promise<Mock[]> {
    console.log('itens');
    const itens = await dynamoDb.scan({
      TableName: 'mck-mock',
    });
    console.log(itens);
    return itens.Items;
  }

  async pesquisar(id: string): Promise<Mock> {
    const { Item } = await dynamoDb.get({
      TableName: 'mck-mock',
      Key: {
        id
      }
    });
    return Item;
  }

  async pesquisarPorUrl(url: string): Promise<Mock> {
    return this.listaMocks.find(x => x.url == url);
    //return this.entityManager.findOne(Mock, id);    
    //return this.connection.createQueryBuilder(MockSchema,'u').where('u.id = :id', {id}).getOne();
  }

  async pesquisarPorUrlDiferenteDoId(url: string, id: string): Promise<Mock> {
    return this.listaMocks.find(x => x.url == url && x.id != id);
    //return this.entityManager.findOne(Mock, id);    
    //return this.connection.createQueryBuilder(MockSchema,'u').where('u.id = :id', {id}).getOne();
  }

  async incluir(registro: Mock): Promise<Mock> {
    registro.id = uuidv4();
    this.listaMocks.push(registro);
    return registro;
    //this.entityManager.insert(MockSchema, registro);
  }

  async alterar(registro: Mock) {
    await this.remover(registro.id);
    this.listaMocks.push(registro);
    //this.entityManager.update<MockSchema>(registro.id);
    //await this.entityManager.update(MockSchema, registro.id, registro);
    //this.entityManager.save(MockSchema, registro);
  }

  async remover(id: string) {
    let index = this.listaMocks.findIndex(x => x.id == id);
    this.listaMocks.splice(index, 1);
    //this.entityManager.delete(MockSchema, id);
  }
}