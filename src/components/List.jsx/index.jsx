function List({itens}){
    

  return (
    <>
        <h3 className="pacientes2">Histórico médico</h3>
        {
            itens.map((item) =>(
            <>
            <p className="nome">Nome: {item.nome}</p>
            <p className="idade">Idade: {item.idade}</p>
            <p className="historico">Histórico Médico: {item.historico}</p>
            </>
        ))}
    </>
  )
}


export default List 