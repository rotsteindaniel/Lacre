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
  const [pages, setPages] = useState("");
  const [revisor, setRevisor] = useState("");
  const [copydesk, setCopydesk] = useState("");
  const [diagramador, setDiagramador] = useState("");
  const [diagramadorComFoto, setDiagramadorComFoto] = useState("");

  console.log(pages);
  console.log(revisor);
  console.log(copydesk);
  console.log(diagramador);
  console.log(diagramadorComFoto);

  // Função para formatar números inseridos pelo usuário
  const formatNumberInput = (input) => {
    const formattedInput = input.replace(/[^0-9,.]/g, ""); // Remover caracteres não numéricos, exceto vírgula e ponto
    return formattedInput;
  };

  const calculateCost = () => {
    const totalCostPerPage =
      parseFloat(revisor.replace(",", ".")) +
      parseFloat(diagramador.replace(",", ".")) +
      parseFloat(diagramadorComFoto.replace(",", ".")) +
      parseFloat(copydesk.replace(",", "."));

    const totalCost = totalCostPerPage * parseFloat(pages);

    console.log("Total Cost:", totalCost);
    alert(`Custo total R$${totalCost.toFixed(2)}`);
    // Faça qualquer lógica adicional necessária
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Calcular Preço de Custo do Livro</CardTitle>
        <CardDescription>
          Insira os custos associados às diferentes categorias.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pages">Quantas paginas terá o livro?</Label>
              <Input
                id="pages"
                placeholder="Quantas paginas terá o livro?"
                type="text"
                value={pages}
                onChange={(e) => setPages(formatNumberInput(e.target.value))}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="revisor">Revisor (custo por página)</Label>
              <Input
                id="revisor"
                placeholder="Custo do Revisor por página"
                type="text"
                value={revisor}
                onChange={(e) => setRevisor(formatNumberInput(e.target.value))}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="copydesk">Copydesk (custo por página)</Label>
              <Input
                id="copydesk"
                placeholder="Custo do copydesk por página"
                type="text"
                value={copydesk}
                onChange={(e) => setCopydesk(formatNumberInput(e.target.value))}
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
            {/* Adicione mais campos para outras categorias */}
            {/* ... */}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={calculateCost}>Calcular</Button>
      </CardFooter>
    </Card>
  );
}
