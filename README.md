# NFT Claim

**Objetivo**
- Resgate de NFT de forma gratuita

**Requisito**
- Deve ser possível resgatar o NFT usando o email

**Onde**
- Será disponibilizado um link para resgate de cada NFT
- Esse link poderá ser disponibilizado em QR Code, NFC, e-mail

**Workflow**
1. Cliente compra a peça
2. Cliente recebe o link
3. Cliente faz login
4. Cliente resgata NFT

**Por que?**
Esse algoritmo será a base para diversas interações com o consumidor, principalmente ligados a distribuição de NFTs, como por exemplo o resgate de um NFT vinculado a uma peça de roupa, ou a distribuição de provas de presença em eventos, e também um caça ao tesouros.

**Segurança**
- O NFT deve estar disponível para resgate somente a partir de circunstâncias

**Referências**
- ThirdWeb
	- [Edition Drop](https://portal.thirdweb.com/contracts/explore/pre-built-contracts/edition-drop)
	- [Lazy Minting](https://portal.thirdweb.com/glossary/lazy-minting)
	- [Drop](https://portal.thirdweb.com/glossary/drop)
	- [Drop design document](https://portal.thirdweb.com/contracts/design-docs/drop)

**Resultados da pesquisa**
- Iniciei o projeto com a ideia de realizar os mints no backend, utilizando a private Key de uma carteira para realizar as operações on-chain
- Utilizando uma arquitetura hibrida, pensei em ligar o on-chain com o off-chain, tendo um banco de dados no Supabase para guardar informações importantes de negócio
- Dessa forma, teremos dados on-chain dando a segurança necessária de validação, e também um banco de dados off-chain, armazenando informações que são importantes para o negócio
- Pesquisando e entendendo melhor a ThirdWeb, cheguei até o conceito de Edition Drop, que é um contrato para realizar Lazy Mint, ou seja, deixar NFTs pré-mintadas que serão resgatadas por usuários sem custo algum
- Vejo que o ponto da transação ser free é essencial para o on-boarding de pessoas que ainda não estão em crypto, e ainda para ajudar nesse processo, também foi adicionado à aplicação um contrato da ThirdWeb de Smart Account, que permite a criação de carteiras Ethereum gerenciáveis
- A ThirdWeb é uma peça fundamental no fluxo de on-board, acredito hoje ser a melhor ferramenta de DevUX quando se trata de operação on-chain
- A demo hoje está configurada para que as pessoas possam fazer o login com seu e-mail, e regatar o NFT que foi liberado em test-net para fins de desenvolvimento

**Próximos passos**
- Seguindo com o desenvolvimento, considerando o resgate de uma unidade de NFT dentro de uma coleção, a ideia agora é ter uma página específica que da acesso ao resgate de um NFT vinculado ao link. Dessa formas será possível liberar o resgate de vários NFTs, porém que o resgate fica disponível somente mediante a liberação
- Outro ponto de evolução é o cadastro do usuário, hoje é utilizada a base do ThirdWeb para isso, com o modal pronto para uso, porém seria interessante que mais dados fossem solicitados do usuário
- Outra melhoria importante relacionada aos dados, é o nome de usuário, que pode ser mintado como forma de identidade. O próprio ThirdWeb tem um contrato de Loyalty, pode ser um caminho
- A ideia é que todo esse fluxo de de resgate de NFT, se torne depois uma ferramenta de validação de benefício, de forma que possamos validar a propriedade dos NFTs e conceder benefícios para as pessoas