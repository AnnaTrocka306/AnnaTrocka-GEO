---
title: "AXXOS Hotels & Resorts — auditoría independiente de la página principal"
document_type: "Informe de análisis experto"
author: "Anna Trocka"
audit_date: "2026-10-09"
website: "https://www.axxoshotels.com/de"
audited_language: "de"
report_languages:
  - "ru"
  - "es"
scope: "Versión alemana de la página principal y revisión selectiva de elementos técnicos relacionados"
audit_sections:
  - "UX"
  - "Marketing"
  - "Estado técnico"
  - "SEO"
  - "GEO"
status: "Borrador del informe"
---

# 1. Propósito del documento

El presente documento constituye una auditoría integral e independiente del sitio web de AXXOS Hotels & Resorts desde la perspectiva de la experiencia de usuario (UX), la eficacia del marketing, el estado técnico, la optimización para motores de búsqueda (SEO) y la preparación de la información para su correcta interpretación por parte de los sistemas de inteligencia artificial (GEO).

**El objetivo de la auditoría es evaluar hasta qué punto el sitio web cumple eficazmente sus funciones principales: atraer a huéspedes potenciales, ayudarles a orientarse entre las ofertas del grupo hotelero, explicar las ventajas de la marca y facilitar un proceso cómodo de reserva.**

La evaluación abarca varias áreas interrelacionadas.

**Primera: experiencia de usuario (UX).** Analizamos si la estructura del sitio web resulta comprensible para los visitantes, si es fácil encontrar la información necesaria, seleccionar el hotel adecuado y acceder al proceso de reserva.

**Segunda: lógica comercial y de marketing.** Evaluamos si la marca comunica claramente su propuesta de valor principal, si presenta sus ventajas competitivas y si ayuda al visitante a comprender por qué debería elegir AXXOS Hotels & Resorts.

**Tercera: estado técnico.** En el marco de la auditoría se examinaron **22 parámetros**, entre ellos la accesibilidad de las páginas para los motores de búsqueda, la indexación, la estructura HTML, los encabezados, los metadatos, los enlaces internos, los datos estructurados, el rendimiento, la versión móvil, la accesibilidad de la interfaz y el funcionamiento de determinados elementos funcionales.

**Cuarta: SEO y GEO.** Comprobamos hasta qué punto el sitio web describe de forma coherente el grupo hotelero, sus establecimientos, sus ubicaciones, servicios y características. Prestamos especial atención a si los motores de búsqueda y los sistemas de inteligencia artificial pueden establecer de manera inequívoca las relaciones semánticas entre la marca, sus hoteles y las necesidades de los huéspedes potenciales.

**La auditoría no se limita al análisis de la página de inicio.** La página principal se considera el elemento central de la arquitectura de navegación y de la estructura semántica del sitio web. Sin embargo, la revisión técnica también incluye los mecanismos generales de funcionamiento del sitio, su accesibilidad para los motores de búsqueda, determinadas páginas internas y elementos funcionales.

## Alcance y límites del estudio

La versión principal del sitio web examinada es la versión en alemán: https://www.axxoshotels.com/de.

Se parte de la hipótesis de que las demás versiones lingüísticas utilizan una arquitectura técnica similar. No obstante, en el marco de este estudio no se ha verificado su completa equivalencia, la calidad de las traducciones ni la correcta localización de sus contenidos. Si fuera necesario, estos aspectos podrían analizarse en una auditoría independiente.

La revisión no contempla un análisis individual y exhaustivo de todas las URL del sitio web. Asimismo, la evaluación GEO no constituye una medición de la frecuencia real con la que los sistemas de inteligencia artificial recomiendan la marca. Este documento analiza las condiciones técnicas y semánticas que pueden favorecer dichas recomendaciones.

## Objetivo práctico del informe

Este documento está dirigido principalmente a la dirección de AXXOS Hotels & Resorts.

Su finalidad no es simplemente enumerar las deficiencias detectadas, sino **mostrar qué decisiones relacionadas con la estructura, el contenido y la implementación técnica del sitio web pueden estar limitando su eficacia comercial**.

El informe distingue entre problemas técnicos confirmados, observaciones relativas a la experiencia de usuario y conclusiones profesionales sobre sus posibles consecuencias para el negocio, el SEO y el GEO.

El resultado de la auditoría será una evaluación sistematizada del estado actual del sitio web, acompañada de recomendaciones concretas y prioridades de mejora.

**La pregunta central de este estudio es: ¿hasta qué punto el sitio web de AXXOS Hotels & Resorts funciona actualmente no solo como un catálogo digital de hoteles, sino también como una herramienta eficaz para orientar al cliente, convencerlo y generar reservas?**

---

## 2. Evaluación general del sitio web

Como resultado de la auditoría integral, el sitio web de AXXOS Hotels & Resorts ha recibido las siguientes puntuaciones en una escala del 1 al 10, donde 10 representa la máxima calificación.

| Área de evaluación | Puntuación | Justificación resumida |
|---|---|---|
| **UX — Experiencia de usuario** | **3/10** | Deficiencias en la presentación visual, la legibilidad y la jerarquía de la información. El proceso de selección de hoteles no está suficientemente orientado a los objetivos y necesidades de los visitantes. |
| **Marketing** | **2/10** | No se comunican claramente una propuesta de valor única, las ventajas competitivas ni las razones para elegir el grupo hotelero. |
| **Estado técnico** | **4/10** | Las funciones principales están operativas, pero se han detectado deficiencias técnicas, incluido un bajo rendimiento móvil: 34/100 según Lighthouse. |
| **SEO** | **4/10** | El sitio web es accesible para su indexación, pero presenta deficiencias en los metadatos, los encabezados y la estructura semántica. |
| **GEO** | **4/10** | La información sobre los hoteles está disponible, pero las relaciones semánticas entre la marca, los establecimientos, sus características y las necesidades de los huéspedes no están expresadas con suficiente claridad. |

