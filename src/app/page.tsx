"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  // Quantos livros vão ser impressos
  const [quantosLivros, setQuantosLivros] = useState("");
  // Quantos livros vão ser impressos

  // Custos fixos
  const [coordenador, setCoordenador] = useState("");
  const [capaEDesigner, setCapaEDesigner] = useState("");
  const [fotografo, setFotografo] = useState("");
  const [ifcIsbnCodBarras, setIfcIsbnCodBarras] = useState("");
  const [conviteDigital, setConviteDigital] = useState("");
  const [bannerDesigner, setBannerDesigner] = useState("");
  const [reelsVinheta, setReelsVinheta] = useState("");
  const [primeiraOrelhaResumo, setPrimeiraOrelhaResumo] = useState("");
  const [segundaOrelhaMiniBio, setSegundaOrelhaMiniBio] = useState("");
  const [prefacioConvidado, setPrefacioConvidado] = useState("");
  const [apresentacaoConvidado, setApresentacaoConvidado] = useState("");
  const [quartaCapaTextoDoLivro, setQuartaCapaTextoDoLivro] = useState("");
  // Custos fixos

  // Páginas do livro
  const [custoDaCapa, setCustoDaCapa] = useState("");
  const [paginas, setPaginas] = useState("");
  const [laudas, setLaudas] = useState("");
  const [paginasSemFotos, setPaginasSemFotos] = useState("");
  const [paginasComFotos, setPaginasComFotos] = useState("");
  const [fotos, setFotos] = useState("");
  const [ilustracoes, setIlustracoes] = useState("");
  // Páginas do livro

  // Custos por página
  const [revisor, setRevisor] = useState("");
  const [copydesk, setCopydesk] = useState("");
  const [diagramador, setDiagramador] = useState("");
  const [diagramadorComFoto, setDiagramadorComFoto] = useState("");
  const [tratamentoPorImagem, setTratamentoPorImagem] = useState("");
  const [tratamentoPorIlustracao, setTratamentoPorIlustracao] = useState("");
  // Custos por página

  //Custos ligados a impressão
  const [impressãoSemFoto, setImpressãoSemFoto] = useState("");
  const [impressãoComFoto, setImpressãoComFoto] = useState("");
  //Custos ligados a impressão

  // Custos ligados a distribuição imposto e margem de lucro
  const [transporte, setTransporte] = useState(0.15);
  const [distribuicao, setDistribuicao] = useState(0.1);
  const [margemDeLucro, setMargemDeLucro] = useState(0.2);
  const [imposto, setImposto] = useState(0.07);
  // Custos ligados a distribuição imposto e margem de lucro

  // Função para formatar números inseridos pelo usuário
  const formatNumberInput = (input: any) => {
    const formattedInput = input.replace(/[^0-9,.]/g, ""); // Remover caracteres não numéricos, exceto vírgula e ponto
    return formattedInput;
  };
  // Função para formatar números inseridos pelo usuário

  // Somatório de todos os custos fixos SOMADOS AO FINAL A TODOS OS LIVROS
  const totalCustosFixos =
    parseFloat(coordenador.replace(",", ".")) +
    parseFloat(capaEDesigner.replace(",", ".")) +
    parseFloat(fotografo.replace(",", ".")) +
    parseFloat(ifcIsbnCodBarras.replace(",", ".")) +
    parseFloat(conviteDigital.replace(",", ".")) +
    parseFloat(bannerDesigner.replace(",", ".")) +
    parseFloat(reelsVinheta.replace(",", ".")) +
    parseFloat(primeiraOrelhaResumo.replace(",", ".")) +
    parseFloat(segundaOrelhaMiniBio.replace(",", ".")) +
    parseFloat(prefacioConvidado.replace(",", ".")) +
    parseFloat(apresentacaoConvidado.replace(",", ".")) +
    parseFloat(quartaCapaTextoDoLivro.replace(",", "."));
  // Somatório de todos os custos fixos SOMADOS AO FINAL A TODOS OS LIVROS

  // Somatório de todos os custos por lauda UM LIVRO
  const totalCustoPorLauda =
    parseFloat(revisor.replace(",", ".")) +
    parseFloat(diagramador.replace(",", ".")) +
    parseFloat(diagramadorComFoto.replace(",", ".")) +
    parseFloat(copydesk.replace(",", "."));
  // Somatório de todos os custos por lauda UM LIVRO

  // Total do custo de um livro que usam todas as laudas de referência UM LIVRO
  const totalCustoRevisorDiagramadorDiagramadorComFotoCopydeskUmLivro =
    totalCustoPorLauda * parseFloat(laudas);
  // Total do custo de um livro que usam todas as laudas de referência UM LIVRO

  // Total do custo de fotos UM LIVRO
  const totalCustoFotosUmLivro =
    parseFloat(fotos.replace(",", ".")) *
    parseFloat(tratamentoPorImagem.replace(",", "."));
  // Total do custo de fotos UM LIVRO

  // Total do custo de ilustrações UM LIVRO
  const totalCustoIlustracoesUmLivro =
    parseFloat(ilustracoes.replace(",", ".")) *
    parseFloat(tratamentoPorIlustracao.replace(",", "."));
  // Total do custo de ilustrações UM LIVRO

  // Total do custo de impressão da capa TODOS OS LIVROS
  const totalCustoImpressaoDaCapaTodosOsLivros =
    parseFloat(custoDaCapa.replace(",", ".")) * parseFloat(quantosLivros);
  // Total do custo de impressão da capa TODOS OS LIVROS

  // Total do custo de impressão sem foto UM LIVRO
  const totalCustoImpressaoSemFotoUmLivro =
    parseFloat(impressãoSemFoto.replace(",", ".")) *
    parseFloat(paginasSemFotos.replace(",", "."));
  // Total do custo de impressão sem foto UM LIVRO

  // Total do custo de impressão com foto UM LIVRO
  const totalCustoImpressaoComFotoUmLivro =
    parseFloat(impressãoComFoto.replace(",", ".")) *
    parseFloat(paginasComFotos.replace(",", "."));
  // Total do custo de impressão com foto UM LIVRO

  // Total do custo de impressão sem capa TODOS OS LIVROS
  const totalCustoImpressaoSemCapaTodosOsLivros =
    (totalCustoImpressaoSemFotoUmLivro + totalCustoImpressaoComFotoUmLivro) *
    parseFloat(quantosLivros);
  // Total do custo de impressão sem capa TODOS OS LIVROS

  // Total do custo de impressão TODOS OS LIVROS
  const totalCustoImpressaoTodosOsLivros =
    totalCustoImpressaoDaCapaTodosOsLivros +
    totalCustoImpressaoSemCapaTodosOsLivros;
  // Total do custo de impressão TODOS OS LIVROS

  // Total do custo de transporte de TODOS OS LIVROS
  const totalCustoTransporteTodosOsLivros =
    totalCustoImpressaoTodosOsLivros * transporte;
  // Total do custo de transporte de TODOS OS LIVROS

  // Total do custo de distribuição de TODOS OS LIVROS
  const totalCustoDistribuicaoTodosOsLivros =
    totalCustoImpressaoTodosOsLivros * distribuicao;
  // Total do custo de distribuição TODOS OS LIVROS

  // Total do custo final sem margem de lucro, impostos TODOS OS LIVROS
  const totalCustoSemMargemDeLucroEImpostosTodosOsLivros =
    totalCustosFixos +
    totalCustoRevisorDiagramadorDiagramadorComFotoCopydeskUmLivro +
    totalCustoFotosUmLivro +
    totalCustoIlustracoesUmLivro +
    totalCustoImpressaoTodosOsLivros +
    totalCustoTransporteTodosOsLivros +
    totalCustoDistribuicaoTodosOsLivros;
  // Total do custo final sem margem de lucro, impostos TODOS OS LIVROS

  // Margem de lucro TODOS OS LIVROS
  const margemDeLucroTodosOsLivros =
    totalCustoSemMargemDeLucroEImpostosTodosOsLivros * margemDeLucro;
  // Margem de lucro TODOS OS LIVROS

  // Imposto TODOS OS LIVROS
  const impostoTodosOsLivros =
    (totalCustoSemMargemDeLucroEImpostosTodosOsLivros +
      margemDeLucroTodosOsLivros) *
    imposto;
  // Imposto TODOS OS LIVROS

  // Custo final TODOS OS LIVROS
  const totalCustoFinalTodosOsLivros =
    totalCustoSemMargemDeLucroEImpostosTodosOsLivros +
    margemDeLucroTodosOsLivros +
    impostoTodosOsLivros;
  // Custo final TODOS OS LIVROS

  // Custo final UM LIVRO
  const totalCustoFinalUmLivro =
    totalCustoFinalTodosOsLivros / parseFloat(quantosLivros);
  // Custo final UM LIVRO

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {/* Form dos custos fixos */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Custos fixos adicionados ao final</CardTitle>
            <CardDescription>Insira os valores absolutos.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="coordenador">Coordenador</Label>
                  <Input
                    id="coordenador"
                    placeholder="Custo do coordenador"
                    type="text"
                    value={coordenador}
                    onChange={(e) =>
                      setCoordenador(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="capaEDesigner">Capa e Designer</Label>
                  <Input
                    id="capaEDesigner"
                    placeholder="Custo da capa e designer"
                    type="text"
                    value={capaEDesigner}
                    onChange={(e) =>
                      setCapaEDesigner(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="fotografo">Fotógrafo</Label>
                  <Input
                    id="fotografo"
                    placeholder="Custo do fotógrafo"
                    type="text"
                    value={fotografo}
                    onChange={(e) =>
                      setFotografo(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="ifcIsbnCodBarras">IFC ISBN Cod. Barras</Label>
                  <Input
                    id="ifcIsbnCodBarras"
                    placeholder="Custo do IFC ISBN Cod. Barras"
                    type="text"
                    value={ifcIsbnCodBarras}
                    onChange={(e) =>
                      setIfcIsbnCodBarras(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="conviteDigital">Convite Digital</Label>
                  <Input
                    id="conviteDigital"
                    placeholder="Custo do Convite Digital"
                    type="text"
                    value={conviteDigital}
                    onChange={(e) =>
                      setConviteDigital(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="bannerDesigner">Banner Designer</Label>
                  <Input
                    id="bannerDesigner"
                    placeholder="Custo do Banner Designer"
                    type="text"
                    value={bannerDesigner}
                    onChange={(e) =>
                      setBannerDesigner(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="reelsVinheta">Reels Vinheta</Label>
                  <Input
                    id="reelsVinheta"
                    placeholder="Custo do Reels Vinheta"
                    type="text"
                    value={reelsVinheta}
                    onChange={(e) =>
                      setReelsVinheta(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="primeiraOrelhaResumo">
                    Primeira Orelha Resumo
                  </Label>
                  <Input
                    id="primeiraOrelhaResumo"
                    placeholder="Custo da Primeira Orelha Resumo"
                    type="text"
                    value={primeiraOrelhaResumo}
                    onChange={(e) =>
                      setPrimeiraOrelhaResumo(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="segundaOrelhaMiniBio">
                    Segunda Orelha MiniBio
                  </Label>
                  <Input
                    id="segundaOrelhaMiniBio"
                    placeholder="Custo da Segunda Orelha MiniBio"
                    type="text"
                    value={segundaOrelhaMiniBio}
                    onChange={(e) =>
                      setSegundaOrelhaMiniBio(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="prefacioConvidado">Prefácio Convidado</Label>
                  <Input
                    id="prefacioConvidado"
                    placeholder="Custo do Prefácio Convidado"
                    type="text"
                    value={prefacioConvidado}
                    onChange={(e) =>
                      setPrefacioConvidado(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="apresentacaoConvidado">
                    Apresentação Convidado
                  </Label>
                  <Input
                    id="apresentacaoConvidado"
                    placeholder="Custo do Apresentação Convidado"
                    type="text"
                    value={apresentacaoConvidado}
                    onChange={(e) =>
                      setApresentacaoConvidado(
                        formatNumberInput(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="quartaCapaTextoDoLivro">
                    Quarta Capa Texto Do Livro
                  </Label>
                  <Input
                    id="quartaCapaTextoDoLivro"
                    placeholder="Custo da Quarta Capa Texto Do Livro"
                    type="text"
                    value={quartaCapaTextoDoLivro}
                    onChange={(e) =>
                      setQuartaCapaTextoDoLivro(
                        formatNumberInput(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        {/* Form dos custos fixos */}

        {/* Form número de páginas e inputs usados de referência nos cálculos */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              Páginas e seus conteúdos usados de referência nos calculos
            </CardTitle>
            <CardDescription>
              Insira quantas páginas e fotos associados às diferentes
              categorias.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="custoDaCapa">Custo da Capa</Label>
                  <Input
                    id="custoDaCapa"
                    placeholder="Custo da capa"
                    type="text"
                    value={custoDaCapa}
                    onChange={(e) =>
                      setCustoDaCapa(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="quantosLivros">
                    Quantas livros serão impressos?
                  </Label>
                  <Input
                    id="quantosLivros"
                    placeholder="Quantas livros serão impressos?"
                    type="text"
                    value={quantosLivros}
                    onChange={(e) =>
                      setQuantosLivros(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="paginas">
                    Quantas paginas terá o livro? (Total)
                  </Label>
                  <Input
                    id="paginas"
                    placeholder="Quantas paginas terá o livro?"
                    type="text"
                    value={paginas}
                    onChange={(e) =>
                      setPaginas(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="laudas">
                    Quantas laudas terá o livro? (Total)
                  </Label>
                  <Input
                    id="laudas"
                    placeholder="Quantas laudas terá o livro?"
                    type="text"
                    value={laudas}
                    onChange={(e) =>
                      setLaudas(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="pagesWithoutPictures">
                    Quantas páginas sem fotos tem o livro?
                  </Label>
                  <Input
                    id="pagesWithoutPictures"
                    placeholder="Quantas páginas sem fotos tem o livro?"
                    type="text"
                    value={paginasSemFotos}
                    onChange={(e) =>
                      setPaginasSemFotos(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="pagesWithPictures">
                    Quantas páginas com fotos tem o livro?
                  </Label>
                  <Input
                    id="pagesWithPictures"
                    placeholder="Quantas páginas com fotos tem o livro?"
                    type="text"
                    value={paginasComFotos}
                    onChange={(e) =>
                      setPaginasComFotos(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="pictures">Quantas fotos tem o livro?</Label>
                  <Input
                    id="pictures"
                    placeholder="Quantas fotos tem o livro?"
                    type="text"
                    value={fotos}
                    onChange={(e) =>
                      setFotos(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="illustrations">
                    Quantas ilustrações tem o livro?
                  </Label>
                  <Input
                    id="illustrations"
                    placeholder="Quantas ilustrações tem o livro?"
                    type="text"
                    value={ilustracoes}
                    onChange={(e) =>
                      setIlustracoes(formatNumberInput(e.target.value))
                    }
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        {/* Form número de páginas e inputs usados de referência nos cálculos */}

        {/* Form dos custos ligados a todas as páginas dos livros */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Custos ligados a todas as páginas do livro</CardTitle>
            <CardDescription>
              Insira os custos associados por página.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="revisor">Revisor (custo por página)</Label>
                  <Input
                    id="revisor"
                    placeholder="Custo do Revisor por página"
                    type="text"
                    value={revisor}
                    onChange={(e) =>
                      setRevisor(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="copydesk">Copydesk (custo por página)</Label>
                  <Input
                    id="copydesk"
                    placeholder="Custo do copydesk por página"
                    type="text"
                    value={copydesk}
                    onChange={(e) =>
                      setCopydesk(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="diagramador">
                    Diagramador (custo por página)
                  </Label>
                  <Input
                    id="diagramador"
                    placeholder="Custo do diagramador por página"
                    type="text"
                    value={diagramador}
                    onChange={(e) =>
                      setDiagramador(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="diagramadorComFoto">
                    Diagramador com foto (custo por página)
                  </Label>
                  <Input
                    id="diagramadorComFoto"
                    placeholder="Custo do diagramador com foto por página"
                    type="text"
                    value={diagramadorComFoto}
                    onChange={(e) =>
                      setDiagramadorComFoto(formatNumberInput(e.target.value))
                    }
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        {/* Form dos custos ligados a todas as páginas dos livros */}

        {/* Form dos custos ligados a outros inputs (Dentro temos também o CardFooter que guarda o modal com os resultados finais) */}
        <Card className="w-[350px]">
          {/* Form dos custos ligados a outros inputs  */}
          <CardHeader>
            <CardTitle>Custos ligados a outros inputs</CardTitle>
            <CardDescription>
              Insira os custos associados por página.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="impressaoSemFoto">
                    Impressão sem foto (custo por página sem foto)
                  </Label>
                  <Input
                    id="impressaoSemFoto"
                    placeholder="Impressão sem foto (custo por página)"
                    type="text"
                    value={impressãoSemFoto}
                    onChange={(e) =>
                      setImpressãoSemFoto(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="impressaoComFoto">
                    Impressão com foto (custo por página com foto)
                  </Label>
                  <Input
                    id="impressaoComFoto"
                    placeholder="Impressão com foto (custo por página)"
                    type="text"
                    value={impressãoComFoto}
                    onChange={(e) =>
                      setImpressãoComFoto(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tratamentoPorImagem">
                    Custo por tratamento de imagem (custo por foto)
                  </Label>
                  <Input
                    id="tratamentoPorImagem"
                    placeholder="Tratamento de imagem (custo por foto)"
                    type="text"
                    value={tratamentoPorImagem}
                    onChange={(e) =>
                      setTratamentoPorImagem(formatNumberInput(e.target.value))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tratamentoPorIlustracao">
                    Custo por tratamento de ilustração (custo por ilustração)
                  </Label>
                  <Input
                    id="tratamentoPorIlustracao"
                    placeholder="Tratamento de ilustração (custo por ilustração)"
                    type="text"
                    value={tratamentoPorIlustracao}
                    onChange={(e) =>
                      setTratamentoPorIlustracao(
                        formatNumberInput(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
            </form>
          </CardContent>
          {/* Form dos custos ligados a outros inputs  */}

          {/* CardFooter com o botão calcular que abre um modal de cima para baixo com os valores finais, cálculos e resultados */}
          <CardFooter className="flex justify-between">
            <Sheet>
              <SheetTrigger>
                <Button>Calcular</Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                style={{ maxHeight: "100vh", overflowY: "auto" }}
              >
                <SheetHeader>
                  <SheetTitle>Páginas do livro, fotos e ilustrações</SheetTitle>
                  <SheetDescription>
                    Quantos livros serão impressos: {quantosLivros}
                    <br />
                    Páginas totais do livro: {paginas}
                    <br />
                    Laudas totais do livro: {laudas}
                    <br />
                    Páginas sem foto do livro: {paginasSemFotos}
                    <br />
                    Páginas com foto do livro: {paginasComFotos}
                    <br />
                    Quantas fotos tem o livro: {fotos}
                    <br />
                    Quantas ilustrações tem o livro: {ilustracoes}
                    <br />
                  </SheetDescription>
                  <SheetTitle>Custos fixos</SheetTitle>
                  <SheetDescription>
                    {/* Capa: R${" "}
                    {parseFloat(custoDaCapa.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br /> */}
                    Coordenador: R${" "}
                    {parseFloat(coordenador.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Capa e designer: R${" "}
                    {parseFloat(capaEDesigner.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Fotógrafo: R${" "}
                    {parseFloat(fotografo.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    IFC ISBN Cod. Barras: R${" "}
                    {parseFloat(ifcIsbnCodBarras.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Convite digital: R${" "}
                    {parseFloat(conviteDigital.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Banner designer: R${" "}
                    {parseFloat(bannerDesigner.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Reels vinheta: R${" "}
                    {parseFloat(reelsVinheta.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Primeira orelha resumo: R${" "}
                    {parseFloat(primeiraOrelhaResumo.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Segunda orelha mini bio: R${" "}
                    {parseFloat(segundaOrelhaMiniBio.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Prefácio convidado: R${" "}
                    {parseFloat(prefacioConvidado.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Apresentação convidado: R${" "}
                    {parseFloat(apresentacaoConvidado.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Quarta capa texto do livro: R${" "}
                    {parseFloat(quartaCapaTextoDoLivro.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                  </SheetDescription>
                  <SheetTitle>
                    Custo total do Revisor, Copydesk, Diagramador e Diagramador
                    com foto
                  </SheetTitle>
                  <SheetDescription>
                    Revisor: R${" "}
                    {(
                      parseFloat(revisor.replace(",", ".")) * parseFloat(laudas)
                    )
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Copydesk: R${" "}
                    {(
                      parseFloat(copydesk.replace(",", ".")) *
                      parseFloat(laudas)
                    )
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Diagramador: R${" "}
                    {(
                      parseFloat(diagramador.replace(",", ".")) *
                      parseFloat(laudas)
                    )
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Diagramador com foto: R${" "}
                    {(
                      parseFloat(diagramadorComFoto.replace(",", ".")) *
                      parseFloat(laudas)
                    )
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                  </SheetDescription>
                  <SheetTitle>
                    Custo total do tratamento de imagem e tratamento de
                    ilustração
                  </SheetTitle>
                  <SheetDescription>
                    Tratamento de imagem: R${" "}
                    {parseFloat(totalCustoFotosUmLivro.toString())
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Tratamento de ilustração: R${" "}
                    {parseFloat(totalCustoIlustracoesUmLivro.toString())
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                  </SheetDescription>
                  <SheetTitle>
                    Custo total da impressão de todos os livros
                  </SheetTitle>
                  <SheetDescription>
                    Impressão de todos os livros: R${" "}
                    {parseFloat(totalCustoImpressaoTodosOsLivros.toString())
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                  </SheetDescription>
                  <SheetTitle>
                    Custo total de distribuição, transporte
                  </SheetTitle>
                  <SheetDescription>
                    Total distribuição (10% do valor da impressão): R${" "}
                    {totalCustoDistribuicaoTodosOsLivros
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Total Transporte (15% do valor da impressão): R${" "}
                    {totalCustoTransporteTodosOsLivros
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                  </SheetDescription>
                  <SheetTitle>Totais finais</SheetTitle>
                  <SheetDescription>
                    Total do custo final sem margem de lucro e impostos TODOS OS
                    LIVROS: R${" "}
                    {totalCustoSemMargemDeLucroEImpostosTodosOsLivros
                      .toFixed(2)
                      .replace(".", ",")}
                    <br />
                    Margem de lucro TODOS OS LIVROS (20%): R${" "}
                    {margemDeLucroTodosOsLivros.toFixed(2).replace(".", ",")}
                    <br />
                    Imposto TODOS OS LIVROS (7%): R${" "}
                    {impostoTodosOsLivros.toFixed(2).replace(".", ",")}
                    <br />
                    Custo final TODOS OS LIVROS: R${" "}
                    {totalCustoFinalTodosOsLivros.toFixed(2).replace(".", ",")}
                    <br />
                    Custo final UM LIVRO: R${" "}
                    {totalCustoFinalUmLivro.toFixed(2).replace(".", ",")}
                    <br />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </CardFooter>
          {/* CardFooter com o botão calcular que abre um modal de cima para baixo com os valores finais, cálculos e resultados */}
        </Card>
        {/* Form dos custos ligados a outros inputs (Dentro temos também o CardFooter que guarda o modal com os resultados finais) */}
      </div>
    </>
  );
}
