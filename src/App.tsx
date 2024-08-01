import { useState } from "react";
import "./index.css";

function App() {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    originCity: "",
    destinationCity: "",
    departureDate: "",
    returnDate: "",
  });
  const [formPage, setFormPage] = useState<number>(0);

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header className="fixed w-screen bg-[#91F4CB] py-4 shadow-xl">
        <div className="container max-w-[2560px] flex justify-between items-center">
          <h1 className="text-4xl font-light">SeuRoteiro</h1>
          <nav className="flex flex-1 justify-end">
            <ul className="flex font-light space-x-8">
              <li>
                <a href="#hero" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:underline">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" onClick={() => setFormIsOpen(true)} >
                  Formulário
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="flex bg-white h-screen py-16">
        <div className="container max-w-[2560px] mt-60 md:mt-40 text-[#2E2E2E] text-center md:text-left md:w-[60%]">
          <h2 className="px-8 md:p-0 text-5xl font-bold leading-tight">
            Encontre o Roteiro Perfeito para Você!
          </h2>
          <p className="px-8 md:p-0 mt-24 md:mt-14 leading-normal -tracking-tighter">
            Viajar é uma das maiores alegrias da vida, mas planejar um roteiro
            perfeito pode ser desafiador. Encontre o destino ideal e as
            atividades mais incríveis, tudo personalizado para você. Responda a
            algumas perguntas simples e deixe o resto conosco!
          </p>
          <button 
            className="bg-[#7371f9] mt-16 md:mt-10 shadow-lg font-bold text-white py-4 px-10 rounded-full hover:bg-[#6360fd]"
            onClick={() => setFormIsOpen(true)}>
            Ir para formulário
          </button>
        </div>
        <div className="hidden md:flex w-[40%] -mr-20">
          <img src="./imghero.png" alt="" />
        </div>
      </section>

      <section
        id="about"
        className="py-16 text-[#2E2E2E] text-center md:text-left"
      >
        <div className="flex items-center justify-center p-8 bg-[#91F4CB]">
          <h2 className="px-8 md:p-0 font-medium text-4xl">Quem somos</h2>
        </div>

        <div className="container max-w-[2560px] mt-14">
          <p className="px-8 md:p-0  font-light text-xl leading-relaxed -tracking-tighter">
            Somos apaixonados por viagens e acreditamos que cada pessoa merece
            uma experiência única e inesquecível. Nosso objetivo é simplificar o
            planejamento da sua viagem, criando roteiros personalizados que
            atendam aos seus gostos e preferências utilizando inteligencia
            artificial. Com base nas suas respostas, nosso algoritmo avançado
            (ainda em versão beta) recomenda os melhores destinos e atividades,
            garantindo que cada viagem seja uma aventura memorável.
          </p>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-[#91F4CB] h-full md:h-screen py-16"
      >
        <div className="container max-w-[2560px]">
          <h2 className="px-8 md:p-0 font-medium text-4xl mb-12">
            Como funciona
          </h2>
          <div className="px-8 md:p-0 flex md:flex-row flex-col gap-8 items-center justify-between text-center">
            <div className="flex flex-col flex-1 p-4 gap-4 bg-white rounded-2xl">
              <img src="./imgform.png" alt="Placeholder" className="mb-4" />
              <h3 className="font-bold text-xl">Preencha o formulário</h3>
              <p className="text-gray-700">
                Responda algumas perguntas sobre suas preferências de viagem.
              </p>
            </div>
            <div className="flex flex-col flex-1 p-4 gap-4 bg-white rounded-2xl">
              <img src="./imgitin.png" alt="Placeholder" className="mb-4" />
              <h3 className="font-bold text-xl">Receba seu roteiro</h3>
              <p className="text-gray-700">
                Receba um roteiro personalizado baseado em suas respostas.
              </p>
            </div>
            <div className="flex flex-col flex-1 p-4 gap-4 bg-white rounded-2xl">
              <img src="./imgtravel.png" alt="Placeholder" className="mb-4" />
              <h3 className="font-bold text-xl">Aproveite sua viagem</h3>
              <p className="text-gray-700">
                Desfrute de uma viagem incrível com um roteiro feito para você.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button 
              className="bg-[#7371f9] text-lg mt-10 shadow-xl font-bold text-white py-5 px-10 rounded-full hover:bg-[#6360fd]"
              onClick={() => setFormIsOpen(true)}>
              Gerar meu roteiro personalizado
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex w-screen bg-white py-16 text-[#2E2E2E]"
      >
        <div className="hidden md:flex container max-w-[2560px] pr-0">
          <img src="./imgcontact.png" alt="" />
        </div>
        <div className="container max-w-[2560px] text-right pl-0">
          <h2 className="px-8 md:p-0 text-4xl font-medium mb-10">Contato</h2>
          <p className="px-8 md:p-0 font-light text-xl mb-10 text-left">
            Tem dúvidas ou deseja saber mais sobre nossas soluções? Entre em
            contato conosco!
          </p>
          <form className="px-8 md:p-0">
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-2 mb-4 border border-black rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-black rounded"
            />
            <textarea
              placeholder="Mensagem"
              rows={6}
              className="w-full p-2 mb-4 border border-black rounded"
            ></textarea>
            <button className="bg-[#7371f9] shadow-md text-white py-3 px-8 rounded-lg hover:bg-purple-700">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#91F4CB] text-center p-4">
        <p>&copy; 2024 SeuRoteiro. Todos os direitos reservados.</p>
      </footer>

      {formIsOpen && (
        <div className="flex flex-col p-6 fixed inset-0 z-50 m-auto bg-white rounded-xl h-[90%] w-[80%] md:w-[50%] shadow-2xl overflow-auto">
          <header className="flex justify-center w-full">
            <h2 className="flex-1 text-xl font-medium text-center">
              Formulário
            </h2>
            <button 
              className="font-bold"
              onClick={() => setFormIsOpen(false)}>
                X
            </button>
          </header>

          <div className="flex flex-col flex-1 mt-6">
            {formPage == 0 ? (
              <>
                <h1 className="text-xl font-bold">
                  Para começar precisamos te conhecer um pouco
                </h1>

                <div className="mt-6 flex gap-8">
                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Nome:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4 flex gap-8">
                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="originCity"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Cidade de Origem:
                    </label>
                    <input
                      type="text"
                      id="originCity"
                      name="originCity"
                      value={formData.originCity}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="destinationCity"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Cidade de Destino:
                    </label>
                    <input
                      type="text"
                      id="destinationCity"
                      name="destinationCity"
                      value={formData.destinationCity}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4 flex gap-8">
                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="departureDate"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Data de Ida:
                    </label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="returnDate"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Data de Volta:
                    </label>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </>
            ) : formPage == 1 ? (
              <>
                <div className="mt-6 flex gap-8">
                  <div className="flex flex-col flex-1 gap-4">
                    <div className="flex flex-col mb-4 flex-1">
                      <label
                        htmlFor="loc"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Já sabe como pretende se locomover no seu destino?
                      </label>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="carrop"
                          name="loc"
                          value="Carro próprio"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="carrop">Carro próprio</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="carroa"
                          name="loc"
                          value="Carro alugado"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="carroa">Carro alugado</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="transp"
                          name="loc"
                          value="Transporte pub"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="transp">Transporte público</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="taxi"
                          name="loc"
                          value="Taxi"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="taxi">Uber/Táxi</label>
                      </div>
                    </div>
                    <div className="mb-4 flex-1">
                      <label className="block text-gray-700 font-bold mb-2">
                        Quem será sua companhia nesta viagem?
                      </label>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="solo"
                          name="loc"
                          value="Solo"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="solo">Vou sozinho</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="casal"
                          name="loc"
                          value="Casal"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="casal">Minha parceira(o)</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="amigos"
                          name="loc"
                          value="Amigos"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="amigos">Amigos</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="familia"
                          name="loc"
                          value="Familia"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="familia">Familiares</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex-1">
                    <label className="block text-gray-700 font-bold mb-2">
                      Deseja incluir recomendações de hospedagem no roteiro? Se
                      sim, qual tipo de hospedagem você prefere?
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="hotel"
                        name="loc"
                        value="Hotel"
                        //onChange={}
                        className="cursor-pointer mr-3"
                        //required
                      />
                      <label htmlFor="hotel">Hotel</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="pousada"
                        name="loc"
                        value="Pousada"
                        //onChange={}
                        className="cursor-pointer mr-3"
                        //required
                      />
                      <label htmlFor="pousada">Pousada</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="airbnb"
                        name="loc"
                        value="Airbnb"
                        //onChange={}
                        className="cursor-pointer mr-3"
                        //required
                      />
                      <label htmlFor="airbnb">Airbnb</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="hostel"
                        name="loc"
                        value="Hostel"
                        //onChange={}
                        className="cursor-pointer mr-3"
                        //required
                      />
                      <label htmlFor="hostel">Hostel</label>
                    </div>

                    <div className="flex items-center mt-2">
                      <input
                        type="text"
                        id=""
                        name=""
                        placeholder="Já sei onde ficar"
                        //onChange={}
                        className="w-full p-2 border border-gray-300 rounded"
                        //required
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : formPage == 2 ? (
              <>
                <div className="mt-6 flex gap-8">
                  <div className="flex flex-col flex-1 gap-4">
                    <div className="flex flex-col mb-4 flex-1">
                      <label
                        htmlFor="loc"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Quais são seus interesses principais durante a viagem?
                      </label>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="praias"
                          name="loc"
                          value="Praias"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="praias">Praias</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="montanha"
                          name="loc"
                          value="Montanha"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="montanha">Montanhas</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="trilha"
                          name="loc"
                          value="trilha"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="trilha">Trilhas</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cacho"
                          name="loc"
                          value="Cachoeiras"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="cacho">Cachoeiras</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cultura"
                          name="loc"
                          value="Cultura"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="cultura">Cultura</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rest"
                          name="loc"
                          value="Restaurantes"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="rest">Restaurantes</label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="vidanot"
                          name="loc"
                          value="Vida noturna"
                          //onChange={}
                          className="cursor-pointer mr-3"
                          //required
                        />
                        <label htmlFor="vidanot">Vida noturna</label>
                      </div>

                      <div className="flex items-center mt-2">
                        <input
                          type="text"
                          id="outro"
                          name="loc"
                          value=""
                          placeholder="Outro"
                          //onChange={}
                          className="w-full p-2 border border-gray-300 rounded"
                          //required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex-1">
                    <label className="block text-gray-700 font-bold mb-2">
                      Qual é o seu orçamento estimado para a viagem? (Se souber)
                    </label>

                    <div className="flex items-center mt-2">
                      <input
                        type="number"
                        id=""
                        name=""
                        placeholder="Orçamento"
                        //onChange={}
                        className="w-full p-2 border border-gray-300 rounded"
                        //required
                      />
                    </div>

                    <div className="my-4 flex-1">
                      <label className="block text-gray-700 font-bold mb-2">
                        Prioridade de gastos (enumerar de 1 a 3)
                      </label>

                      <div className="flex items-center mt-2">
                        <label>Alimentação</label>
                        <input
                          type="number"
                          id=""
                          name=""
                          placeholder="Prioridade"
                          //onChange={}
                          className="ml-2 w-full p-2 border border-gray-300 rounded"
                          //required
                        />
                      </div>

                      <div className="flex items-center mt-2">
                        <label>Passeios</label>
                        <input
                          type="number"
                          id=""
                          name=""
                          placeholder="Prioridade"
                          //onChange={}
                          className="ml-2 w-full p-2 border border-gray-300 rounded"
                          //required
                        />
                      </div>

                      <div className="flex items-center mt-2">
                        <label>Hospedagens</label>
                        <input
                          type="number"
                          id=""
                          name=""
                          placeholder="Prioridade"
                          //onChange={}
                          className="ml-2 w-full p-2 border border-gray-300 rounded"
                          //required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-6 flex gap-8">
                  <div className="flex flex-col flex-1 gap-4">
                    <label className="block text-gray-700 font-bold">
                      Deseja conhecer alguma atração específica da região?
                    </label>

                    <div className="flex items-center">
                      <input
                        type="text"
                        id=""
                        name=""
                        placeholder="Nome da atração"
                        //onChange={}
                        className="w-full p-2 border border-gray-300 rounded"
                        //required
                      />
                    </div>

                    <div className="flex flex-col flex-1 gap-4">
                      <label className="block text-gray-700 font-bold">
                        Há alguma atração que não deseja incluir?
                      </label>

                      <div className="flex items-center">
                        <input
                          type="text"
                          id=""
                          name=""
                          placeholder="Nome da atração"
                          //onChange={}
                          className="w-full p-2 border border-gray-300 rounded"
                          //required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 gap-4">
                    <label className="block text-gray-700 font-bold">
                      Esquemos de algo? Fique livre para ponderações adicionais que desejar
                    </label>
                  
                    <div className="flex items-center">
                      <textarea
                        rows={4}
                        id=""
                        name=""
                        placeholder="Nome da atração"
                        //onChange={}
                        className="w-full p-2 border border-gray-300 rounded"
                        //required
                      />
                    </div>
                  </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex gap-2 w-full justify-center items-center mb-8">
            <button
              className={`w-2 h-2 ${
                formPage == 0 ? "bg-[#91F4CB]" : "bg-[#868686]"
              } rounded-full`}
              onClick={() => setFormPage(0)}
            />
            <button
              className={`w-2 h-2 ${
                formPage == 1 ? "bg-[#91F4CB]" : "bg-[#868686]"
              } rounded-full`}
              onClick={() => setFormPage(1)}
            />
            <button
              className={`w-2 h-2 ${
                formPage == 2 ? "bg-[#91F4CB]" : "bg-[#868686]"
              } rounded-full`}
              onClick={() => setFormPage(2)}
            />
            <button
              className={`w-2 h-2 ${
                formPage == 3 ? "bg-[#91F4CB]" : "bg-[#868686]"
              } rounded-full`}
              onClick={() => setFormPage(3)}
            />
          </div>

          <div className="flex w-full justify-around">
            <button
              className="w-[30%] py-4 px-6 text-red-500 font-bold border-red-500 border rounded-full"
              onClick={() => setFormPage([1, 0].includes(formPage) ? 0 : formPage - 1)}
            >
              Voltar
            </button>

            <button
              className="w-[30%] py-4 px-6 bg-[#91F4CB] font-bold border-[#91F4CB] border rounded-full "
              onClick={() => setFormPage([2, 3].includes(formPage) ? 3 : formPage + 1)}
            >
              Avançar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
