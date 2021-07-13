import AlunoDao from '../dao/AlunoDao';

class AlunoController {
  index() {
    return AlunoDao.findAll();
  }
}

export default new AlunoController();
