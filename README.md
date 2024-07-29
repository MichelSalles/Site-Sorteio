Armazenamento de Participantes:

A lista de participantes é armazenada no array users. Esse array deve ser compartilhado entre as diferentes páginas do site. Em um ambiente real, esses dados seriam mantidos em um banco de dados.
Cadastro de Participantes:

Na página inicial (index.html), os usuários podem se cadastrar fornecendo email, telefone e Instagram. Esses dados são adicionados ao array users.
Login de Administrador:

Na página de administração (admin.html), o administrador deve fazer login para acessar as funcionalidades de sorteio e visualização de participantes. O login é validado com base nas credenciais definidas em adminCredentials.
Exibição de Participantes:

Após o login bem-sucedido, a função displayParticipants() é chamada para preencher a lista #participant-list com os dados dos participantes armazenados no array users.
Sorteio:

O botão "Sortear Vencedor" escolhe aleatoriamente um participante do array users e exibe as informações do vencedor na área #winner.