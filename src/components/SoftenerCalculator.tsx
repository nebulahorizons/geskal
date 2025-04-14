
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const SoftenerCalculator = () => {
  const [formData, setFormData] = useState({
    personas: 4,
    consumoPersona: 250,
    dureza: 400,
    capacidadFt3: 1,
    capacidadPorFt3: 30000,
    costoBulto: 195
  });

  const [resultado, setResultado] = useState<null | {
    consumoDiario: number;
    durezaGPG: number;
    capacidadRequerida: number;
    diasAutonomia: number;
    retrolavadosPorMes: number;
    salMensual: number;
    bultosMensual: number;
    costoMensual: number;
  }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: parseFloat(value)
    });
  };

  const calcular = () => {
    const {
      personas,
      consumoPersona,
      dureza,
      capacidadFt3,
      capacidadPorFt3,
      costoBulto
    } = formData;

    const consumoDiario = personas * consumoPersona;
    const durezaGPG = dureza / 17.1;
    const capacidadRequerida = consumoDiario * durezaGPG;
    const capacidadEfectiva = capacidadFt3 * capacidadPorFt3;
    const diasAutonomia = capacidadEfectiva / capacidadRequerida;
    const retrolavadosPorMes = 30 / diasAutonomia;
    const salPorRegen = 4.8 * capacidadFt3; // kg por regeneración
    const salMensual = salPorRegen * retrolavadosPorMes;
    const bultosMensual = salMensual / 20;
    const costoMensual = bultosMensual * costoBulto;

    setResultado({
      consumoDiario,
      durezaGPG,
      capacidadRequerida,
      diasAutonomia,
      retrolavadosPorMes,
      salMensual,
      bultosMensual,
      costoMensual
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6 shadow-md">
        <div className="flex items-center mb-6">
          <Calculator className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-xl font-bold">Ingrese los datos</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="personas">Número de personas:</Label>
            <Input
              type="number"
              id="personas"
              value={formData.personas}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="consumoPersona">Consumo por persona (litros/día):</Label>
            <Input
              type="number"
              id="consumoPersona"
              value={formData.consumoPersona}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="dureza">Dureza del agua (ppm):</Label>
            <Input
              type="number"
              id="dureza"
              value={formData.dureza}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="capacidadFt3">Capacidad del suavizador (ft³):</Label>
            <Input
              type="number"
              id="capacidadFt3"
              value={formData.capacidadFt3}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="capacidadPorFt3">Capacidad por ft³ de resina (gpg):</Label>
            <Input
              type="number"
              id="capacidadPorFt3"
              value={formData.capacidadPorFt3}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="costoBulto">Costo por bulto de sal (MXN):</Label>
            <Input
              type="number"
              id="costoBulto"
              value={formData.costoBulto}
              onChange={handleChange}
            />
          </div>

          <Button className="w-full mt-6" onClick={calcular}>
            Calcular
          </Button>
        </div>
      </Card>

      <Card className={`p-6 shadow-md ${resultado ? 'bg-gray-50' : 'bg-gray-100'}`}>
        <h3 className="text-xl font-bold mb-6">Resultados</h3>

        {resultado ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Consumo diario total</p>
                <p className="text-xl font-bold">{resultado.consumoDiario.toFixed(2)} L</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Dureza a remover</p>
                <p className="text-xl font-bold">{resultado.durezaGPG.toFixed(2)} gpg</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Capacidad requerida</p>
                <p className="text-xl font-bold">{resultado.capacidadRequerida.toFixed(2)} gpd</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Días de autonomía</p>
                <p className="text-xl font-bold">{resultado.diasAutonomia.toFixed(2)} días</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Retrolavados por mes</p>
                <p className="text-xl font-bold">{resultado.retrolavadosPorMes.toFixed(2)}</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Sal mensual requerida</p>
                <p className="text-xl font-bold">{resultado.salMensual.toFixed(2)} kg</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Bultos de sal (20 kg)</p>
                <p className="text-xl font-bold">{resultado.bultosMensual.toFixed(1)}</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg shadow-sm">
                <p className="text-sm text-primary-foreground">Costo mensual estimado</p>
                <p className="text-xl font-bold text-primary">${resultado.costoMensual.toFixed(2)} MXN</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Nota:</strong> Esta calculadora proporciona una estimación basada en los datos ingresados. 
                Para un análisis más preciso, contacte a nuestros especialistas.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <Calculator className="h-12 w-12 mb-4 opacity-30" />
            <p>Complete los datos y haga clic en calcular para ver los resultados</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SoftenerCalculator;
