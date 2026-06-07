package com.tfg.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.entity.Destino;
import com.tfg.repository.DestinoRepository;

@RestController
public class DestinoController {

    private final DestinoRepository destinoRepository;

    private float minSalario = 0.0f;
    private float maxSalario = 0.0f;

    private float pesoCriterio1 = 0.5f; // Criterio de mayor peso
    private float pesoCriterio2 = 0.3f; // criterio de segundo peso
    private float pesoCriterio3 = 0.2f; // criterio de tercer peso

    public DestinoController(DestinoRepository destinoRepository) {
        this.destinoRepository = destinoRepository;
    }

    @GetMapping("/asistente/{criterio1}/{criterio2}/{criterio3}")
    public List<Destino> getDestinos(@PathVariable String criterio1, @PathVariable String criterio2,
            @PathVariable String criterio3) {

        List<Destino> x = destinoRepository.findAll();
        try {

            // Calcular el salario mínimo y máximo para normalizar los datos
            calcularMaMinSalario(x);
            // Calcular la media ponderada para cada destino
            establecerMediaPonderada(x, criterio1, criterio2, criterio3);

            // Ordenar los destinos por media ponderada de mayor a menor
            x.sort((d1, d2) -> Float.compare(d2.getMediaPonderada(), d1.getMediaPonderada()));

            // anadir un nuevo campo con el numero de orden en base a la media ponderada
            for (int i = 0; i < x.size(); i++) {
                x.get(i).setOrden(i + 1);
            }
            return x;
        } catch (Exception e) {
            return x;
        }
    }

    public void calcularMaMinSalario(List<Destino> destinos) {
        minSalario = destinos.stream()
                .map(Destino::getSueldoTotal)
                .min(Float::compare)
                .orElse(0.0f);
        maxSalario = destinos.stream()
                .map(Destino::getSueldoTotal)
                .max(Float::compare)
                .orElse(0.0f);
    }

    public void establecerMediaPonderada(List<Destino> destinos, String criterio1, String criterio2, String criterio3) {
        for (Destino d : destinos) {

            float mediaPonderada = getValorColumna(d, criterio1) * pesoCriterio1 +
                    getValorColumna(d, criterio2) * pesoCriterio2 +
                    getValorColumna(d, criterio3) * pesoCriterio3;
            d.setMediaPonderada(mediaPonderada);
        }
    }

    public float getValorColumna(Destino destino, String criterio) {
        switch (criterio) {
            case "sueldoTotal":
                float salarioNormalizado = (destino.getSueldoTotal() - minSalario) / (maxSalario - minSalario) * 100.0f;
                return salarioNormalizado;
            case "teletrabajo":
                return (destino.getTeletrabajo() * 100.0f / destino.getEncuestas());
            case "viajar":
                // es algo negativo, así que se hace de forma inversa
                return 100.0f - (destino.getViajar() * 100.0f / destino.getEncuestas());
            case "accesible":
                // es algo negativo, así que se hace de forma inversa
            case "tardes":
                return 100.0f - (destino.getTardes() * 100.0f / destino.getEncuestas());
            case "aparcamiento":
                return (destino.getAparamiento() * 100.0f / destino.getEncuestas());
            case "guarderia":
                return (destino.getGuarderia() * 100.0f / destino.getEncuestas());
            case "fiabilidad":
                if (destino.getEncuestas() < 10) {
                    return 0.0f;
                } else if (destino.getEncuestas() < 30) {
                    return 50.0f;
                } else {
                    return 100.0f;
                }
            default:
                return 0.0f;
        }
    }

}
