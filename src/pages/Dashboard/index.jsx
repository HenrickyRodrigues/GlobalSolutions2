import List from "../../components/List.jsx"
import "./styles.css";

function Dashboard(){

    const pacientes = [
        

        {
          nome: 'João da Silva Couto',
          idade: 35,
          historico: 'O Sr. Silva possui histórico de hipertensão arterial, para a qual toma medicação regularmente ele não tem histórico de doenças cardíacas conhecidas na família, não houve eventos recentes de estresse emocional significativo, ele não tem histórico de tabagismo, mas consome álcool socialmente '
        },
        {
          nome: 'Maria Souza Rodrigues',
          idade: 50,
          historico: 'A Sra. Maria Souza não possui histórico significativo de problemas gastrointestinais ou abdominais, ela não está grávida e não relata irregularidades menstruais,não há histórico recente de infecções gastrointestinais conhecidas, a dor abdominal é acompanhada por náuseas, mas a paciente nega vômitos, não há histórico de febre ou diarreia, A Sra. Maria Souza menciona uma perda de apetite nas últimas 24 horas'
        },
        {
          nome: 'Carlos Oliveira da Silva',
          idade: 28,
          historico: 'O Sr. Carlos Oliveira da Silva, um homem de 28 anos, agendou uma consulta médica de rotina para monitorar sua saúde geral e discutir questões preventivas, o paciente não relata queixas específicas ou sintomas agudos no momento da consulta, O Sr. Carlos tem um histórico de saúde relativamente estável, Não há diagnósticos crônicos significativos ou condições médicas conhecidas.'         
          
        },
        {
          nome: 'Ana Rodrigues Almeida',
          idade: 65,
          historico: 'A Sra. Ana Rodrigues Almeida, uma mulher de 65 anos, compareceu à clínica médica queixando-se de sintomas gripais e tosse persistente, a mesma relata que os sintomas começaram há aproximadamente uma semana e, apesar de alguns sinais de melhora, a tosse continua persistente e preocupante, A Sra. Ana não possui histórico significativo de doenças respiratórias crônicas,  não tem histórico conhecido de alergias sazonais ou ambientais, Não há registros de condições médicas graves no passado.'
        },
        {
          nome: 'Pedro Santos Alencar',
          idade: 42,
          historico: 'O Sr. Pedro Santos Alencar tem um histórico significativo de hipertensão arterial, diagnosticada pela primeira vez há cinco anos durante um exame de rotina, o mesmo está atualmente em tratamento medicamentoso para controlar a pressão arterial, conforme prescrito pelo médico, O paciente relata não ter experimentado sintomas agudos associados à hipertensão, como dores no peito ou dificuldade respiratória, menciona estar relativamente assintomático, mas reconhece a importância de manter a pressão arterial controlada.'
        }

        
      ];
       
  
    return (
      <div>
        
        <h1 className="h1">Prontuários dos Pacientes</h1>
        <div className="botao">
        <label for="nomeContato">Nome do Paciente:</label>
        <input type="text" id="nomeContato" name="nomeContato" required />          
        <button>Pesquisar</button>
        </div>

        <List itens={pacientes}  />
        
        
      </div>

      

      
      
    )
  }
  export default Dashboard

  