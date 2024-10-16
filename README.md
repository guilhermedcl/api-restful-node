# API de Gerenciamento de Materiais

Esta API permite gerenciar materiais em uma lista, oferecendo funcionalidades para listar, criar, buscar, alterar e remover materiais.

### Requisito 1 - Listar Materiais
- **Descrição**: A API deve fornecer o serviço de listagem de materiais.
- **Método**: `GET`
- **Rota**: `/materials`
- **Resposta**:
  - **Status**: `200 OK`
  - **Body**:
    ```json
    {
      "materials": [
        {
          "id": 0,
          "name": "folha A4",
          "qtde": 100
        }
      ]
    }
    ```
- **Detalhes**:
- Ao receber a requisição, o servidor deve devolver um arquivo JSON contendo todos os materiais
  - `id`: identificador do material
  - `name`: nome registrado
  - `qtde`: quantidade registrada
  
### Requisito 2 - Criação
- **Descrição**: A API deve fornecer o serviço de criação de novo material.
- **Método**: `POST`
- **Rota**: `/materials`
- **Resposta**:
  - **Status**: `201 CREATED`
  - **Body**:
  ```json
  {
    "material": {
      "name": "folha A4",
      "qtde": 100
    }
  }
  ```
- **Detalhes**:
  - Ao receber a requisição, o servidor deve adicionar uma nova entrada na lista `materials` do objeto data

### Requisito 3 - Busca por ID
- **Descrição**: A API deve fornecer o serviço de busca por ID de um material.
- **Método**: `GET`
- **Rota**: `/materials/<id>`
- **Resposta**:
  - **Status**: `200 OK`
  - **Body**:
    ```json
    {
      "material": {
        "id": 1,
        "name": "folha A4",
        "qtde": 100
      }
    }
    ```
- **Detalhes**:
  - Ao receber a requisição, o servidor deve usar o parâmetro ID recebido para buscar na lista `materials` o material com o ID especificado.
  - Retornar em formato JSON o elemento encontrado, contendo ID, nome e quantidade.
 
### Requisito 4 - Alterar por ID
- **Descrição**: A API deve fornecer o serviço de alteração de registro por ID de um material.
- **Método**: `PUT`
- **Rota**: `/materials/<id>`
- **Resposta**:
  - **Status**: `200 OK`
  - **Body**:
  ```json
  {
    "material": {
      "name": "folha A3",
      "qtde": 50
    }
  }
  ```
- **Detalhes**:
  - Ao receber a requisição, o servidor deve usar o parâmetro ID recebido para atualizar na lista `materials` o material com o ID especificado.

### Requisito 5 - Remover por ID
- **Descrição**: A API deve fornecer o serviço de remoção de um material e sua quantidade baseado no ID.
- **Método**: `DELETE`
- **Rota**: `/materials/<id>`
- **Resposta**:
  - **Status**: `200 OK`

- **Detalhes**:
  - Ao receber a requisição, o servidor deve usar o parâmetro ID recebido para remover da lista `materials` o elemento que tenha o atributo ID igual ao recebido.
