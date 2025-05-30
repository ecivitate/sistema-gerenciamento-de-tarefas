import { pool } from '../../clients/pg.client';
import { EngenheiroDTO } from './schemas/create';
import { EngenheiroUpdateSchema } from './schemas/update';

class EngenheiroService {
  async findAll() {
    const { rows } = await pool.query('SELECT * FROM engenheiro');
    return rows;
  }

  async create(dto: EngenheiroDTO) {
    const { nome, eficiencia } = dto;
    const { rows } = await pool.query(
      'INSERT INTO engenheiro (nome, eficiencia) VALUES ($1,$2) RETURNING *',
      [nome, eficiencia]
    );
    return rows[0];
  }

  async update(id: string, dto: unknown) {
    const data = EngenheiroUpdateSchema.parse(dto);

    // monta SET dinamicamente
    const fields = Object.keys(data);
    if (!fields.length) throw new Error('Nada para atualizar');

    const set  = fields.map((f, i) => `${f} = $${i + 2}`).join(', ');
    const vals = fields.map(k => (data as any)[k]);

    const { rows } = await pool.query(
      `UPDATE engenheiro SET ${set} WHERE id_eng = $1 RETURNING *`,
      [id, ...vals]
    );
    return rows[0];
  }

  async delete(id: string) {
    await pool.query('DELETE FROM engenheiro WHERE id_eng = $1', [id]);
  }
}

export default new EngenheiroService();