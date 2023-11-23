import "./styles.css";
import { Link } from "react-router-dom";

function Home() { 

   return (
    <div>
      <h1 className="h1">Prontuário Vital</h1>
      <nav>
        <a href="#sobre">Sobre</a>
        
        <Link to="/dashboard">Pacientes</Link>
        
        <a href="#contato">Fale Conosco</a>
    </nav>

    <section id="sobre1">
        <h2>Sobre Nós</h2>
        <p>A Prontuário Vital é a principal provedora de soluções inovadoras em Prontuário de Saúde Global, dedicada a simplificar e aprimorar a prática médica em escala mundial. Oferecemos uma plataforma avançada que capacita médicos a acessar, gerenciar e colaborar eficientemente em registros de saúde de pacientes em qualquer lugar do globo. Proporcionamos aos médicos acesso instantâneo aos registros de saúde dos pacientes, independentemente da localização geográfica. Isso permite uma tomada de decisão mais rápida e informada, crucial para um atendimento de qualidade.</p>
    </section>

    <section id="pacientes1">
        <h2>Pacientes</h2>
        <p>Centralizamos todos os prontuários de saúde dos pacientes em uma interface unificada, proporcionando aos médicos um acesso rápido e fácil a informações cruciais em um só lugar.</p>
    </section>
    
    

    <section id="contato1">
        <h2>Fale Conosco</h2>
        <p>Estamos aqui para responder às suas perguntas e ouvir suas preocupações. Entre em contato conosco através do formulário abaixo ou pelos métodos de contato listados.</p>
        <br /><br /><br /><br /><br /><br />

        <form id="email">
            <label for="nomeContato">Nome:</label>
            <input type="text" id="nomeContato" name="nomeContato" required />

            <label for="emailContato">E-mail:</label>
            <input type="email" id="emailContato" name="emailContato" required />

            <label for="mensagemContato">Mensagem:</label>
            <textarea id="mensagemContato" name="mensagemContato" rows="4" required></textarea>

            <button>Enviar</button>
        </form>

        <br /><br /><br /><br /> <br /><br />
        <div id="h3">
            <h3>
            Na Prontuário Vital, estamos comprometidos em capacitar médicos a oferecerem cuidados excepcionais, alavancando a conectividade global para uma prática médica mais eficiente e centrada no paciente. Junte-se a nós na revolução da saúde global.
            </h3>
        </div>
        
    </section>
    </div>
   )
}

export default Home;