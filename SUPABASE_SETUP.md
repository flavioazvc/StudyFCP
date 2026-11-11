# Configuração inicial do Supabase

## 1. Executar o schema

No Supabase, abra **SQL Editor**, crie uma consulta nova, cole todo o conteúdo de [`supabase-schema.sql`](./supabase-schema.sql) e execute. O schema cria o diretório autorizado, disciplinas, perfis, associações por estudante e notas.

O arquivo não contém senhas.

## 2. Criar os usuários manualmente

Como o projeto não usará e-mails para a experiência do estudante, o StudyFCP transforma cada `LOGIN` em um identificador técnico interno no formato:

```text
LOGIN@studyfcp.local
```

No Supabase, abra **Authentication → Users → Add user** e crie cada usuário usando esse identificador interno e a senha escolhida por você. Exemplos:

```text
fac@studyfcp.local
lbc@studyfcp.local
```

O aluno continuará informando somente `fac`, `lbc` etc. na tela do StudyFCP. Esses identificadores não são caixas de e-mail e não devem ser usados para envio de mensagens.

Para o teste atual, desative a exigência de confirmação de e-mail em **Authentication → Providers → Email**, pois não haverá fluxo de e-mail nesta fase.

## 3. Dados institucionais

O diretório inicial e as disciplinas foram extraídos da planilha anexada. As senhas não foram importadas. O arquivo `data/student-directory.json` é usado apenas para relacionar o login às disciplinas na interface.

## 4. Notas

Cada registro em `grades` possui disciplina, trimestre, categoria (`PO`, `AC` ou `SI`), identificação da avaliação, nota, nota máxima, data e observações. Cada AC é um registro separado; não existe uma coluna única que limite a quantidade de atividades.

A aplicação calcula a média das ACs cadastradas e mantém avaliações pendentes fora do cálculo, conforme o README.

## 5. Segurança desta fase

A chave usada no frontend é a chave pública publishable/anon. As políticas RLS restringem perfis, associações e notas ao usuário autenticado. Não adicione `service_role key`, senha do banco ou outras credenciais administrativas ao GitHub.
