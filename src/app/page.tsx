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
  const [custoDaCapa, setCustoDaCapa] = useState("");
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
  const [pages, setPages] = useState("");
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
  // Custos por página

  //Custos ligados a impressão
  const [impressãoSemFoto, setImpressãoSemFoto] = useState("");
  const [impressãoComFoto, setImpressãoComFoto] = useState("");
  const [tratamentoPorImagem, setTratamentoPorImagem] = useState("");
  const [tratamentoPorIlustracao, setTratamentoPorIlustracao] = useState("");
  //Custos ligados a impressão

  // Custos ligados a distribuição imposto e margem de lucro
  const [transporte, setTransporte] = useState(0.15);
  const [distribuicao, setDistribuicao] = useState(0.1);
  const [margemDeLucro, setMargemDeLucro] = useState(1.2);
  const [imposto, setImposto] = useState(1.07);
  // Custos ligados a distribuição imposto e margem de lucro

  // Função para formatar números inseridos pelo usuário
  const formatNumberInput = (input: any) => {
    const formattedInput = input.replace(/[^0-9,.]/g, ""); // Remover caracteres não numéricos, exceto vírgula e ponto
    return formattedInput;
  };
  // Função para formatar números inseridos pelo usuário

  // Somatório de todos os custos fixos
  const totalCustosFixos =
    parseFloat(custoDaCapa.replace(",", ".")) +
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
  // Somatório de todos os custos fixos

  // Somatório de todos os custos por página
  const totalCustoPorPagina =
    parseFloat(revisor.replace(",", ".")) +
    parseFloat(diagramador.replace(",", ".")) +
    parseFloat(diagramadorComFoto.replace(",", ".")) +
    parseFloat(copydesk.replace(",", "."));
  // Somatório de todos os custos por página

  // Total do custo que usam todas as página de referência
  const totalCustoUsandoTodasAsPaginasDeReferencia =
    totalCustoPorPagina * parseFloat(pages);
  // Total do custo que usam todas as página de referência

  // Total do custo de impressão
  const totalCustoImpressao =
    parseFloat(impressãoSemFoto.replace(",", ".")) *
      parseFloat(paginasSemFotos.replace(",", ".")) +
    parseFloat(impressãoComFoto.replace(",", ".")) *
      parseFloat(paginasComFotos.replace(",", ".")) +
    parseFloat(fotos.replace(",", ".")) *
      parseFloat(tratamentoPorImagem.replace(",", ".")) +
    parseFloat(ilustracoes.replace(",", ".")) *
      parseFloat(tratamentoPorIlustracao.replace(",", ".")) +
    parseFloat(custoDaCapa.replace(",", "."));
  // Total do custo de impressão

  // Total do custo de distribuição e transporte
  const totalCustoTransporte = totalCustoImpressao * transporte;
  const totalCustoDistribuicao = totalCustoImpressao * distribuicao;
  // Total do custo de distribuição e transporte

  // Total do custo final sem margem de lucro e impostos
  const custoTotalFinalSemMargemDeLucroEImpostos =
    totalCustosFixos +
    totalCustoUsandoTodasAsPaginasDeReferencia +
    totalCustoImpressao +
    totalCustoTransporte +
    totalCustoDistribuicao;
  // Total do custo final sem margem de lucro e impostos

  // Total do custo final com margem de lucro e impostos
  const totalCustoComMargemDeLucro =
    custoTotalFinalSemMargemDeLucroEImpostos * margemDeLucro;

  const totalCustoFinal = totalCustoComMargemDeLucro * imposto;

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
                  <Label htmlFor="pages">
                    Quantas paginas terá o livro? (Total)
                  </Label>
                  <Input
                    id="pages"
                    placeholder="Quantas paginas terá o livro?"
                    type="text"
                    value={pages}
                    onChange={(e) =>
                      setPages(formatNumberInput(e.target.value))
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
                    Páginas totais do livro: {pages}
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
                    Capa: R$ {parseFloat(custoDaCapa.replace(",", "."))}
                    <br />
                    Coordenador: R$ {parseFloat(coordenador.replace(",", "."))}
                    <br />
                    Capa e designer: R${" "}
                    {parseFloat(capaEDesigner.replace(",", "."))}
                    <br />
                    Fotógrafo: R$ {parseFloat(fotografo.replace(",", "."))}
                    <br />
                    IFC ISBN Cod. Barras: R${" "}
                    {parseFloat(ifcIsbnCodBarras.replace(",", "."))}
                    <br />
                    Convite digital: R${" "}
                    {parseFloat(conviteDigital.replace(",", "."))}
                    <br />
                    Banner designer: R${" "}
                    {parseFloat(bannerDesigner.replace(",", "."))}
                    <br />
                    Reels vinheta: R${" "}
                    {parseFloat(reelsVinheta.replace(",", "."))}
                    <br />
                    Primeira orelha resumo: R${" "}
                    {parseFloat(primeiraOrelhaResumo.replace(",", "."))}
                    <br />
                    Segunda orelha mini bio: R${" "}
                    {parseFloat(segundaOrelhaMiniBio.replace(",", "."))}
                    <br />
                    Prefácio convidado: R${" "}
                    {parseFloat(prefacioConvidado.replace(",", "."))}
                    <br />
                    Apresentação convidado: R${" "}
                    {parseFloat(apresentacaoConvidado.replace(",", "."))}
                    <br />
                    Quarta capa texto do livro: R${" "}
                    {parseFloat(quartaCapaTextoDoLivro.replace(",", "."))}
                    <br />
                    Total: R$ {totalCustosFixos}
                    <br />
                  </SheetDescription>
                  <SheetTitle>
                    Custo total do Revisor, Copydesk, Diagramador e Diagramador
                    com foto
                  </SheetTitle>
                  <SheetDescription>
                    Revisor: R${" "}
                    {parseFloat(revisor.replace(",", ".")) * parseFloat(pages)}
                    <br />
                    Copydesk: R${" "}
                    {parseFloat(copydesk.replace(",", ".")) * parseFloat(pages)}
                    <br />
                    Diagramador: R${" "}
                    {parseFloat(diagramador.replace(",", ".")) *
                      parseFloat(pages)}
                    <br />
                    Diagramador com foto: R${" "}
                    {parseFloat(diagramadorComFoto.replace(",", ".")) *
                      parseFloat(pages)}
                    <br />
                    Total: R$ {totalCustoUsandoTodasAsPaginasDeReferencia}
                    <br />
                  </SheetDescription>
                  <SheetTitle>
                    Custo total da impressão sem foto, da impressão com foto, do
                    tratamento de imagem e tratamento de ilustração
                  </SheetTitle>
                  <SheetDescription>
                    Impressão sem foto: R${" "}
                    {parseFloat(impressãoSemFoto.replace(",", ".")) *
                      parseFloat(paginasSemFotos)}
                    <br />
                    Impressão com foto: R${" "}
                    {parseFloat(impressãoComFoto.replace(",", ".")) *
                      parseFloat(paginasComFotos)}
                    <br />
                    Tratamento de imagem: R${" "}
                    {parseFloat(tratamentoPorImagem.replace(",", ".")) *
                      parseFloat(fotos)}
                    <br />
                    Tratamento de ilustração: R${" "}
                    {parseFloat(tratamentoPorIlustracao.replace(",", ".")) *
                      parseFloat(ilustracoes)}
                    <br />
                    Total custo por livro: R$ {totalCustoImpressao}
                    <br />
                    Total custo de todos os livros: R${" "}
                    {totalCustoImpressao * parseFloat(quantosLivros)}
                    <br />
                  </SheetDescription>
                  <SheetTitle>
                    Custo total de distribuição, transporte, e totais finais
                  </SheetTitle>
                  <SheetDescription>
                    Total distribuição (10% do valor da impressão): R${" "}
                    {totalCustoDistribuicao}
                    <br />
                    Total Transporte (15% do valor da impressão): R${" "}
                    {totalCustoTransporte}
                    <br />
                    Total sem margem de lucro e impostos: R${" "}
                    {custoTotalFinalSemMargemDeLucroEImpostos}
                    <br />
                    Total com margem de lucro (20%): R${" "}
                    {totalCustoComMargemDeLucro}
                    <br />
                    Total do custo do imposto (7%): R${" "}
                    {totalCustoFinal - totalCustoComMargemDeLucro}
                    <br />
                    Total com margem de lucro (20%) e impostos (7%) por livro:
                    R$ {totalCustoFinal}
                    <br />
                    Total final de todos os livros (custo final x quantidde de
                    livros): R$ {totalCustoFinal * parseFloat(quantosLivros)}
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

// adicionar input quantos livros vão ser impressos (colocar resultado de fazer um livro) e valor final (x livros = x valor) FEITO

// adicionar custo de capa (novo input) (no final da impressão R$ 2,30) FEITO

// separar o custo de imposto FEITO
