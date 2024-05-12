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
  const [eventosCadastrados, setEventosCadastrados] = useState([]);
  
  const cadastrarEvento = () => {
      adicionarEvento(nomeEvento, dataEvento, localEvento);
      setNomeEvento('');
      setDataEvento('');
      setLocalEvento('');
  };

  
  const adicionarEvento = (nome, data, local) => {
  const novoEvento = { nomeEvento, dataEvento, localEvento };
  setEventosCadastrados([...eventosCadastrados, novoEvento]);
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
          <TxtCadastro onPress={adicionarEvento}>Cadastrar Evento</TxtCadastro> 
        </BtnCadastro>

        <TabelaCadastro>
          {eventosCadastrados.map((evento, index) => (
            <LinhaCadastro key={index}>
              <TxtResultado>{`Nome do evento: ${evento.nomeEvento}`}</TxtResultado>
              {'\n'}
              <TxtResultado>{`Data do evento: ${evento.dataEvento}`}</TxtResultado>
              {'\n'}
              <TxtResultado>{`Local do evento: ${evento.localEvento}`}</TxtResultado>
            </LinhaCadastro>
          ))}
        </TabelaCadastro>
          
      </Container>
     </ScrollView>
  );
};

export default CadastroEventos;