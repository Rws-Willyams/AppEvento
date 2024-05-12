import React, { useState } from 'react';
import {ScrollView} from 'react-native';
import {Container,
        TxtContainer,
        Input,
        BtnCadastro,
        TxtCadastro,
        TabelaCadastro,
        LinhaCadastro,
        TxtResultado} from './src/styles'

const CadastroEventos = () => {
  const [nomeEvento, setNomeEvento] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [localEvento, setLocalEvento] = useState('');
  const [eventosCadastrados, setEventosCadastrado] = useState([
      {
         nome:' Nome do evento ',
         data: ' Data do evento ',
         local:' Local do evento '
      }
  ]);

  const cadastrarEvento = () => {
    
    setNomeEvento('Nome do evento:', nomeEvento);
    setDataEvento('Data do evento:', dataEvento);
    setLocalEvento('Local do evento:', localEvento);
    setNomeEvento('');
    setDataEvento('');
    setLocalEvento('');
  };

  

  return (
     <ScrollView style={{marginTop:50}}>
      <Container>
        <TxtContainer>Nome do Evento:</TxtContainer>
        <Input
          placeholder="Digite o nome do evento"
          value={nomeEvento}
          onChangeText={setNomeEvento}
        />
        
        <TxtContainer>Data do Evento:</TxtContainer>
        <Input
          placeholder="Digite a data do evento"
          value={dataEvento}
          onChangeText={setDataEvento}
        />
        
        <TxtContainer>Local do Evento:</TxtContainer>
        <Input
          placeholder="Digite o local do evento"
          value={localEvento}
          onChangeText={setLocalEvento}
        />

        <BtnCadastro onPress={cadastrarEvento}>
          <TxtCadastro>Cadastrar Evento</TxtCadastro>
        </BtnCadastro>

        <TabelaCadastro>
          {eventosCadastrados.map((evento, index) => (
            <LinhaCadastro key={index}>
              <TxtResultado>{`Nome do evento: ${evento.nome}`}</TxtResultado>
              <TxtResultado>{`Data do evento: ${evento.data}`}</TxtResultado>
              <TxtResultado>{`Local do evento: ${evento.local}`}</TxtResultado>
            </LinhaCadastro>
          ))}
        </TabelaCadastro>
          
      </Container>
     </ScrollView>
  );
};

export default CadastroEventos;