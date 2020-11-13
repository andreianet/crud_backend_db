# (Projeto 3 - Reprograma)
# CRUD - DB - BACKEND 

# PROJETO AGENDA DE CONTATOS:
Criar uma API Agenda para reunir contatos do nosso usuário.
Tecnlogias/Linguagens utilizadas: Mongoose, Node.js, Express, Nodemon, Cors, JavaScript.

# Campos da Collection CONTATOS:
- id
- nomen
- celular
- dataNascimento
- fotoPerfil

# Métodos HTTP utilizados:
- GET    - Busca dados
- POST   - Cria novo contato
- PUT    - Atualiza contato
- DELETE - Deleta um registro

# Essa API teve as seguintes rotas:
- "/" Retorna index com apresentação { mensagem: bem vinda a lista de contatos }
- "/contatos" Retorna todos os dados do banco de dados
- "/contatos/nome/[NOME]" Retorna contato por nome específico
- "/contatos/id/[ID]" Retorna contato por id específico
- "/contatos/criar" Cria novo contato e retorna mensagem amigável
- "/contatos/deletar/[ID]" Deleta contato por id específico e retorna mensagem amigável
- "/contatos/atualizar/telefone/[ID]" Atualiza somente telefone do contato por id específico e retorna mensagem amigável
- "/contatos/atualizar/[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)

# Estrutura do Projeto:
- Utilizado o Padrão MVC (M-Movel V-View C-Controller). Este padrão é separado em três camadas, de forma que arquitetura, torne fácil a manutenção da aplicação/desenvolvimento e leve.