### Evaluación general: 3/10 — baja

**Nota.** Las puntuaciones representan una valoración profesional basada en criterios de auditoría y no constituyen mediciones de las tasas de conversión ni de la frecuencia de recomendaciones por parte de sistemas de inteligencia artificial.

La justificación detallada de cada puntuación, las deficiencias detectadas, las evidencias técnicas, los resultados de las mediciones, los ejemplos visuales y las recomendaciones se presentan en los siguientes apartados del informe.

---

## 3. Problemas de experiencia de usuario (UX) identificados

El fondo oscuro dificulta la lectura prolongada, especialmente para el público adulto. El sitio web carece de una identidad visual uniforme, una navegación intuitiva y una estructura coherente para presentar los hoteles y sus servicios. Al usuario le resulta difícil elegir el hotel adecuado, comprender sus ventajas y avanzar hacia la reserva: algunos enlaces conducen a documentos PDF, páginas incompletas u ofertas que aparecen sin una descripción previa del establecimiento. La falta de coherencia entre las interfaces y los cambios inesperados de idioma generan dificultades adicionales.

**En conjunto, estas deficiencias complican la elección del hotel y crean un riesgo de pérdida de reservas potenciales.**

A continuación, se presentan los estudios científicos, los estándares del sector y los resultados de pruebas de usabilidad que fundamentan las conclusiones expuestas.

### 3.1. Legibilidad del texto sobre fondo oscuro

Un estudio de la Universidad Heinrich Heine de Düsseldorf (2013, 169 participantes) identificó una ventaja del texto oscuro sobre fondo claro en tareas de percepción visual y lectura, tanto entre participantes jóvenes (18–33 años) como mayores (60–85 años). Resultados similares fueron obtenidos por Buchner y Baumgartner (2007).

**Aplicación a AXXOS:** el uso predominante de fondos oscuros en páginas con abundante información requiere una evaluación de legibilidad, especialmente considerando el perfil de edad previsto del público objetivo.

