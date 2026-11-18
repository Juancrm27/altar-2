# Análisis proporcional — composición de planetas

## Referencia

- Archivo analizado: `WEB.ai`
- Captura: [planetas-composicion-referencia.png](./planetas-composicion-referencia.png)
- Resolución de la captura: **1828 × 1122 px**
- Alcance: únicamente la órbita roja y la distribución de los planetas.
- Illustrator no fue modificado ni guardado durante el análisis.

> Las medidas están calculadas sobre la captura rasterizada. Por ese motivo deben considerarse aproximadas.

## Órbita roja

- Rectángulo envolvente: **974 × 850 px aprox.**
- Proporción: **1.146:1**
- Posición dentro de la captura: **X 704 px / Y 178 px aprox.**
- Centro dentro de la captura: **X 1191 px / Y 603 px aprox.**
- Ocupación de la captura:
  - Ancho: **53.2%**
  - Alto: **75.7%**
- La órbita se superpone aproximadamente **216 px** sobre la fotografía izquierda.

Para reconstruirla de forma responsive, conviene usar un contenedor con `aspect-ratio: 973 / 849`. Todas las posiciones siguientes toman como origen la esquina superior izquierda de ese contenedor.

## Posición y tamaño de los planetas

El centro X/Y está expresado como porcentaje del rectángulo envolvente de la órbita. El tamaño corresponde al ancho aparente del planeta como porcentaje del ancho de la órbita.

| Elemento | Centro X | Centro Y | Tamaño relativo |
|---|---:|---:|---:|
| Morado grande | 27.4% | 8.4% | 5.5% |
| Rosa | 41.0% | 16.4% | 3.2% |
| Azul | 41.0% | 24.9% | 2.2% |
| Blanco mínimo | 31.2% | 31.9% | 1.0% |
| Tierra oscura | 35.1% | 33.6% | 2.5% |
| Luna luminosa | 55.5% | 20.7% | 11.9% |
| Amarillo grande | 80.6% | 38.0% | 8.1% |
| Rojo | 53.8% | 44.3% | 2.3% |
| Menta inferior | 46.9% | 67.6% | 4.0% |
| Marrón derecho | 99.8% | 11.5% | 2.5% |

El planeta marrón de la derecha está colocado deliberadamente fuera del recorrido de la elipse, aunque su centro coincide aproximadamente con el límite derecho de su caja envolvente.

## Distancias que construyen el ritmo

Las distancias están expresadas como porcentaje del ancho total de la órbita.

| Relación | Distancia |
|---|---:|
| Morado grande → rosa | 15.3% |
| Rosa → azul | 7.5% |
| Azul → tierra oscura | 9.6% |
| Blanco mínimo → tierra oscura | 4.2% |
| Rosa → luna luminosa | 15.0% |
| Luna luminosa → amarillo grande | 29.3% |
| Luna luminosa → rojo | 20.7% |
| Rojo → menta inferior | 21.4% |
| Amarillo grande → marrón derecho | 30.1% |

## Lectura de la composición

La distribución no funciona como un sistema solar concéntrico regular. Los cuerpos pequeños se concentran en el cuadrante superior izquierdo de la órbita y conducen visualmente hacia la luna luminosa. La luna actúa como foco principal, mientras que el planeta amarillo equilibra la composición hacia la derecha. El planeta rojo queda próximo al centro geométrico y funciona como transición hacia el planeta menta inferior. La mitad inferior conserva mucho espacio vacío, generando profundidad. La órbita atraviesa la fotografía izquierda y conecta ambos bloques visuales. El planeta marrón exterior rompe deliberadamente el límite de la elipse y amplía la composición más allá de la órbita.

## Implementación responsive

La reconstrucción debe usar:

- Un contenedor proporcional con `aspect-ratio: 973 / 849`.
- Una elipse absoluta de `width: 100%` y `height: 100%`.
- Planetas posicionados con porcentajes relativos al contenedor.
- `transform: translate(-50%, -50%)` para que X/Y representen el centro de cada planeta.
- Tamaños definidos como porcentaje del ancho del contenedor.

Ejemplo de posicionamiento:

```css
.sistema {
  position: relative;
  width: 100%;
  aspect-ratio: 973 / 849;
}

.orbita {
  position: absolute;
  inset: 0;
  border: 2px solid #cb553a;
  border-radius: 50%;
}

.planeta {
  position: absolute;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
}

.luna {
  left: 55.5%;
  top: 20.7%;
  width: 11.9%;
}

.planeta-amarillo {
  left: 80.6%;
  top: 38%;
  width: 8.1%;
}
```
