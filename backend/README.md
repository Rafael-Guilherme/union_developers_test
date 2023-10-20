## Rodando o projeto

### Clonando o repositório

```
$ git clone https://github.com/union-developers-group/e-manager-backend.git
```

### Instalando as dependências

```
$ yarn
```

### Configurando o banco de dados

1. Instale o [Docker](https://www.docker.com)
2. Copie o arquivo `.env-example` e renomeie para `.env`
3. Inicialize o Docker e rode o comando `yarn docker`
4. Rode as migration executando o comando `npx prisma migrate dev`

### Rodando o servidor de desenvolvimento

1. Execute o comando `yarn dev`
2. Acesse [http://localhost:8000/docs](http://localhost:8000/docs)

## Comandos

- `dev`: Roda o servidor de desenvolvimento
- `docker`: Executa o arquivo **docker-compose.yml**
- `build`: Gera a versão de produção
- `docs:generate`: Gera/atualiza a documentação
