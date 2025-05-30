CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS engenheiro (
  id_eng       UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome         TEXT  NOT NULL,
  eficiencia   NUMERIC(5,2) DEFAULT 100.0   -- porcentagem
);

CREATE TABLE IF NOT EXISTS tarefa (
  id_tarefa        UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo           TEXT NOT NULL,
  prioridade       TEXT
                 CHECK (prioridade IN ('Alta','Média','Baixa')),
  horas_estimadas  NUMERIC,
  status           TEXT
                 CHECK (status IN ('Pendente','Em andamento','Concluída'))
                 DEFAULT 'Pendente'
);

CREATE TABLE IF NOT EXISTS alocacao (
  id_aloc         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  id_tarefa       UUID REFERENCES tarefa(id_tarefa) ON DELETE CASCADE,
  id_eng          UUID REFERENCES engenheiro(id_eng) ON DELETE CASCADE,
  horas_atribuidas NUMERIC
);
