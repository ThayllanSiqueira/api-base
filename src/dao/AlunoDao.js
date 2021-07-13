import knex from '../config/database';

class AlunoDao {
  findAll() {
    return knex('alunos').select(['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura']);
  }
}

export default new AlunoDao();
