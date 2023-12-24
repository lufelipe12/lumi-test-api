## Lumi API

Um projeto de API para extrair informações relevantes de faturas de energia elétrica usando um scrapper/parser. Os dados extraídos são armazenados em um banco de dados Postgres e a fatura em um Bucket na aws S3.

## Instalação/Rodando a aplicação

Para instalação do projeto será necessária sua máquina possuir Nodejs e docker instalados.
Primeiramente clone o repositório e adicione as variáveis de ambiente em um arquivo .env com as propriedades exemplificadas em .env.example e rode os comandos:

```bash
$ docker-compose up --build -d
```

Após os containers estarem ativos corretamente, para subir as tabelas no postgresql será necessário modificar a variável DB_HOST para localhost e rodar o comando:

```bash
$ npx prisma migrate dev
```

## Tecnologias

- [Nestjs](https://nestjs.com/) (Node + Express)
- [PostgreSql](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Aws](https://aws.amazon.com/pt/)
- [MulterS3](https://www.npmjs.com/package/multer-s3)
- [Pdf-parse](https://www.npmjs.com/package/pdf-parse)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Redis](https://redis.io/)
- [Jest](https://jestjs.io/pt-BR/)

## Test

```bash
# unit tests
$ npm run test
```

## Documentação

- [Trello](https://trello.com/b/vKeLJ60t/lumi-api)
- [Modelagem dos dados](https://drive.google.com/file/d/1FQa4svfv7Tx1btpTdtwJLOPvd7DkPmsR/view?usp=sharing)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
