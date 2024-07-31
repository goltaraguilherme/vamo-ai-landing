import "./index.css"

function App() {

  return (
    <>
      <header className="fixed w-screen bg-[#91F4CB] py-4">
        <div className="container flex justify-between items-center">
          <h1 className="text-4xl font-light">SeuRoteiro</h1>
          <nav>
            <ul className="flex font-light space-x-8">
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">Quem somos</a></li>
              <li><a href="#how-it-works" className="hover:underline">Como funciona</a></li>
              <li><a href="#how-it-works" className="hover:underline">Formulário</a></li>
              <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>


      <section id="hero" className="flex bg-white h-full md:h-screen py-16">
        <div className="container mt-40 text-[#2E2E2E] text-center md:text-left md:w-[60%]">
          <h2 className="px-8 md:p-0 text-5xl font-bold leading-tight">Encontre o Roteiro Perfeito para Você!</h2>
          <p className="px-8 md:p-0 mt-14 leading-normal -tracking-tighter">
            Viajar é uma das maiores alegrias da vida, mas planejar um roteiro perfeito pode ser desafiador. Encontre o destino ideal e as atividades mais incríveis, tudo personalizado para você. 
            Responda a algumas perguntas simples e deixe o resto conosco!
          </p>
          <button className="bg-[#7371f9] mt-10 shadow-lg font-bold text-white py-4 px-10 rounded-full hover:bg-purple-700">
            Ir para formulário
          </button>
        </div>
        <div className="hidden md:flex w-[40%] -mr-20">
          <img src="./imghero.png" alt="" />
        </div>
      </section>
      
      <section id="about" className="py-16 text-[#2E2E2E] text-center md:text-left">
          <div className="flex items-center justify-center p-8 bg-[#91F4CB]">
            <h2 className="px-8 md:p-0 font-medium text-4xl">Quem somos</h2>
          </div>

          <div className="container mt-14">
            <p className="px-8 md:p-0  font-light text-xl leading-relaxed -tracking-tighter">

              Somos apaixonados por viagens e acreditamos que cada pessoa merece uma experiência única e inesquecível. 
              Nosso objetivo é simplificar o planejamento da sua viagem, criando roteiros personalizados que atendam aos seus gostos 
              e preferências utilizando inteligencia artificial. 
              Com base nas suas respostas, nosso algoritmo avançado (ainda em versão beta) recomenda os melhores destinos e atividades,
              garantindo que cada viagem seja uma aventura memorável.
            </p>
          </div>
      
      </section>

      <section id="how-it-works" className="bg-[#91F4CB] h-full md:h-screen py-16">
        <div className="container">
          <h2 className="px-8 md:p-0 font-medium text-4xl mb-12">Como funciona</h2>
          <div className="px-8 md:p-0 flex md:flex-row flex-col gap-8 items-center justify-between text-center">
            <div className="flex flex-col flex-1 p-4 gap-4 bg-white rounded-2xl">
              <img src="./imgform.png" alt="Placeholder" className="mb-4" />
              <h3 className="font-bold text-xl">Preencha o formulário</h3>
              <p className="text-gray-700">Responda algumas perguntas sobre suas preferências de viagem.</p>
            </div>
            <div className="flex flex-col flex-1 p-4 gap-4 bg-white rounded-2xl">
              <img src="./imgitin.png" alt="Placeholder" className="mb-4" />
              <h3 className="font-bold text-xl">Receba seu roteiro</h3>
              <p className="text-gray-700">Receba um roteiro personalizado baseado em suas respostas.</p>
            </div>
            <div className="flex flex-col flex-1 p-4 gap-4 bg-white rounded-2xl">
              <img src="./imgtravel.png" alt="Placeholder" className="mb-4" />
              <h3 className="font-bold text-xl">Aproveite sua viagem</h3>
              <p className="text-gray-700">Desfrute de uma viagem incrível com um roteiro feito para você.</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <button className="bg-[#7371f9] text-lg mt-10 shadow-xl font-bold text-white py-5 px-10 rounded-full hover:bg-purple-700">
              Gerar meu roteiro personalizado
            </button>
          </div>

        </div>
      </section>

      <section id="contact" className="flex bg-white py-16 text-[#2E2E2E]">
        <div className="hidden md:flex container pr-0">
          <img src="./imgcontact.png" alt="" />
        </div>
        <div className="container text-right pl-0">
          <h2 className="px-8 md:p-0text-4xl font-medium mb-10">Contato</h2>
          <p className="px-8 md:p-0 font-light text-xl mb-10 text-left">
            Tem dúvidas ou deseja saber mais sobre nossas soluções? Entre em contato conosco!
          </p>
          <form className="px-8 md:p-0">
            <input type="text" placeholder="Nome" className="w-full p-2 mb-4 border border-black rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-black rounded" />
            <textarea placeholder="Mensagem" rows={6} className="w-full p-2 mb-4 border border-black rounded">

            </textarea>
            <button className="bg-[#7371f9] shadow-md text-white py-3 px-8 rounded-lg hover:bg-purple-700">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#91F4CB] text-center p-4">
        <p>&copy; 2024 SeuRoteiro. Todos os direitos reservados.</p>
      </footer>

    </>
  )
}

export default App