**Fuentes:**
- [Heinrich Heine University — Estudio original, 2013 (PDF)](https://www.psychologie.hhu.de/fileadmin/redaktion/Oeffentliche_Medien/Fakultaeten/Mathematisch-Naturwissenschaftliche_Fakultaet/Psychologie/AAP/Publikationen/2013/Piepenbrock-2013-Positive_display_polarity_is_.pdf)
- [PubMed — Positive Display Polarity, 2013](https://pubmed.ncbi.nlm.nih.gov/23654206/)
- [PubMed — Text–Background Polarity, 2007](https://pubmed.ncbi.nlm.nih.gov/17510822/)

### 3.2. Contraste y accesibilidad de la información

El estándar internacional WCAG 2.2 establece una relación mínima de contraste de 4,5:1 para el texto normal y de 3:1 para el texto grande. El W3C también analiza los cambios visuales asociados al envejecimiento y sus implicaciones para las interfaces web.

**Aplicación a AXXOS:** es necesario medir el contraste, comprobar la ampliación del texto y evaluar la accesibilidad de los elementos interactivos. El fondo negro, por sí solo, no constituye una infracción de WCAG.

**Fuentes:**
- [W3C — WCAG 2.2, Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C — Older Users and Web Accessibility](https://www.w3.org/WAI/older-users/)

### 3.3. Coherencia visual y confianza

En un estudio de Stanford University, la apariencia visual del sitio web se mencionó en el 46,1 % de los comentarios de los participantes al evaluar su credibilidad. Nielsen Norman Group identifica la consistencia de la interfaz como un principio fundamental para mejorar la previsibilidad de la interacción.

**Aplicación a AXXOS:** los formatos de tarjetas inconsistentes, las diferencias entre interfaces y la ausencia de un sistema visual unificado pueden dificultar la navegación y debilitar la confianza en la marca.

**Fuentes:**
- [Stanford University — Web Credibility Research (PDF)](https://credibility.stanford.edu/pdf/How_Do_People_Evaluate_a_Web_Site%27s_Credibility_v37.pdf)
- [Nielsen Norman Group — Consistency and Standards](https://www.nngroup.com/articles/consistency-and-standards/)

### 3.4. Claridad de la navegación y de las denominaciones

Las investigaciones de Nielsen Norman Group sobre *Information Scent* demuestran que los usuarios evalúan los enlaces según su capacidad para anticipar el contenido al que conducen. Las denominaciones ambiguas aumentan el riesgo de realizar elecciones incorrectas.

**Aplicación a AXXOS:** la clasificación poco clara de los servicios, los botones genéricos «Más información» y los enlaces que conducen a contenidos inesperados dificultan la navegación.

**Fuente:** [Nielsen Norman Group — Information Scent](https://www.nngroup.com/articles/information-scent/)

### 3.5. Selección del hotel y proceso de reserva

Baymard Institute realizó 992 horas de investigación, incluyendo más de 317 sesiones de pruebas de usabilidad en sitios web de hoteles y plataformas turísticas.

El estudio destaca la importancia de proporcionar información sobre las características del alojamiento, fotografías, instalaciones, herramientas de filtrado y una interfaz de reserva comprensible. Asimismo, es necesario facilitar tanto la reserva rápida a los usuarios que ya han tomado una decisión como la exploración detallada a quienes todavía están comparando opciones.

**Aplicación a AXXOS:** el acceso a las tarifas sin información suficiente sobre el hotel, la clasificación ambigua de las ofertas y los recorridos de usuario inconsistentes requieren una revisión.

**Fuentes:**
- [Baymard — Travel Accommodations UX Research](https://baymard.com/research-articles/new-research-travel-accommodations)
- [Baymard — Booking Search UX](https://baymard.com/research-articles/travel-accommodations-booking-search)
- [Baymard — Travel Site UX Best Practices](https://baymard.com/research-articles/travel-site-ux-best-practices)

### 3.6. Transparencia de las tarifas

Las investigaciones de Baymard muestran que las tarifas ambiguas, los precios incompletos y los cargos adicionales dificultan la comparación de ofertas y la toma de decisiones de reserva.

**Aplicación a AXXOS:** debe verificarse la coherencia entre la denominación *Flexibles Angebot* y las condiciones *Nicht erstattbares Angebot* y *Anzahlung 100 %*, así como la transparencia del precio final, incluidos impuestos y tasas.

**Fuente:** [Baymard — Complexity of Pricing Information](https://baymard.com/research-articles/new-research-travel-accommodations)

### 3.7. Recorrido del cliente y competencia con las OTA

El estudio *Path to Purchase* de Expedia Group reveló que los viajeros consultan una media de 141 páginas de contenido turístico durante los 45 días anteriores a la reserva. Entre quienes reservaron directamente en el sitio web de un hotel, el 61 % también había visitado una agencia de viajes online (OTA) durante el proceso de búsqueda.

**Aplicación a AXXOS:** la falta de información puede llevar a los visitantes a continuar su búsqueda en plataformas externas, generando un riesgo de pérdida de reservas directas. La afirmación de que un usuario nunca regresa después de abandonar un sitio web no está respaldada por estos estudios.

**Fuentes:**
- [Expedia Group — The Path to Purchase, 2023](https://go2.advertising.expedia.com/path-to-purchase-2023)
- [Expedia Group — Traveler Research and Booking Behavior](https://partner.expediagroup.com/en-us/resources/blog/travel-research-process-and-destination-decisions)

### 3.8. Rendimiento móvil

Según datos de Google de 2016, aproximadamente el 53 % de las visitas móviles se abandonaban cuando la carga de la página superaba los tres segundos.

**Aplicación a AXXOS:** la puntuación de rendimiento móvil de 34/100 obtenida en la prueba de laboratorio indica la necesidad de optimización. Este resultado no permite determinar la tasa real de abandono de los visitantes de AXXOS.

**Fuente:** [Google — Mobile Speed Scorecard and Impact Calculator](https://blog.google/products-and-platforms/products/ads/speed-scorecard-impact-calculator/)

### Conclusión desde la perspectiva empresarial

Los problemas de experiencia de usuario (UX) identificados dificultan la elección del hotel y la realización de reservas directas, generando el riesgo de perder clientes potenciales o de que estos recurran a la competencia y a plataformas intermediarias. Sin datos analíticos, no es posible cuantificar las posibles pérdidas económicas.

Para mantener el informe conciso, no se incluyen capturas de pantalla ni ejemplos detallados de los recorridos problemáticos. **Si la empresa lo considera oportuno, puedo realizar una reunión por Zoom para mostrar directamente en el sitio web todas las deficiencias identificadas y explicar sus posibles consecuencias para el negocio.**
---

## 4. Auditoría de marketing

**Evaluación profesional: 2/10 — baja.**

**Conclusión principal:** el sitio web de AXXOS Hotels & Resorts presenta sus hoteles y servicios, pero no comunica suficientemente el valor comercial de la marca, sus ventajas competitivas ni las razones para elegir determinados establecimientos.

### 4.1. Propuesta única de venta (USP)

En la página principal se utilizan expresiones genéricas: *Perfekte Lage*, *Ihr Zuhause in Tschechien*, *Erholung für alle*.

Estas formulaciones no explican qué diferencia a AXXOS de sus competidores ni qué beneficio concreto obtiene el huésped.

Según Nielsen Norman Group, el mensaje principal de un sitio web debe comunicar claramente el valor de la empresa y sus diferencias frente a la competencia.

**Fuentes:**
- [Nielsen Norman Group — Tagline Blues: What's the Site About?](https://www.nngroup.com/articles/tagline-blues-whats-the-site-about/)
- [Nielsen Norman Group — Homepage Usability Guidelines](https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/)

### 4.2. Arquitectura de las ofertas comerciales

La navegación principal mezcla categorías diferentes: *Angebote*, *Radonbad Jáchymov*, *Wellness*, *Golf*.

Estas denominaciones representan promociones, un destino específico y modalidades de descanso, sin establecer una estructura comercial coherente.

**Recomendación:** considerar tres líneas principales:

1. Turismo urbano y cultural.
2. Tratamientos termales, salud y bienestar.
3. Wellness y descanso.

Un mismo hotel puede pertenecer a varias categorías. Golf, 16+ y otras características pueden utilizarse como criterios adicionales de selección.

El número de categorías debe validarse mediante el análisis del público objetivo y de la oferta de la empresa. No existe una regla científica que establezca exactamente tres opciones. Nielsen Norman Group recomienda destacar aproximadamente entre una y cuatro tareas prioritarias en la página principal; un metaanálisis de la Universidad de Basilea no confirmó un efecto negativo universal de ofrecer muchas alternativas.

**Fuentes:**
- [Nielsen Norman Group — Homepage Usability Guidelines](https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/)
- [University of Basel — Choice Overload, 2010](https://edoc.unibas.ch/entities/publication/1cd7cefa-8ab9-4be8-9a0f-5412feb5350d)

### 4.3. Orientación hacia las necesidades de los huéspedes

El sitio web presenta principalmente establecimientos y servicios, pero no los relaciona suficientemente con los objetivos de cada viaje.

Según el enfoque *Jobs to Be Done* de Clayton Christensen, una propuesta comercial debe responder a la necesidad concreta que el cliente busca satisfacer.

**Recomendación:** relacionar las necesidades de los huéspedes con los hoteles, programas y ventajas específicas que mejor respondan a ellas.

**Fuente:**
- [Harvard Business Review — Know Your Customers' Jobs to Be Done](https://store.hbr.org/product/know-your-customers-jobs-to-be-done/R1609D)

### 4.4. ADN de marca y ventajas competitivas

Las páginas analizadas no explican con suficiente claridad qué une a los hoteles AXXOS, cuál es la especialización del grupo y qué ventajas lo diferencian de sus competidores.

**Recomendación:** definir junto con la dirección el posicionamiento de la marca y respaldarlo con datos verificables: características de los hoteles, instalaciones, programas y beneficios concretos para los huéspedes.

**Fuente:**
- [Nielsen Norman Group — Tagline Blues](https://www.nngroup.com/articles/tagline-blues-whats-the-site-about/)

### 4.5. Incentivos para la reserva directa

El sitio web permite realizar reservas, pero no explica suficientemente las ventajas de reservar directamente con AXXOS frente a las plataformas externas.

Las investigaciones de Baymard confirman la importancia de disponer de información detallada, filtros adecuados y condiciones transparentes para tomar decisiones de reserva.

**Recomendación:** identificar las ventajas reales de la reserva directa y comunicarlas durante el proceso de selección del hotel.

**Fuentes:**
- [Baymard Institute — Travel Accommodations UX Benchmark 2026](https://baymard.com/research-articles/travel-accommodations-ux-benchmark-2026)
- [Baymard Institute — Travel Site UX Best Practices](https://baymard.com/research-articles/travel-site-ux-best-practices)

### 4.6. Fiabilidad y actualización de las ofertas

Durante la revisión se detectaron promociones caducadas y condiciones tarifarias ambiguas, incluida la combinación de *Flexibles Angebot*, *Nicht erstattbares Angebot* y *Anzahlung 100 %*.

La información desactualizada y las condiciones poco transparentes pueden reducir la confianza en las ofertas comerciales.

**Recomendación:** garantizar la actualización de las promociones, la claridad de las condiciones tarifarias y la transparencia del precio final.

**Fuentes:**
- [Stanford University — Web Credibility Research (PDF)](https://credibility.stanford.edu/pdf/How_Do_People_Evaluate_a_Web_Site%27s_Credibility_v37.pdf)
- [Baymard Institute — Complexity of Pricing Information](https://baymard.com/research-articles/new-research-travel-accommodations)

### 4.7. Conclusión general

**Evaluación de marketing: 2/10.**

La principal deficiencia es la ausencia de una arquitectura comercial suficientemente coherente que conecte la marca, las necesidades de los huéspedes, las ventajas de cada hotel y los motivos para reservar directamente.

**Acciones prioritarias:**

1. Definir y comunicar la propuesta única de venta del grupo.
2. Establecer una estructura clara de ofertas principales según los objetivos del viaje.
3. Respaldar las ventajas competitivas con datos concretos.
4. Comunicar el valor de la reserva directa.
5. Garantizar la fiabilidad y transparencia de la información comercial.

**Base probatoria:** las conclusiones se fundamentan en el contenido de las páginas examinadas de AXXOS, los recorridos de usuario documentados y las investigaciones sectoriales citadas. La evaluación es de carácter profesional y su impacto sobre la conversión real debe verificarse mediante datos de analítica web.

---

## 5. Auditoría técnica del sitio web

**Objeto de la auditoría:** [AXXOS Hotels & Resorts — versión alemana](https://www.axxoshotels.com/de)

**Fecha de la auditoría:** 09.10.2026

**Evaluación técnica: 4/10.**

La auditoría abarca la página principal de la versión alemana, los recursos técnicos accesibles del sitio web y determinadas páginas internas, incluidos los recorridos del usuario hasta el proceso de reserva.

La evaluación se basa en 22 parámetros agrupados en cinco áreas. Esta clasificación corresponde a la metodología del presente informe y no constituye una lista oficial de requisitos obligatorios de Google.

### 5.1. Accesibilidad técnica e indexación

| N.º | Parámetro | Resultado | Estado |
|---|---|---|---|
| 1 | HTTPS y respuesta del servidor | La página es accesible mediante HTTPS y el servidor devuelve HTTP 200. | Conforme |
| 2 | Acceso de los motores de búsqueda | No se detectaron restricciones de indexación en la página analizada. | Conforme |
| 3 | XML Sitemap | Se identificó un archivo `sitemap.xml.gz` con aproximadamente 602 URL, incluidas unas 205 correspondientes a la versión alemana. | Conforme |
| 4 | Versiones lingüísticas | Se detectaron anotaciones `hreflang` para alemán, inglés y checo. La coherencia de todas las referencias recíprocas requiere una comprobación adicional. | Verificación parcial |
| 5 | Canonical | No se identificó una etiqueta `rel="canonical"` explícita en la página principal alemana analizada. | Revisión recomendada |

**Conclusión:** no se detectaron obstáculos fundamentales para el rastreo de la página principal alemana.

La ausencia de una etiqueta canonical explícita no constituye, por sí sola, un error técnico: Google puede seleccionar automáticamente la URL canónica. Sin embargo, cuando existen varias versiones lingüísticas y diferentes variantes de URL, es necesario comprobar la coherencia de su indexación.

**Referencias oficiales:**

- [Google Search Central — rastreo e indexación](https://developers.google.com/search/docs/crawling-indexing)
- [Google — creación y envío de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google — versiones localizadas y hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google — URL canónicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### 5.2. HTML, estructura semántica y contenido

| N.º | Parámetro | Resultado | Estado |
|---|---|---|---|
| 6 | Disponibilidad del contenido en HTML | Los nombres y las descripciones de los 14 hoteles están presentes en el HTML original y no dependen exclusivamente de la ejecución de JavaScript. | Conforme |
| 7 | Title | Título de la página: `Official Website Startseite by Axxos Hotels`. No describe el contenido con suficiente precisión y combina diferentes idiomas. | Deficiencia |
| 8 | Meta description | Se identificó una descripción en inglés dentro de la página alemana. | Deficiencia |
| 9 | H1 | Se utiliza `Perfekte Lage`. Esta formulación no identifica al grupo hotelero, la categoría de la oferta ni el servicio principal. | Deficiencia semántica |
| 10 | Jerarquía H1–H6 | Se detectó una secuencia inconsistente de encabezados, incluido un H4 situado antes del H1 principal. | Deficiencia estructural |
| 11 | Datos estructurados | No se detectó marcado JSON-LD que describiera la organización y sus hoteles en las páginas examinadas. | Oportunidad de mejora |
| 12 | Enlaces internos | Se utilizan textos genéricos como `Mehr Info` para diferentes establecimientos, con escaso significado fuera de contexto. | Deficiencia |
| 13 | Coherencia lingüística | La interfaz alemana contiene elementos en inglés y checo, incluidos `Lokalita`, `Změnit filtr` y `Filtrovat`. | Deficiencia |
| 14 | Actualización de la información | Durante la auditoría se identificó una oferta cuya fecha de finalización correspondía a junio de 2026. | Deficiencia |
| 15 | Textos alternativos de imágenes | De 48 imágenes HTML, 19 carecen de texto `alt` o lo tienen vacío. Lighthouse identificó por separado nueve imágenes sin atributo `alt`. | Requiere corregir las imágenes informativas |

**Conclusión:** el contenido principal es técnicamente accesible, pero su organización semántica presenta deficiencias. Esto dificulta la identificación automática del propósito de la página, la estructura de las ofertas y las relaciones entre los establecimientos.

Es importante distinguir entre requisitos técnicos y recomendaciones:

- El encabezado `Perfekte Lage` no infringe el estándar HTML, pero describe de manera insuficiente el propósito de la página.
- La ausencia de JSON-LD no constituye una infracción universal. Un marcado estructurado correctamente implementado puede ayudar a identificar la organización y sus establecimientos, pero no garantiza una mayor visibilidad.
- Un atributo `alt` vacío es válido para imágenes decorativas. La corrección debe centrarse en las imágenes que transmiten información relevante.

**Referencias oficiales:**

- [WHATWG — HTML: secciones y encabezados](https://html.spec.whatwg.org/multipage/sections.html)
- [Google — guía básica de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google — introducción a los datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google — directrices para datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [W3C — alternativas textuales para contenido no textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

### 5.3. Rendimiento y Core Web Vitals

Los resultados se obtuvieron mediante Google PageSpeed Insights y Lighthouse.

**[Consultar el informe completo de PageSpeed Insights](https://pagespeed.web.dev/analysis/https-www-axxoshotels-com-de/g6avonhc8b?form_factor=mobile)**

| N.º | Parámetro | Resultado | Estado |
|---|---|---|---|
| 16 | Rendimiento móvil | **34/100** en Lighthouse. | Deficiencia crítica |
| 17 | Rendimiento en ordenadores | **83/100** en Lighthouse. | Requiere optimización |
| 18 | Métricas de laboratorio en dispositivos móviles | LCP: **40,4 s**; TBT: **1.440 ms** en las condiciones de la prueba. | Deficiencia crítica |
| 19 | Volumen de recursos descargados | Aproximadamente **17,8 MB**. Se identificó un posible ahorro de **3,3 MB** en imágenes y **1,15 MB** en JavaScript no utilizado. | Deficiencia significativa |
| 20 | Core Web Vitals de usuarios reales | Datos del dominio en móviles: LCP **2,1 s**, INP **205 ms**, CLS **0,01**. En ordenadores: LCP **1,3 s**, INP **139 ms**, CLS **0,03**. | El INP móvil requiere mejora |

**Aclaración metodológica:** un LCP de laboratorio de 40,4 segundos no significa que todos los visitantes esperen exactamente ese tiempo. Lighthouse simula determinadas condiciones de dispositivo y conexión. Los datos de usuarios reales corresponden al dominio en su conjunto, no exclusivamente a la página `/de`.

No obstante, la diferencia entre los resultados móviles y de escritorio demuestra una elevada sensibilidad de la página a las condiciones de carga.

Valores recomendados por Google para una buena experiencia:

- LCP: máximo **2,5 s**.
- INP: máximo **200 ms**.
- CLS: máximo **0,1**.

Por tanto, el INP móvil de 205 ms queda fuera de la categoría «bueno», aunque la desviación respecto al límite es pequeña.

**Referencias oficiales:**

- [Google PageSpeed Insights — resultados de AXXOS](https://pagespeed.web.dev/analysis/https-www-axxoshotels-com-de/g6avonhc8b?form_factor=mobile)
- [Google web.dev — Core Web Vitals](https://web.dev/articles/vitals)
- [Chrome Developers — metodología de puntuación de Lighthouse](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)
- [Google web.dev — optimización del LCP](https://web.dev/articles/optimize-lcp)

### 5.4. Accesibilidad digital y funcionamiento de la interfaz

| N.º | Parámetro | Resultado | Estado |
|---|---|---|---|
| 21 | Accesibilidad digital | Lighthouse Accessibility: **84/100**. Entre los problemas identificados figuran nueve imágenes sin atributo `alt` y ocho enlaces sin nombre accesible. | Deficiencia |
| 22 | JavaScript y procesos funcionales | La ventana de reservas se abre y el filtro por ciudad funciona. Sin embargo, se detectó un error de JavaScript en la consola y determinadas incidencias en los recorridos del usuario. | Funcionamiento parcial; requiere nueva verificación |

**Resultados adicionales de las pruebas manuales:**

1. El botón `PREISE UND ZIMMER` utiliza `href="#"`, pero abre correctamente la ventana de reservas mediante JavaScript. Por tanto, no sería correcto clasificarlo como un botón inoperativo.
2. Durante uno de los recorridos de reserva de `Apartmány Dagmar`, el área principal de la siguiente pantalla apareció vacía. Es necesario repetir la prueba para determinar si se trató de un error de carga, falta de disponibilidad u otra circunstancia.
3. Al acceder desde la versión alemana a uno de los establecimientos wellness, la interfaz cambió al checo sin que el usuario seleccionara ese idioma. Debe comprobarse la conservación del idioma durante la navegación entre páginas.
4. Se detectó un error de JavaScript relacionado con una llamada a `addEventListener` sobre un elemento inexistente. No se ha demostrado que este error afecte directamente al proceso de reserva.

**Conclusión:** las funciones básicas existen y, en parte, funcionan correctamente. Sin embargo, las incidencias identificadas requieren pruebas repetidas en diferentes dispositivos y navegadores, utilizando recorridos de usuario reproducibles.

**Referencias oficiales:**

- [W3C — Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [Chrome Developers — evaluación de accesibilidad en Lighthouse](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)
- [Google — fundamentos de SEO para sitios con JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

### 5.5. Prioridades de corrección

| Prioridad | Acción necesaria |
|---|---|
| **P1 — Alta** | Optimizar la carga móvil; repetir la prueba de la pantalla vacía durante la reserva; corregir los errores de JavaScript que afecten a las acciones del usuario; garantizar nombres accesibles en los elementos interactivos. |
| **P2 — Media** | Corregir las incoherencias lingüísticas, Title y Meta Description; reorganizar la jerarquía de encabezados; revisar los atributos `alt` de las imágenes informativas; eliminar o actualizar las ofertas caducadas. |
| **P3 — Desarrollo** | Comprobar las etiquetas canonical y las referencias recíprocas `hreflang` en todas las versiones lingüísticas; implementar datos estructurados aplicables basados en información real de los hoteles. |

### 5.6. Evaluación técnica final

**4/10 — el sitio web funciona técnicamente, pero la calidad de su implementación no alcanza el nivel esperado de una plataforma hotelera comercial.**

**Aspectos positivos:** el sitio utiliza HTTPS, las páginas principales son accesibles, la información de los hoteles está presente en HTML, existe un sitemap, se han implementado varias versiones lingüísticas y funcionan los mecanismos básicos de reserva.

**Principales deficiencias:** bajo rendimiento móvil, estructura HTML semánticamente imprecisa, incoherencias lingüísticas, problemas de accesibilidad digital e incidencias puntuales en los procesos de reserva.

**Limitación de la evaluación:** la puntuación de 4/10 representa una valoración experta basada en el conjunto de resultados observados. No constituye una calificación oficial de Google ni se calcula directamente a partir de Lighthouse.

Las evaluaciones SEO y GEO se presentan por separado, puesto que la accesibilidad técnica de una página no equivale a la calidad de su optimización para buscadores ni a la claridad de sus relaciones semánticas.

---

## 6. Auditoría SEO del sitio web

**Objeto de la auditoría:** [AXXOS Hotels & Resorts — versión alemana](https://www.axxoshotels.com/de)

**Fecha de la auditoría:** 09.10.2026

**Evaluación SEO: 4/10.**

### 6.1. Fundamento de la evaluación

La auditoría automatizada de Lighthouse obtuvo una puntuación de **SEO: 92/100**. Sin embargo, este resultado comprende un conjunto limitado de comprobaciones técnicas y no constituye una evaluación del rendimiento real del sitio web en los motores de búsqueda.

La **evaluación experta de 4/10** considera parámetros adicionales: relevancia semántica, estructura del contenido, enlaces internos, coherencia lingüística y capacidad de las páginas para responder a las consultas de búsqueda.

Por tanto, no existe contradicción entre ambas puntuaciones: una página puede superar la mayoría de las comprobaciones automáticas y, al mismo tiempo, presentar deficiencias en la forma de comunicar sus ofertas a los motores de búsqueda.

**Fuentes:**

- [Resultado de PageSpeed Insights — AXXOS](https://pagespeed.web.dev/analysis/https-www-axxoshotels-com-de/g6avonhc8b?form_factor=mobile)
- [Chrome Developers — funciones y limitaciones de Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)

### 6.2. Resultados de la auditoría SEO

| N.º | Parámetro | Deficiencia identificada | Relevancia para SEO |
|---|---|---|---|
| 1 | **Title** | `Official Website Startseite by Axxos Hotels`: combinación de idiomas y descripción poco específica de la página. | El título refleja de forma insuficiente la oferta hotelera y su relevancia para las búsquedas. |
| 2 | **Meta Description** | La descripción de la página alemana está redactada en inglés. | No corresponde al contexto lingüístico del público objetivo. |
| 3 | **H1** | `Perfekte Lage`: expresión valorativa que no identifica al grupo hotelero, sus servicios ni el tipo de estancia. | El encabezado principal no define claramente el tema de la página. |
| 4 | **Jerarquía de encabezados** | Estructura H1–H6 inconsistente, incluido un H4 anterior al H1 principal. | Las secciones temáticas no están organizadas con suficiente claridad. |
| 5 | **Arquitectura de categorías** | La navegación combina hoteles, ofertas especiales, una categoría específica de tratamientos con radón, Wellness y Golf. | No existe un criterio uniforme de clasificación temática. |
| 6 | **Enlaces internos** | Se utilizan textos idénticos como `Mehr Info` para diferentes hoteles. | Los textos de los enlaces describen de forma insuficiente sus páginas de destino. |
| 7 | **Relevancia del contenido para las búsquedas** | Existe información sobre los hoteles, pero sus características diferenciales y su adecuación a las necesidades de los huéspedes se presentan de manera desigual. | Las relaciones temáticas entre servicios, necesidades y hoteles concretos no se establecen de forma suficientemente sistemática. |
| 8 | **SEO multilingüe** | La versión alemana contiene elementos en otros idiomas y se ha observado una redirección de navegación hacia una página en checo. | Se pierde la coherencia lingüística durante el recorrido del usuario. |
| 9 | **Datos estructurados** | No se detectó marcado JSON-LD que describiera al grupo hotelero y sus establecimientos en las páginas examinadas. | No se aprovecha la posibilidad de presentar los hoteles mediante datos estructurados explícitos. |
| 10 | **Actualización del contenido** | Se detectó una oferta cuya fecha de validez había expirado. | Reduce la actualidad y la utilidad práctica de la información. |
| 11 | **Indexación y descubrimiento de páginas** | El contenido principal está disponible en HTML; existen Sitemap y anotaciones lingüísticas. | Base positiva para SEO. No se ha determinado el alcance real de la indexación. |

### 6.3. Principales problemas SEO

**1. Definición semántica insuficiente de la página principal**

La página principal debe permitir que Google identifique qué representa la empresa, qué servicios ofrece y a qué necesidades de búsqueda responde su contenido.

El encabezado `Perfekte Lage` no proporciona esta información.

Esto no constituye una infracción del estándar HTML ni permite afirmar que Google sea incapaz de interpretar la página. Sin embargo, la formulación desaprovecha el encabezado principal como elemento de identificación de la oferta hotelera.

Google recomienda utilizar términos relevantes para las búsquedas en elementos importantes de la página, incluidos el Title y el encabezado principal.

**Fuente:** [Google Search Essentials](https://developers.google.com/search/docs/essentials).

**2. Arquitectura temática insuficientemente estructurada**

El sitio presenta hoteles, servicios wellness, programas de salud, golf y ofertas especiales.

Sin embargo, las categorías temáticas, las promociones comerciales y los establecimientos individuales aparecen en distintos niveles sin un criterio de organización claramente definido.

Desde la perspectiva SEO, es necesario establecer relaciones comprensibles:

- necesidad del huésped → categoría temática;
- categoría temática → hoteles adecuados;
- hotel → servicios y ofertas concretas.

Un mismo hotel puede pertenecer a varias categorías temáticas.

Esta estructura facilita la navegación y permite establecer una organización más clara de los enlaces internos.

**Fuentes:**

- [Google — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google — SEO Link Best Practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google — recomendaciones sobre la estructura de URL](https://developers.google.com/search/docs/crawling-indexing/url-structure)

**3. Contenido insuficientemente específico**

El sitio contiene información real sobre sus hoteles. Sin embargo, la disponibilidad de información no equivale a su suficiencia para responder a una intención de búsqueda concreta.

Las páginas de los hoteles deberían presentar de manera sistemática:

- ubicación y características del establecimiento;
- tratamientos, servicios e instalaciones disponibles;
- tipos de estancia para los que resulta adecuado;
- características diferenciales;
- condiciones de alojamiento y acceso a la reserva.

No se trata de incluir una cantidad determinada de palabras clave, sino de responder directamente a las preguntas del huésped potencial.

Google recomienda crear contenido útil y fiable, orientado prioritariamente a las necesidades de las personas.

**Fuente:** [Google — Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

**4. Incoherencia lingüística**

La versión alemana contiene determinados elementos en otros idiomas. Además, uno de los recorridos analizados condujo a una página en checo.

La presencia de `hreflang` es un aspecto positivo, pero no sustituye una localización adecuada del contenido y de la navegación.

Es necesario comprobar las referencias lingüísticas recíprocas y verificar que Title, Meta Description y contenido principal correspondan al idioma de cada versión.

**Fuentes:**

- [Google — Localized Versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google — recomendaciones sobre Title](https://developers.google.com/search/docs/appearance/title-link)
- [Google — recomendaciones sobre Meta Description](https://developers.google.com/search/docs/appearance/snippet)

**5. Descripción estructurada insuficiente de los hoteles**

Schema.org contempla tipos estandarizados como `Hotel`, `HotelRoom` y sus correspondientes propiedades.

Para AXXOS resulta recomendable considerar una representación estructurada del grupo hotelero y de sus establecimientos mediante datos verificables.

Esto permitiría presentar de forma más explícita las entidades y sus características a los sistemas que procesan información estructurada.

Es importante aclarar que el marcado no garantiza mejores posiciones ni resultados enriquecidos en Google. La ausencia de JSON-LD, por sí sola, no constituye un error técnico universal.

**Fuentes:**

- [Schema.org — Hotel](https://schema.org/Hotel)
- [Schema.org — hoteles y ofertas](https://schema.org/docs/hotels.html)
- [Google — Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

### 6.4. Prioridades de corrección

| Prioridad | Recomendación |
|---|---|
| **P1 — Alta** | Revisar Title, Meta Description y H1; definir claramente el tema semántico principal de la página de inicio; establecer una estructura coherente de categorías y enlaces internos. |
| **P2 — Media** | Organizar la jerarquía H1–H6; completar las descripciones de los hoteles con características concretas; corregir las incoherencias lingüísticas y actualizar la información caducada. |
| **P3 — Desarrollo** | Implementar el marcado estructurado correspondiente; verificar toda la red de `hreflang`, canonical y URL indexables; evaluar la cobertura de las consultas de búsqueda relacionadas con las categorías hoteleras. |

### 6.5. Limitaciones de la auditoría

La auditoría se ha realizado sobre la versión alemana del sitio web y determinadas páginas internas.

Sin acceso a Google Search Console y a los datos analíticos, no es posible determinar de forma fiable:

- el número real de páginas indexadas;
- las consultas de búsqueda y las posiciones alcanzadas;
- las impresiones y el CTR;
- el tráfico orgánico y las conversiones;
- el impacto de las deficiencias identificadas sobre los resultados comerciales reales.

Por tanto, la evaluación refleja **la calidad de la implementación SEO**, no los resultados medidos del posicionamiento orgánico.

### 6.6. Evaluación SEO final

**4/10 — el sitio web es técnicamente accesible para los motores de búsqueda, pero su contenido y arquitectura no comunican de manera suficientemente sistemática las ofertas hoteleras.**

Entre los aspectos positivos destacan la disponibilidad de contenido HTML indexable, las páginas individuales de los hoteles, el Sitemap y las anotaciones lingüísticas.

El problema principal es la falta de correspondencia suficientemente clara entre **lo que busca el huésped potencial, qué oferta responde a su necesidad y en qué página del sitio puede encontrarla**.

Para mejorar el SEO no basta con corregir los metadatos. Es necesario organizar sistemáticamente el contenido alrededor de los hoteles, sus características reales y las necesidades de búsqueda de los huéspedes.

**Evaluación experta: 4/10.**

---

## 7. Auditoría GEO — 4/10

La auditoría ha identificado una falta de definición semántica suficientemente clara del grupo hotelero AXXOS.

El sitio web no comunica de manera precisa el ADN de la marca, presenta de forma insuficiente las características diferenciales de sus hoteles y no establece relaciones claras entre los establecimientos, las necesidades de los huéspedes y las situaciones en las que cada hotel representa una opción adecuada.

**El problema principal: no es posible desarrollar una estrategia GEO eficaz sin una base sólida de marketing.**

Para ello, es imprescindible responder claramente a cuatro preguntas:

- ¿Qué representa la empresa y qué la diferencia de sus competidores?
- ¿A quién se dirigen sus ofertas?
- ¿Qué hotel es adecuado para cada tipo de huésped y en qué circunstancias?
- ¿Por qué debería el huésped elegir precisamente ese establecimiento?

Sin estas respuestas, la inteligencia artificial puede encontrar información sobre los hoteles, pero no dispone de fundamentos suficientemente claros para generar recomendaciones justificadas.

**La puntuación de 4/10** refleja una evaluación preliminar de la estructura informativa del sitio web, no los resultados de una investigación GEO completa.

**Puedo proporcionar una auditoría GEO exhaustiva, basada en la metodología propia que he desarrollado, si la empresa desea solicitar un análisis más profundo.**

---

## 8. Propuesta de colaboración

Mi especialización profesional comprende la estrategia de marketing, el posicionamiento digital de empresas y el GEO: la creación de condiciones que permitan a los sistemas de inteligencia artificial identificar correctamente una empresa, comprender sus ventajas competitivas y tenerlas en cuenta al formular recomendaciones.

**No me dedico directamente al diseño ni al desarrollo de sitios web.** Trabajo en estrecha colaboración con desarrolladores web, diseñadores UX/UI y especialistas SEO, proporcionando la base estratégica necesaria para su trabajo.

### 8.1. Marca y estrategia comercial

Puedo ayudar a la empresa a definir el ADN de su marca, identificar sus ventajas competitivas, determinar sus públicos objetivo y formular una propuesta de valor comercial única.

Si estos elementos ya están definidos, mi función consiste en analizarlos y establecer cómo trasladar correctamente la estrategia existente al entorno digital.

Presto especial atención al posicionamiento individual de cada hotel: para quién es adecuado, qué necesidades satisface y por qué un huésped debería elegirlo.

### 8.2. Estrategia del sitio web y especificaciones técnicas

A partir de una estrategia de marketing previamente acordada, desarrollo:

- La arquitectura de la información del sitio web y la lógica de los recorridos del usuario.
- La estructura de las propuestas comerciales y las relaciones semánticas entre hoteles, servicios y categorías de estancia.
- Las especificaciones técnicas para diseñadores, desarrolladores web y especialistas SEO, teniendo en cuenta los requisitos de SEO y GEO.

El trabajo se realiza en estrecha colaboración con el equipo responsable de la implementación técnica del sitio web.

### 8.3. GEO — un ámbito de colaboración independiente

**El GEO no se limita al sitio web.** Abarca la forma en que una empresa está representada, es identificada y puede ser recomendada por sistemas de inteligencia artificial a partir de la información disponible en diferentes fuentes.

En el marco de la metodología GEO propia que he desarrollado, ofrezco dos modalidades de colaboración:

**Modalidad de consultoría:** auditoría exhaustiva, desarrollo de una estrategia GEO individualizada y asesoramiento profesional al equipo de la empresa.

**Modalidad de ejecución integral:** realización de los trabajos GEO, gestión de la implementación de la estrategia acordada y evaluación periódica de los resultados.

**Mi objetivo es integrar la estrategia de marketing de la empresa, su presencia digital y las capacidades de la inteligencia artificial en un sistema coherente, orientado a atraer al público adecuado y aumentar las reservas directas.**
