
import { Mock } from '../../domain/mock';
import { Injectable, Inject } from '@nestjs/common';
//import { Repository, Connection, getManager, EntityManager } from 'typeorm';
//import { MockSchema } from '../schema/mock.schema';
//import { InjectRepository } from '@nestjs/typeorm';
import { IMockRepository } from '../../domain/repository/mock.repository';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class MockRepository implements IMockRepository {

  constructor(
//    private connection: Connection,
//    private entityManager: EntityManager
  ){}

  
  private listaMocks: Mock[] = [];


  async listar(): Promise<Mock[]> {
    return this.listaMocks;
    //return this.entityManager.find(Mock);
    //var consulta = this.connection.createQueryBuilder(MockSchema,'u');
    //return consulta.getMany();
  }

  async pesquisar(id: string): Promise<Mock> {
    return this.listaMocks.find(x => x.id == id);
    //return this.entityManager.findOne(Mock, id);    
    //return this.connection.createQueryBuilder(MockSchema,'u').where('u.id = :id', {id}).getOne();
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

  async incluir(registro: Mock) {
    registro.id = uuidv4();
    this.listaMocks.push(registro);
    //this.entityManager.insert(MockSchema, registro);
  }

  async alterar(registro: Mock) {
    //this.entityManager.update<MockSchema>(registro.id);
    //await this.entityManager.update(MockSchema, registro.id, registro);
    //this.entityManager.save(MockSchema, registro);
  }

  async remover(id: string) {
    //this.entityManager.delete(MockSchema, id);
  }
}