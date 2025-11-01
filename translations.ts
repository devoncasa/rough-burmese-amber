import type { LanguageContent } from './types';

const enTableData = [
    { typeColor: 'Dark Cognac', description: 'Common, high availability; deep brownish hue with good polish potential.', inclusion: 'Partial inclusions', small: '1.0–1.5', medium: '1.2–2.0', large: '2.5–3.0', extraLarge: '3.0–3.5', notes: 'Ideal for mass production or beginner collectors.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'Light Honey (Partial Inclusion)', description: 'Warm amber tone; moderate clarity; slightly rarer than dark cognac.', inclusion: 'Partial inclusions', small: '1.5–2.0', medium: '2.0–2.8', large: '3.0–3.8', extraLarge: '3.8–4.5', notes: 'Good balance between color and price.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Light Honey (Clean)', description: 'Transparent golden-yellow with minimal or invisible inclusions.', inclusion: 'Nearly inclusion-free', small: '2.0–3.0', medium: '2.8–4.0', large: '4.0–5.5', extraLarge: '5.0–6.0', notes: 'High transparency suitable for jewelry-grade polishing.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Gold Yellow (Partial Inclusion)', description: 'Bright golden tone with some inclusions; rare in large sizes.', inclusion: 'Partial inclusions', small: '2.5–3.5', medium: '3.0–4.5', large: '4.5–6.0', extraLarge: '6.0–7.5', notes: 'Rich golden look, popular for high-end ornaments.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Gold Yellow (Clean)', description: 'Pure gold-yellow; very clear; rare in big pieces.', inclusion: 'No inclusions', small: '3.0–4.5', medium: '4.5–6.5', large: '6.5–8.0', extraLarge: '8.0–9.0', notes: 'Excellent light reflection and rarity add value.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Orange Amber (Partial Inclusion)', description: 'Orange tone; moderately rare; warm and energetic color.', inclusion: 'Partial inclusions', small: '3.0–4.0', medium: '4.0–5.5', large: '5.5–7.0', extraLarge: '7.0–8.0', notes: 'Preferred for prayer beads and pendants.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Orange Amber (Clean)', description: 'Strong orange hue; high clarity; premium-grade material.', inclusion: 'Nearly inclusion-free', small: '4.0–5.5', medium: '5.5–7.5', large: '7.5–9.0', extraLarge: '9.0–10.5', notes: 'Excellent for carvings or high-end jewelry.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Pigeon Blood Red to Cherry Red', description: 'Rare color range; deep red tones to translucent cherry red.', inclusion: 'Partial or clean', small: '6.0–8.0', medium: '8.0–12.0', large: '12.0–16.0', extraLarge: '16.0–19.0', notes: 'Rare and collector-grade.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'Wood Pattern Amber', description: 'Unique internal pattern resembling wood grain; highly collectible.', inclusion: 'Visible pattern', small: '7.0–9.0', medium: '9.0–11.5', large: '11.5–14.0', extraLarge: '14.0–17.0', notes: 'Natural artistic appearance; each piece unique.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'Black Amber (Brownish Visible)', description: 'Opaque to deep brownish-black; some internal glow.', inclusion: 'Partial inclusions', small: '4.0–5.0', medium: '5.0–6.5', large: '6.5–8.0', extraLarge: '8.0–9.5', notes: 'Popular for talismans; energy-rich look.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black-onyx.webp' },
    { typeColor: 'Black Amber (Solid Dark)', description: 'Fully opaque, solid black; hardest to polish cleanly.', inclusion: 'None visible', small: '5.0–6.5', medium: '6.5–8.5', large: '8.5–10.0', extraLarge: '10.0–12.0', notes: 'Rare natural black; sought after in Asian spiritual markets.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black-onyx.webp' },
    { typeColor: 'Mila Amber (Bee Wax-like, Partial)', description: 'Milky or waxy tone, creamy texture; very limited source.', inclusion: 'Partial cloudy', small: '6.0–8.0', medium: '8.0–10.0', large: '10.0–12.0', extraLarge: '12.0–14.0', notes: 'Highly spiritual and healing symbolism.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'Mila Amber (Pure Milky / Bee Wax Type)', description: 'Opaque creamy white to golden milky tone; extremely rare.', inclusion: 'No inclusions', small: '8.0–10.0', medium: '10.0–14.0', large: '14.0–17.0', extraLarge: '17.0–20.0', notes: 'Top-grade collectible; very few large pieces found.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const enNotesData = [
    { title: 'A Note on Quality', content: 'We carefully select and collect rough Burmese amber in the best condition possible. Our goal is to ensure that each piece has minimal inclusions and no visible cracks. However, please note that since these are natural rough stones, certain internal features or hidden inclusions may not be fully visible until the piece is cut or polished. Each stone remains unique, carrying its natural character and beauty.' },
    { title: 'Bulk Discount', content: 'Buyers purchasing over 5 kg per lot may receive 10–25% discount depending on mix and size uniformity.' },
    { title: 'Origin Guarantee', content: 'All materials are 100% natural Burmese amber (Cretaceous period fossil resin).' },
    { title: 'Historical Significance & Value', content: 'Burmese amber is a 100-million-year-old fossilized pine resin from an ancient tree species that has been extinct for over 60 million years. Each piece is a natural time capsule from the Cretaceous period. Like other gemstones, the value of Burmese amber increases with size — larger pieces are much rarer to find in nature, making them significantly more valuable when compared by weight.' },
    { title: 'Size Reference', content: '1–20g = small pebble pieces; 150–500g = palm-sized; 500–2000g = museum-grade specimens.' },
    { title: 'Price Factors', content: 'Prices are influenced by clarity, color rarity, weight, inclusions, and demand.' },
    { title: 'Retail Multipliers', content: 'Retail sellers often mark up by 25–40%, especially for cut or polished pieces.' },
];

const esTableData = [
    { typeColor: 'Cognac Oscuro', description: 'Común, alta disponibilidad; tono marrón profundo con buen potencial de pulido.', inclusion: 'Inclusiones parciales', small: '1.0–1.5', medium: '1.2–2.0', large: '2.5–3.0', extraLarge: '3.0–3.5', notes: 'Ideal para producción en masa o coleccionistas principiantes.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'Miel Clara (Inclusión Parcial)', description: 'Tono cálido de ámbar; claridad moderada; algo más raro que el cognac oscuro.', inclusion: 'Inclusiones parciales', small: '1.5–2.0', medium: '2.0–2.8', large: '3.0–3.8', extraLarge: '3.8–4.5', notes: 'Buen equilibrio entre color y precio.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Miel Clara (Limpia)', description: 'Amarillo dorado transparente con inclusiones mínimas o invisibles.', inclusion: 'Casi sin inclusiones', small: '2.0–3.0', medium: '2.8–4.0', large: '4.0–5.5', extraLarge: '5.0–6.0', notes: 'Alta transparencia, calidad joyera.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Dorado (Inclusión Parcial)', description: 'Tono dorado brillante con algunas inclusiones; raro en tamaños grandes.', inclusion: 'Inclusiones parciales', small: '2.5–3.5', medium: '3.0–4.5', large: '4.5–6.0', extraLarge: '6.0–7.5', notes: 'Apariencia rica, muy popular para adornos de lujo.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Dorado (Limpio)', description: 'Dorado puro, muy claro; difícil de encontrar en piezas grandes.', inclusion: 'Sin inclusiones', small: '3.0–4.5', medium: '4.5–6.5', large: '6.5–8.0', extraLarge: '8.0–9.0', notes: 'Reflejo de luz excelente y alta rareza.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Ámbar Naranja (Inclusión Parcial)', description: 'Tono naranja; moderadamente raro; color cálido y energético.', inclusion: 'Inclusiones parciales', small: '3.0–4.0', medium: '4.0–5.5', large: '5.5–7.0', extraLarge: '7.0–8.0', notes: 'Muy usado para rosarios y colgantes.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Ámbar Naranja (Limpio)', description: 'Naranja intenso, alta claridad; material de primera calidad.', inclusion: 'Casi sin inclusiones', small: '4.0–5.5', medium: '5.5–7.5', large: '7.5–9.0', extraLarge: '9.0–10.5', notes: 'Perfecto para tallas finas o joyería de gama alta.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Rojo Sangre de Paloma / Rojo Cereza', description: 'Rango de color raro; tonos rojos intensos hasta cereza translúcido.', inclusion: 'Parcial o limpio', small: '6.0–8.0', medium: '8.0–12.0', large: '12.0–16.0', extraLarge: '16.0–19.0', notes: 'Muy escaso; calidad de colección.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'Ámbar con Vetas de Madera', description: 'Patrón interno único que recuerda a la madera; muy coleccionable.', inclusion: 'Patrón visible', small: '7.0–9.0', medium: '9.0–11.5', large: '11.5–14.0', extraLarge: '14.0–17.0', notes: 'Apariencia artística natural; cada pieza es única.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'Ámbar Negro (Marrón Visible)', description: 'Opaco a marrón oscuro; brillo interno suave.', inclusion: 'Inclusiones parciales', small: '4.0–5.0', medium: '5.0–6.5', large: '6.5–8.0', extraLarge: '8.0–9.5', notes: 'Popular como talismán; apariencia energética.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black-onyx.webp' },
    { typeColor: 'Ámbar Negro (Sólido Oscuro)', description: 'Completamente opaco, negro sólido; difícil de pulir sin defectos.', inclusion: 'Sin inclusiones', small: '5.0–6.5', medium: '6.5–8.5', large: '8.5–10.0', extraLarge: '10.0–12.0', notes: 'Muy raro; muy buscado en el mercado espiritual asiático.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black-onyx.webp' },
    { typeColor: 'Ámbar Mila (Tipo Cera de Abeja, Parcial)', description: 'Tono lechoso o ceroso; textura cremosa; fuente muy limitada.', inclusion: 'Parcialmente nublado', small: '6.0–8.0', medium: '8.0–10.0', large: '10.0–12.0', extraLarge: '12.0–14.0', notes: 'Gran simbolismo espiritual y propiedades curativas.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'Ámbar Mila (Puro / Tipo Cera de Abeja)', description: 'Blanco cremoso a dorado lechoso; extremadamente raro.', inclusion: 'Sin inclusiones', small: '8.0–10.0', medium: '10.0–14.0', large: '14.0–17.0', extraLarge: '17.0–20.0', notes: 'Grado de colección; muy pocas piezas grandes disponibles.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const esNotesData = [
    { title: 'Nota Sobre la Calidad', content: 'Seleccionamos y recolectamos cuidadosamente el ámbar birmano en bruto en las mejores condiciones posibles. Nuestro objetivo es garantizar que cada pieza tenga la menor cantidad de inclusiones y sin grietas visibles. Sin embargo, tenga en cuenta que, al ser piedras naturales sin procesar, algunas características internas o inclusiones ocultas pueden no ser completamente visibles hasta que la pieza sea cortada o pulida. Cada piedra es única y conserva su carácter y belleza natural.' },
    { title: 'Descuento por volumen', content: 'Compras superiores a 5 kg por lote pueden recibir entre 10–25% de descuento, según la mezcla y uniformidad del tamaño.' },
    { title: 'Garantía de origen', content: 'Todo el material es ámbar birmano natural 100% (resina fósil del período Cretácico).' },
    { title: 'Significado Histórico y Valor', content: 'El ámbar birmano es una resina fosilizada de pino con una antigüedad de aproximadamente 100 millones de años, proveniente de una especie de árbol que se extinguió hace más de 60 millones de años. Cada pieza es una cápsula natural del tiempo del período Cretácico. Al igual que otras gemas, el valor del ámbar birmano aumenta con el tamaño, ya que las piezas grandes son mucho más raras en la naturaleza y, por lo tanto, mucho más valiosas al compararlas por peso.' },
    { title: 'Referencia de tamaño', content: '1–20g = piezas pequeñas tipo guijarro; 150–500g = tamaño de la palma; 500–2000g = ejemplares de grado museo.' },
    { title: 'Factores de precio', content: 'Dependen de la claridad, rareza del color, peso, inclusiones y demanda del mercado.' },
    { title: 'Margen minorista', content: 'Los minoristas suelen aplicar un aumento de 25–40%, especialmente para piezas cortadas o pulidas.' },
];


export const translations: { [key: string]: LanguageContent } = {
  en: {
    title: 'Rough Burmese Amber Price Guide',
    subtitle: 'A comprehensive wholesale price guide (USD/gram) for Burmese amber, based on color, inclusion, rarity, and size. Retail prices may be 20-40% higher.',
    tableHeaders: [
      { key: 'imageUrl', label: 'Image' },
      { key: 'typeColor', label: 'Amber Type / Color' },
      { key: 'description', label: 'Description & Rarity' },
      { key: 'inclusion', label: 'Inclusion Type' },
      { key: 'small', label: 'Small (1–20g)' },
      { key: 'medium', label: 'Medium (20–150g)' },
      { key: 'large', label: 'Large (150–500g)' },
      { key: 'extraLarge', label: 'Extra Large (500–2000g)' },
      { key: 'notes', label: 'Notes' },
    ],
    tableData: enTableData,
    notesTitle: 'Additional Notes',
    notesData: enNotesData,
    specialNote: {
      title: 'Important Note on Availability',
      content: 'Please note that the following types and colors of Burmese amber are extremely rare and difficult to find: Cherry Red, Wooden Pattern, Black, and Mila (Milky/Bee Wax Type). We cannot guarantee full availability or large quantities upon request. However, we will do our best to source them and provide updated stock information within a few days after your order is placed.'
    },
    footerText: 'Vicky Burmese Amber & Gems Co., Ltd. All rights reserved.',
    estimatorTitle: 'Price Estimator',
    estimatorHeaders: {
      item: 'Amber Type / Color',
      inclusion: 'Inclusion Type',
      size: 'Size Range',
      pricePerGram: 'Price/Gram (USD)',
      quantity: 'Quantity (grams)',
      total: 'Estimated Total'
    },
    addRowButton: 'Add Item',
    resetButton: 'Reset All',
    downloadButton: 'Download Estimate (PDF)',
    grandTotalLabel: 'Grand Total',
    selectTypePlaceholder: 'Select Amber Type',
    selectSizePlaceholder: 'Select Size',
    estimatorNote: 'Please note: All prices shown include import tax and delivery fees from Myanmar to Thailand. However, the final total price does not include delivery, customs inspection, or any local taxes and additional expenses that may apply in the destination country. Buyers are responsible for any import duties or charges incurred at their end.'
  },
  es: {
    title: 'Guía de Precios del Ámbar Birmano en Bruto',
    subtitle: 'Una guía completa de precios al por mayor (USD/gramo) para el ámbar birmano, basada en color, inclusión, rareza y tamaño. Los precios de venta al público pueden ser un 20-40% más altos.',
    tableHeaders: [
      { key: 'imageUrl', label: 'Imagen' },
      { key: 'typeColor', label: 'Tipo / Color de Ámbar' },
      { key: 'description', label: 'Descripción y Rareza' },
      { key: 'inclusion', label: 'Tipo de Inclusión' },
      { key: 'small', label: 'Pequeño (1–20g)' },
      { key: 'medium', label: 'Mediano (20–150g)' },
      { key: 'large', label: 'Grande (150–500g)' },
      { key: 'extraLarge', label: 'Extra Grande (500–2000g)' },
      { key: 'notes', label: 'Notas' },
    ],
    tableData: esTableData,
    notesTitle: 'Notas Adicionales',
    notesData: esNotesData,
    specialNote: {
      title: 'Nota Importante sobre Disponibilidad',
      content: 'Tenga en cuenta que los siguientes tipos y colores de ámbar birmano son extremadamente raros y difíciles de conseguir: Rojo Cereza, Patrón de Madera, Negro y Mila (Tipo Lechoso / Cera de Abeja). No podemos garantizar la disponibilidad total ni grandes cantidades por pedido, pero haremos todo lo posible por obtenerlos y actualizar la información de existencias en unos pocos días después de realizar su pedido.'
    },
    footerText: 'Vicky Burmese Amber & Gems Co., Ltd. Todos los derechos reservados.',
    estimatorTitle: 'Estimador de Precios',
    estimatorHeaders: {
      item: 'Tipo / Color de Ámbar',
      inclusion: 'Tipo de Inclusión',
      size: 'Rango de Tamaño',
      pricePerGram: 'Precio/Gramo (USD)',
      quantity: 'Cantidad (gramos)',
      total: 'Total Estimado'
    },
    addRowButton: 'Añadir Artículo',
    resetButton: 'Reiniciar Todo',
    downloadButton: 'Descargar Estimación (PDF)',
    grandTotalLabel: 'Total General',
    selectTypePlaceholder: 'Seleccionar Tipo de Ámbar',
    selectSizePlaceholder: 'Seleccionar Tamaño',
    estimatorNote: 'Atención: Todos los precios indicados incluyen el impuesto de importación y los gastos de envío desde Myanmar hasta Tailandia. Sin embargo, el precio total final no incluye los gastos de envío, inspección aduanera ni los impuestos locales u otros costos adicionales que puedan aplicarse en el país de destino. El comprador es responsable de cualquier arancel o cargo de importación que se genere en su país.'
  }
};