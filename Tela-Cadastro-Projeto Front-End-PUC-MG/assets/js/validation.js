  //Seleciona o elemento do formulário com a classe CSS 'validation' e armazena-o na variável form.
    const form = document.querySelector('.validation');
  
    //Adiciona um ouvinte de evento para o evento de envio do formulário.
    form.addEventListener('submit', function (event) {

    //Impede o comportamento padrão do formulário, que seria enviar os dados e recarregar a página.
      event.preventDefault();

    // seleciona os elementos dos inputs e armazanena em variáveis
      const name = form.querySelector('.name');
      const date = form.querySelector('.date');
      const email = form.querySelector('.email');
      const tel = form.querySelector('.tel');
      const password = form.querySelector('.password');
      const cPassword = form.querySelector('.cPassword');
      const aceitoTermos = form.querySelector('input[name="aceito_termos"]');
      const profissionalSaude = form.querySelector('input[name="profissional_saude"]');
      const areaAtuacaoSelect = form.querySelector('select[name="area_atuacao"]');
  
      //aqui ocorre verificações para a validação das informaçãoes preenchidas no cadastro
      if (name.value.length < 4) {
        alert('Nome deve ter pelo menos 4 caracteres');
        return;
      }
  
      if (!isValidEmail(email.value)) {
        alert('Email inválido');
        return;
      }
  
      if (password.value.length < 6) {
        alert('Senha deve ter pelo menos 6 caracteres');
        return;
      }
  
      if (password.value !== cPassword.value) {
        alert('As senhas não correspondem');
        return;
      }
  
      if (!aceitoTermos.checked) {
        alert('Você deve aceitar os termos e condições');
        return;
      }
  
      //Obtém os dados existentes do localStorage com a chave 'userList' e armazena em existingData.
      const existingData = localStorage.getItem('userList');

      //Converte existingData de JSON para objeto JavaScript, ou define uma lista vazia se existingData for nulo ou indefinido.
      const userList = existingData ? JSON.parse(existingData) : [];

      //Verifica se a opção de profissional de saúde está marcada. Se verdadeiro, obtém o valor selecionado em areaAtuacaoSelect, caso contrário, define como uma string vazia.
      const areaAtuacao = profissionalSaude.checked ? areaAtuacaoSelect.value : '';
  
      //Cria um objeto userData com os valores dos campos do formulário e a área de atuação com base na seleção de profissional de saúde.
      const userData = {
        name: name.value,
        date: date.value,
        email: email.value,
        tel: tel.value,
        password: password.value,
        areaAtuacao: areaAtuacao,
        profissionalSaude: profissionalSaude.checked
      };
  
      //Adiciona userData à lista de usuários.
      userList.push(userData);
  
      //Atualiza o localStorage com a lista de usuários convertida em formato JSON.
      localStorage.setItem('userList', JSON.stringify(userList));
  
      //Exibe um alerta informando que o cadastro foi realizado com sucesso;.
      alert('Cadastro realizado com sucesso!');

      //Limpa os campos do formulário após o envio bem-sucedido.
      form.reset(); 
  
      // Redireciona o usuário para a página de login
      window.location.href = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t9-saudavelmente/codigo-fonte/paginas/login/';
    });
  
    //Declara uma função que verifica se uma string é um email válido usando uma expressão regular.
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  