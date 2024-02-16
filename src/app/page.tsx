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

export default function Home() {
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

  const calculateCost = () => {
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

    const totalCustoPorPagina =
      parseFloat(revisor.replace(",", ".")) +
      parseFloat(diagramador.replace(",", ".")) +
      parseFloat(diagramadorComFoto.replace(",", ".")) +
      parseFloat(copydesk.replace(",", "."));

    const totalCustoUsandoTodasAsPaginasDeReferencia =
      totalCustoPorPagina * parseFloat(pages);

    const totalCustoImpressao =
      parseFloat(impressãoSemFoto.replace(",", ".")) *
        parseFloat(paginasSemFotos.replace(",", ".")) +
      parseFloat(impressãoComFoto.replace(",", ".")) *
        parseFloat(paginasComFotos.replace(",", "."));

    const totalCustoTransporte = totalCustoImpressao * transporte;
    const totalCustoDistribuicao = totalCustoImpressao * distribuicao;
    const custoTotalFinalSemMargemDeLucroEImpostos =
      totalCustosFixos +
      totalCustoUsandoTodasAsPaginasDeReferencia +
      totalCustoImpressao +
      totalCustoTransporte +
      totalCustoDistribuicao;

    const totalCustoComMargemDeLucro =
      custoTotalFinalSemMargemDeLucroEImpostos * margemDeLucro;

    const totalCustoFinal = totalCustoComMargemDeLucro * imposto;

    console.log("Total Cost:", totalCustoFinal);
    alert(`Custo total R$${totalCustoFinal.toFixed(2)}`);
  };

  return (
    <>
      <Card className="w-[350px] mx-2">
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
                    setApresentacaoConvidado(formatNumberInput(e.target.value))
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
                    setQuartaCapaTextoDoLivro(formatNumberInput(e.target.value))
                  }
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="w-[350px] mx-2">
        <CardHeader>
          <CardTitle>
            Páginas e seus conteúdos usados de referência nos calculos
          </CardTitle>
          <CardDescription>
            Insira quantas páginas e fotos associados às diferentes categorias.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pages">
                  Quantas paginas terá o livro? (Total)
                </Label>
                <Input
                  id="pages"
                  placeholder="Quantas paginas terá o livro?"
                  type="text"
                  value={pages}
                  onChange={(e) => setPages(formatNumberInput(e.target.value))}
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
                  onChange={(e) => setFotos(formatNumberInput(e.target.value))}
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
      <Card className="w-[350px] mx-2">
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
      <Card className="w-[350px]">
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={calculateCost}>Calcular</Button>
        </CardFooter>
      </Card>
    </>
  );
}
