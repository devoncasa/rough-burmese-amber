import type { LanguageContent } from './types';

const enTableData = [
    { typeColor: 'Dark Cognac', description: 'Common, high availability; deep brownish hue with good polish potential.', inclusion: 'Partial inclusions', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'Ideal for mass production or beginner collectors.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'Light Honey (Partial Inclusion)', description: 'Warm amber tone; moderate clarity; slightly rarer than dark cognac.', inclusion: 'Partial inclusions', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'Good balance between color and price.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Light Honey (Clean)', description: 'Transparent golden-yellow with minimal or invisible inclusions.', inclusion: 'Nearly inclusion-free', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'High transparency suitable for jewelry-grade polishing.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Gold Yellow (Partial Inclusion)', description: 'Bright golden tone with some inclusions; rare in large sizes.', inclusion: 'Partial inclusions', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'Rich golden look, popular for high-end ornaments.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Gold Yellow (Clean)', description: 'Pure gold-yellow; very clear; rare in big pieces.', inclusion: 'No inclusions', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'Excellent light reflection and rarity add value.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Orange Amber (Partial Inclusion)', description: 'Orange tone; moderately rare; warm and energetic color.', inclusion: 'Partial inclusions', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'Preferred for prayer beads and pendants.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Orange Amber (Clean)', description: 'Strong orange hue; high clarity; premium-grade material.', inclusion: 'Nearly inclusion-free', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'Excellent for carvings or high-end jewelry.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Pigeon Blood Red to Cherry Red', description: 'Rare color range; deep red tones to translucent cherry red.', inclusion: 'Partial or clean', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'Rare and collector-grade.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'Wood Pattern Amber', description: 'Unique internal pattern resembling wood grain; highly collectible.', inclusion: 'Visible pattern', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'Natural artistic appearance; each piece unique.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'Black Amber (Brownish Visible)', description: 'Opaque to deep brownish-black; some internal glow.', inclusion: 'Partial inclusions', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'Popular for talismans; energy-rich look.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Black Amber (Solid Dark)', description: 'Fully opaque, solid black; hardest to polish cleanly.', inclusion: 'None visible', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'Rare natural black; sought after in Asian spiritual markets.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Mila Amber (Bee Wax-like, Partial)', description: 'Milky or waxy tone, creamy texture; very limited source.', inclusion: 'Partial cloudy', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'Highly spiritual and healing symbolism.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'Mila Amber (Pure Milky / Bee Wax Type)', description: 'Opaque creamy white to golden milky tone; extremely rare.', inclusion: 'No inclusions', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'Top-grade collectible; very few large pieces found.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
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
    { typeColor: 'Cognac Oscuro', description: 'Común, alta disponibilidad; tono marrón profundo con buen potencial de pulido.', inclusion: 'Inclusiones parciales', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'Ideal para producción en masa o coleccionistas principiantes.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'Miel Clara (Inclusión Parcial)', description: 'Tono cálido de ámbar; claridad moderada; algo más raro que el cognac oscuro.', inclusion: 'Inclusiones parciales', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'Buen equilibrio entre color y precio.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Miel Clara (Limpia)', description: 'Amarillo dorado transparente con inclusiones mínimas o invisibles.', inclusion: 'Casi sin inclusiones', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'Alta transparencia, calidad joyera.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Dorado (Inclusión Parcial)', description: 'Tono dorado brillante con algunas inclusiones; raro en tamaños grandes.', inclusion: 'Inclusiones parciales', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'Apariencia rica, muy popular para adornos de lujo.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Dorado (Limpio)', description: 'Dorado puro, muy claro; difícil de encontrar en piezas grandes.', inclusion: 'Sin inclusiones', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'Reflejo de luz excelente y alta rareza.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Ámbar Naranja (Inclusión Parcial)', description: 'Tono naranja; moderadamente raro; color cálido y energético.', inclusion: 'Inclusiones parciales', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'Muy usado para rosarios y colgantes.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Ámbar Naranja (Limpio)', description: 'Naranja intenso, alta claridad; material de primera calidad.', inclusion: 'Casi sin inclusiones', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'Perfecto para tallas finas o joyería de gama alta.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Rojo Sangre de Paloma / Rojo Cereza', description: 'Rango de color raro; tonos rojos intensos hasta cereza translúcido.', inclusion: 'Parcial o limpio', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'Muy escaso; calidad de colección.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'Ámbar con Vetas de Madera', description: 'Patrón interno único que recuerda a la madera; muy coleccionable.', inclusion: 'Patrón visible', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'Apariencia artística natural; cada pieza es única.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'Ámbar Negro (Marrón Visible)', description: 'Opaco a marrón oscuro; brillo interno suave.', inclusion: 'Inclusiones parciales', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'Popular como talismán; apariencia energética.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Ámbar Negro (Sólido Oscuro)', description: 'Completamente opaco, negro sólido; difícil de pulir sin defectos.', inclusion: 'Sin inclusiones', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'Muy raro; muy buscado en el mercado espiritual asiático.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Ámbar Mila (Tipo Cera de Abeja, Parcial)', description: 'Tono lechoso o ceroso; textura cremosa; fuente muy limitada.', inclusion: 'Parcialmente nublado', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'Gran simbolismo espiritual y propiedades curativas.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'Ámbar Mila (Puro / Tipo Cera de Abeja)', description: 'Blanco cremoso a dorado lechoso; extremadamente raro.', inclusion: 'Sin inclusiones', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'Grado de colección; muy pocas piezas grandes disponibles.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
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

const arTableData = [
    { typeColor: 'كُنيـاك داكن', description: 'شائع، متوفر بكثرة؛ لون بني غامق مع قابلية عالية للتلميع.', inclusion: 'شوائب جزئية', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'مثالي للإنتاج الكمي أو لهواة الجمع المبتدئين.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'عسلـي فاتح (شوائب جزئية)', description: 'لون كهرماني دافئ؛ صفاء متوسط؛ أندر قليلاً من الكُنيـاك الداكن.', inclusion: 'شوائب جزئية', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'توازن ممتاز بين اللون والسعر.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'عسلـي فاتح (نقي)', description: 'أصفر ذهبي شفاف مع شوائب شبه معدومة.', inclusion: 'شبه خالٍ من الشوائب', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'مثالي لصناعة المجوهرات عالية الجودة.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'أصفر ذهبي (شوائب جزئية)', description: 'لون ذهبي لامع مع بعض الشوائب؛ نادر في الأحجام الكبيرة.', inclusion: 'شوائب جزئية', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'مظهر فاخر؛ شائع للزينة الراقية.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'أصفر ذهبي (نقي)', description: 'لون ذهبي صافي وواضح؛ نادر في القطع الكبيرة.', inclusion: 'بدون شوائب', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'يتميز بانعكاس ضوء رائع وقيمة عالية.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'برتقالي (شوائب جزئية)', description: 'لون برتقالي دافئ؛ نادر نسبيًا؛ مفعم بالطاقة.', inclusion: 'شوائب جزئية', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'مفضل لصناعة السبَح والعقود.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'برتقالي (نقي)', description: 'لون برتقالي قوي؛ صفاء عالٍ؛ خامة ممتازة.', inclusion: 'شبه خالٍ من الشوائب', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'مثالي للنحت أو المجوهرات الفاخرة.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'أحمر دم الحمام إلى أحمر كرزي', description: 'مجموعة ألوان نادرة؛ من الأحمر الداكن إلى الأحمر الكرزي الشفاف.', inclusion: 'شوائب جزئية أو نقي', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'من أندر الأنواع ومناسب لهواة الجمع.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'نقش خشبي', description: 'نمط داخلي فريد يشبه عروق الخشب؛ مرغوب جدًا.', inclusion: 'نقش ظاهر', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'مظهر طبيعي فني؛ كل قطعة فريدة.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'أسود (بني واضح)', description: 'غير شفاف إلى بني غامق؛ يحتوي على توهج داخلي بسيط.', inclusion: 'شوائب جزئية', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'شائع كتعويذة؛ يتميز بطاقة قوية.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'أسود صلب', description: 'أسود بالكامل غير شفاف؛ صعب التلميع.', inclusion: 'بدون شوائب مرئية', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'نادر جدًا؛ مرغوب في الأسواق الروحانية الآسيوية.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'ميلا (شبه شمع النحل)', description: 'لون حليبي أو شمعي؛ خامة محدودة جدًا.', inclusion: 'غائم جزئي', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'يرمز للطاقة الروحية والشفاء.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'ميلا (حليبي نقي / شمع النحل)', description: 'أبيض حليبي إلى ذهبي؛ نادر للغاية.', inclusion: 'بدون شوائب', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'من أعلى الدرجات القابلة للجمع؛ نادر جدًا بالحجم الكبير.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const arNotesData = [
    { title: 'ملاحظة حول الجودة', content: 'نقوم باختيار وجمع عنبر بورما الخام بعناية فائقة وفي أفضل حالة ممكنة. هدفنا هو التأكد من أن كل قطعة تحتوي على أقل قدر من الشوائب ولا توجد بها شقوق واضحة. ومع ذلك، يرجى العلم أنه نظرًا لكونها أحجارًا طبيعية خام، قد لا تكون بعض الميزات الداخلية أو الشوائب المخفية مرئية بالكامل حتى يتم قطع القطعة أو صقلها. كل حجر يظل فريدًا ويحمل طابعه وجماله الطبيعي.' },
    { title: 'خصم الكميات', content: 'يمكن للمشترين الذين يشترون أكثر من 5 كجم لكل دفعة الحصول على خصم يتراوح بين 10-25٪ حسب المزيج وتوحيد الحجم.' },
    { title: 'ضمان الأصالة', content: 'جميع المواد هي عنبر بورمي طبيعي 100٪ (راتينج أحفوري من العصر الطباشيري).' },
    { title: 'الأهمية التاريخية والقيمة', content: 'العنبر البورمي هو راتينج صنوبر متحجر عمره 100 مليون عام من نوع شجرة قديمة انقرضت منذ أكثر من 60 مليون عام. كل قطعة هي كبسولة زمنية طبيعية من العصر الطباشيري. مثل الأحجار الكريمة الأخرى، تزداد قيمة العنبر البورمي مع الحجم - فالقطع الأكبر حجمًا نادرة جدًا في الطبيعة، مما يجعلها أكثر قيمة بكثير عند مقارنتها بالوزن.' },
    { title: 'مرجع الأحجام', content: '1-20 جرام = قطع صغيرة بحجم الحصى؛ 150-500 جرام = بحجم كف اليد؛ 500-2000 جرام = عينات من الدرجة المتحفية.' },
    { title: 'عوامل تحديد السعر', content: 'تتأثر الأسعار بالصفاء وندرة اللون والوزن والشوائب والطلب.' },
    { title: 'هوامش ربح التجزئة', content: 'غالبًا ما يضيف بائعو التجزئة هامش ربح بنسبة 25-40٪، خاصة للقطع المقطوعة أو المصقولة.' },
];

const hiTableData = [
    { typeColor: 'डार्क कॉन्यैक', description: 'सामान्य; गहरे भूरे रंग के साथ अच्छा चमकदार पॉलिश संभावित।', inclusion: 'आंशिक समावेशन', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'बड़े पैमाने पर उत्पादन या शुरुआती संग्रहकर्ताओं के लिए आदर्श।', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'लाइट हनी (आंशिक)', description: 'गर्म एंबर टोन; मध्यम पारदर्शिता; डार्क कॉन्यैक से थोड़ी दुर्लभ।', inclusion: 'आंशिक', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'रंग और मूल्य का अच्छा संतुलन।', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'लाइट हनी (स्वच्छ)', description: 'पारदर्शी सुनहरा पीला, लगभग बिना समावेशन के।', inclusion: 'लगभग बिना समावेशन', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'आभूषण गुणवत्ता की transparencia।', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'गोल्ड येलो (आंशिक)', description: 'चमकीला सुनहरा टोन; कुछ समावेशन के साथ; बड़े आकार में दुर्लभ।', inclusion: 'आंशिक', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'समृद्ध सुनहरी झलक; उच्च श्रेणी के आभूषणों के लिए लोकप्रिय।', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'गोल्ड येलो (स्वच्छ)', description: 'शुद्ध स्वर्ण-पीला; बहुत पारदर्शी; बड़े टुकड़े अत्यंत दुर्लभ।', inclusion: 'कोई नहीं', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'उत्कृष्ट प्रकाश परावर्तन; अत्यधिक दुर्लभता।', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'ऑरेंज एंबर (आंशिक)', description: 'गर्म नारंगी रंग; मध्यम दुर्लभता; ऊर्जावान दिखावट।', inclusion: 'आंशिक', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'जप माला और पेंडेंट्स के लिए पसंदीदा।', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'ऑरेंज एंबर (स्वच्छ)', description: 'गहरा नारंगी; अत्यधिक पारदर्शिता; प्रीमियम श्रेणी।', inclusion: 'लगभग बिना समावेशन', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'नक्काशी या उच्च श्रेणी के आभूषणों के लिए उत्तम।', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'पिजन ब्लड रेड / चेरी रेड', description: 'दुर्लभ रंग श्रेणी; गहरा लाल से लेकर पारदर्शी चेरी लाल।', inclusion: 'आंशिक या स्वच्छ', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'संग्राहक श्रेणी के लिए मूल्यवान।', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'वुड पैटर्न एंबर', description: 'लकड़ी के तंतु जैसी प्राकृतिक बनावट; अत्यधिक संग्राह्य।', inclusion: 'दृश्य पैटर्न', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'प्रत्येक टुकड़ा अद्वितीय और कलात्मक।', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'ब्लैक एंबर (भूरा झलक)', description: 'गहरा भूरा से काला; कुछ आंतरिक चमक।', inclusion: 'आंशिक', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'ताबीज़ के लिए लोकप्रिय; ऊर्जा-युक्त दिखावट।', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'ब्लैक एंबर (सॉलिड डार्क)', description: 'पूर्णतः अपारदर्शी काला; पॉलिश करना कठिन।', inclusion: 'नहीं', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'एशियाई आध्यात्मिक बाजारों में अत्यधिक मांग।', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'मीला एंबर (बी वैक्स समान, आंशिक)', description: 'दूधिया या मोम जैसा बनावट; बहुत सीमित स्रोत।', inclusion: 'बादल जैसा आंशिक', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'आध्यात्मिक और उपचारात्मक प्रतीक।', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'मीला एंबर (शुद्ध दूधिया / बी वैक्स टाइप)', description: 'क्रीमी सफेद से स्वर्ण दूधिया टोन; अत्यंत दुर्लभ।', inclusion: 'कोई नहीं', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'सर्वोच्च श्रेणी का संग्राहक नमूना।', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const hiNotesData = [
    { title: 'गुणवत्ता पर ध्यान', content: 'हम बर्मी एंबर के केवल सर्वोत्तम टुकड़े चुनते हैं जिनमें कम से कम समावेशन और कोई बड़ी दरार न हो। हालाँकि, चूँकि यह प्राकृतिक पत्थर है, कुछ आंतरिक विशेषताएँ कट या पॉलिश के बाद ही स्पष्ट हो सकती हैं।' },
    { title: 'थोक छूट', content: '5 किलोग्राम या उससे अधिक प्रति लॉट खरीदने वालों को 10–25% तक की छूट मिल सकती है।' },
    { title: 'उत्पत्ति की गारंटी', content: 'सभी सामग्री 100% प्राकृतिक बर्मी एंबर (क्रिटेशियस काल का जीवाश्म रेज़िन) हैं।' },
    { title: 'ऐतिहासिक महत्व और मूल्य', content: 'बर्मी एंबर लगभग 10 करोड़ वर्ष पुराना जीवाश्मित रेज़िन है, जो विलुप्त प्राचीन वृक्षों से उत्पन्न हुआ था। हर टुकड़ा प्राकृतिक “टाइम कैप्सूल” है — और बड़े आकार के टुकड़े दुर्लभ होने के कारण अधिक मूल्यवान होते हैं।' },
    { title: 'आकार संदर्भ', content: '1–20g = छोटे टुकड़े; 150–500g = हथेली के आकार; 500–2000g = संग्रहालय श्रेणी के नमूने।' },
    { title: 'मूल्य निर्धारण कारक', content: 'पारदर्शिता, रंग की दुर्लभता, वजन, समावेशन और मांग के अनुसार।' },
    { title: 'खुदरा मूल्य वृद्धि', content: 'खुदरा विक्रेता आमतौर पर कटे या पॉलिश किए गए टुकड़ों पर 25–40% तक का मार्जिन जोड़ते हैं।' },
];

const thTableData = [
    { typeColor: 'สีน้ำผึ้งเข้ม (Deark Cognac)', description: 'มีมากทั่วไป; สีเข้มแบบน้ำตาลพร้อมโอกาสขัดเงาดี', inclusion: 'สิ่งเจือปนบางส่วน', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'เหมาะสำหรับการผลิตจำนวนมากหรือผู้เริ่มสะสม', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'สีน้ำผึ้งอ่อน (มี inclusions บ้าง)', description: 'สีอำพันอบอุ่น ความใสปานกลาง หายากกว่าสี Dark Cognac เล็กน้อย', inclusion: 'สิ่งเจือปนบางส่วน', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'สมดุลระหว่างสีและราคา', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'สีน้ำผึ้งอ่อน (สะอาด)', description: 'สีทอง-เหลืองใส มีสิ่งเจือปนน้อยหรือแทบไม่เห็น', inclusion: 'แทบไม่มีสิ่งเจือปน', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'เหมาะสำหรับขัดเงาเพื่อทำเครื่องประดับ', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'สีเหลืองทอง (มี inclusions บ้าง)', description: 'สีทองสว่าง มีสิ่งเจือปนบ้าง หายากในขนาดใหญ่', inclusion: 'สิ่งเจือปนบางส่วน', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'เหมาะกับเครื่องประดับหรู', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'สีเหลืองทอง (สะอาด)', description: 'สีทอง-เหลืองบริสุทธิ์ ใสมาก หายากในชิ้นใหญ่', inclusion: 'ไม่มีสิ่งเจือปน', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'เงาแสงดีมาก เพิ่มมูลค่า', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'อำพันส้ม (มี inclusions บ้าง)', description: 'สีส้มอบอุ่น ปานกลางหายาก', inclusion: 'สิ่งเจือปนบางส่วน', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'เหมาะสำหรับลูกประคำและจี้', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'อำพันส้ม (สะอาด)', description: 'สีส้มเข้ม ความใสสูง เกรดพรีเมียม', inclusion: 'แทบไม่มีสิ่งเจือปน', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'เหมาะสำหรับแกะสลักหรือเครื่องประดับหรู', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'อำพันแดงเลือดนก', description: 'ช่วงสีหายาก สีแดงเข้มถึงเชอร์รี่ใส', inclusion: 'บางส่วนหรือใส', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'หายากและเหมาะสะสม', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'อำพันลายไม้', description: 'ลายภายในเหมือนไม้; เหมาะสะสม', inclusion: 'ลายเห็นชัด', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'ลวดลายธรรมชาติ; ทุกชิ้นไม่ซ้ำกัน', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'อำพันดำ (มีลายน้ำตาลปนเล็กน้อย)', description: 'ทึบถึงดำเข้ม มีแสงภายในบางส่วน', inclusion: 'สิ่งเจือปนบางส่วน', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'นิยมทำเครื่องราง; ดูมีพลัง', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'อำพันดำสนิท', description: 'ดำทึบเต็มที่ ขัดเงายากที่สุด', inclusion: 'ไม่มี', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'หายาก; เป็นที่นิยมในตลาดจิตวิญญาณเอเชีย', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'อำพันมิล่า (เหลืองจักรพรรดิสีเข้ม)', description: 'สีขาวนวลคล้ายขี้ผึ้ง แหล่งจำกัด', inclusion: 'ขุ่นบางส่วน', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'สัญลักษณ์เชิงจิตวิญญาณและรักษา', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'อำพันมิล่า (เหลืองจักรพรรดิสีทอง)', description: 'สีขาวนวลทึบถึงทอง Milky; หายากมาก', inclusion: 'ไม่มีสิ่งเจือปน', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'หายากที่สุด; ชิ้นใหญ่มีน้อยมาก', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const thNotesData = [
    { title: 'คุณภาพ', content: 'เราคัดเลือกอำพันดิบในสภาพดีที่สุด เพื่อลดสิ่งเจือปนและรอยแตก แต่เนื่องจากเป็นอำพันพม่าที่มาจากธรรมชาติแท้ อาจไม่สามารถบอกคุณลักษณะภายในที่ซ่อนอยู่จนกว่าจะตัดหรือขัดเงา' },
    { title: 'ส่วนลดหากซื้อจำนวนมาก', content: 'สั่งมากกว่า 5 กก./ล็อต อาจได้ส่วนลด 10–25% ขึ้นอยู่กับการผสมและความสม่ำเสมอของขนาด' },
    { title: 'การรับประกันแหล่งที่มา', content: 'อำพันพม่า 100% จากธรรมชาติ (ยางไม้สนฟอสซิลยุคครีเทเชียส)' },
    { title: 'คุณค่าทางประวัติศาสตร์', content: 'อำพันพม่าเกิดจากยางไม้สนฟอสซิลอายุ 100 ล้านปีจากต้นไม้สายพันธุ์โบราณที่สูญพันธุ์ไปแล้วกว่า 60 ล้านปี' },
    { title: 'อ้างอิงขนาด', content: '1–20g = ก้อนเล็ก, 150–500g = ขนาดฝ่ามือ, 500–2000g = ตัวอย่างระดับพิพิธภัณฑ์' },
    { title: 'ปัจจัยกำหนดราคา', content: 'ความใส, ความหายาก, น้ำหนัก, สิ่งเจือปน, ความต้องการ' },
    { title: 'ขายปลีกราคาอาจแพงกว่า', content: 'ร้านค้าปลีกมักบวกเพิ่ม 25–40%, โดยเฉพาะชิ้นตัดแต่ง/เจียระไนแล้ว' },
];


export const translations: { [key: string]: LanguageContent } = {
  en: {
    title: 'Rough Burmese Amber Price Guide',
    byline: 'by Vicky Burmese Amber & Gems',
    subtitle: 'A comprehensive wholesale price guide (USD/gram) for Burmese amber, based on color, inclusion, rarity, and size. Retail prices may be 20-40% higher.',
    introduction: `Burmese amber, also known as Burmite, is one of the world’s oldest and most captivating natural ambers—formed from fossilized pine resin over 100 million years ago. Each rough stone preserves the beauty of prehistoric forests, holding within it a sense of warmth, purity, and timeless energy.

Collectors and artisans value rough Burmese amber for its natural form, authenticity, and the potential it offers for unique creations. While rough Burmese amber holds great charm and affordability, many collectors also choose cut and polished pieces for their enhanced clarity, refined color, and lasting brilliance. Polished amber often reveals the hidden inner beauty of the stone, including ancient inclusions or rich tones unseen in rough form.

Though the price can be two to three times higher, the refined pieces are ready for display or jewelry use and tend to hold stronger resale and collectible value over time. For those seeking both natural origin and elegant presentation, polished Burmese amber offers an ideal balance of rarity, beauty, and investment potential.`,
    metaTitle: 'Burmese Amber Price Guide | Natural Amber Beads & Gems from Myanmar | Vicky Amber',
    metaDescription: 'Discover authentic Burmese amber pricing, wholesale rates, and spiritual uses. 100% natural and untreated amber direct from Myanmar.',
    metaKeywords: 'Burmese amber, Myanmar amber, amber price guide, natural amber beads, amber wholesale, fossil amber, Buddhist prayer beads',
    tabLabels: {
      overview: 'Overview',
      pricing: 'Pricing & Estimator',
      notes: 'Notes & Details',
      gallery: 'Gallery',
      blogs: 'Blogs',
    },
    fullPriceListTitle: 'Full Price List',
    priceListInfo: {
      title: 'Understanding the Price Per Gram',
      content: `Please note that the different prices shown for each weight range refer to the approximate size of each individual piece, not the total combined weight.

For example, if you are looking for large pieces weighing between 500 grams to 2,000 grams each, the price per gram will be higher compared to smaller pieces because such large sizes are very rare to find.

In contrast, if you request smaller pieces — for instance, from 5 grams to 15 grams each, with a total order of 3,000 grams in Dark Cognac color — the price will be only USD 1.2–1.7 per gram, not including up to 25% discount for orders of 5,000 grams or more under the same specification.`
    },
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
      content: 'Please note that the following types and colors of Burmese amber are extremely rare and difficult to find: Golden yellow and Orange with minimal inclusions, Red, Wooden Pattern, Black, and Mila (Milky/Bee Wax Type). We cannot guarantee full availability or large quantities upon request. However, we will do our best to source them and provide updated stock information within a few days after your order is placed.'
    },
    companyName: 'Vicky Burmese Amber & Gems Co., Ltd.',
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
    estimatorNote: 'Please note: All prices shown include import tax and delivery fees from Myanmar to Thailand. However, the final total price does not include delivery, customs inspection, or any local taxes and additional expenses that may apply in the destination country. Buyers are responsible for any import duties or charges incurred at their end.',
    estimatorRemark: {
      title: '💬 Remark',
      content: `The total price shown does not include discounts yet.\nDiscounts depend on quantity and color/type of amber:\n\n• Common colors/types: 10–25% discount\n• Rare colors/types: 5–15% discount\n\nFinal discount rates will be confirmed after reviewing your order quantity and item selection.`
    },
    pdfTitle: 'Price Estimation Summary',
    pdfDate: 'Date of Estimate',
    pdfOrderSummaryTitle: 'Order Summary by Type',
    pdfCommonTypes: 'Common Amber Types',
    pdfRareTypes: 'Rare Amber Types',
    pdfTotalWeight: 'Total Weight',
    pdfAvgPrice: 'Average Price',
    pdfSubtotal: 'Subtotal',
    pdfDiscountInfoTitle: 'Discounts & Availability Information',
    pdfEstimatedDiscount: 'Estimated Discount',
    pdfCommonType: '(Common Type)',
    pdfRareType: '(Rare Type)',
    pdfEstimatedTotalAfterDiscount: 'Estimated Total After Discount',
    pdfDiscountPolicyTitle: 'Discount Policy',
    pdfDiscountPolicyContent: 'Discounts depend on quantity and color/type of amber.\nFinal discount rates will be confirmed after reviewing your full order and item selection.',
    pdfAvailabilityNoteTitle: 'Important Note on Availability',
    pdfAvailabilityNoteContent: 'The following Burmese amber types and colors are extremely rare and difficult to find: Red, Wooden Pattern, Black, and Mila (Milky/Bee Wax Type). Large quantities of these may not be fully available. However, we will make every effort to source them and provide an updated stock report within a few days after your order is placed.',
  },
  es: {
    title: 'Guía de Precios del Ámbar Birmano en Bruto',
    byline: 'by Vicky Burmese Amber & Gems',
    subtitle: 'Una guía completa de precios al por mayor (USD/gramo) para el ámbar birmano, basada en color, inclusión, rareza y tamaño. Los precios de venta al público pueden ser un 20-40% más altos.',
    introduction: `El ámbar birmano, también conocido como Burmite, es uno de los ámbares naturales más antiguos y fascinantes del mundo, formado a partir de resina de pino fosilizada hace más de 100 millones de años. Cada piedra en bruto conserva la belleza de los bosques prehistóricos, conteniendo una sensación de calidez, pureza y energía atemporal.

Los coleccionistas y artesanos valoran el ámbar birmano en bruto por su forma natural, autenticidad y el potencial que ofrece para crear piezas únicas. Aunque el ámbar en bruto tiene un encanto especial y resulta más accesible, muchos coleccionistas también optan por piezas cortadas y pulidas por su mayor claridad, color refinado y brillo duradero. El ámbar pulido suele revelar la belleza interna oculta de la piedra, incluyendo inclusiones antiguas o tonos ricos que no se perciben en la piedra en bruto.

Aunque su precio puede ser de dos a tres veces mayor, las piezas refinadas están listas para exhibición o uso en joyería, y tienden a mantener un valor de reventa y coleccionista más fuerte con el tiempo. Para quienes buscan tanto origen natural como presentación elegante, el ámbar birmano pulido ofrece un equilibrio ideal entre rareza, belleza y potencial de inversión.`,
    metaTitle: 'Guía de Precios del Ámbar de Birmania | Ámbar Natural de Myanmar | Vicky Amber',
    metaDescription: 'Descubra los precios auténticos del ámbar birmano, tarifas al por mayor y usos espirituales. Ámbar 100% natural y sin tratar, directamente desde Myanmar.',
    metaKeywords: 'ámbar birmano, ámbar natural, precio del ámbar, ámbar de Myanmar, cuentas de oración, ámbar fósil',
    tabLabels: {
      overview: 'Resumen',
      pricing: 'Precios y Estimador',
      notes: 'Notas y Detalles',
      gallery: 'Galería',
      blogs: 'Blogs',
    },
    fullPriceListTitle: 'Lista de Precios Completa',
    priceListInfo: {
        title: 'Entendiendo el Precio por Gramo',
        content: `Tenga en cuenta que los diferentes precios mostrados para cada rango de peso se refieren al tamaño aproximado de cada pieza individual, y no al peso total combinado.

Por ejemplo, si busca piezas grandes que pesen entre 500 gramos y 2.000 gramos cada una, el precio por gramo será más alto en comparación con las piezas pequeñas, ya que estos tamaños grandes son muy raros de encontrar.

En cambio, si solicita piezas más pequeñas — por ejemplo, de 5 gramos a 15 gramos cada una, con un pedido total de 3.000 gramos en color Dark Cognac, el precio será solo de USD 1.2 a 1.7 por gramo, sin incluir hasta un 25% de descuento para pedidos de 5.000 gramos o más bajo la misma especificación.`
    },
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
      content: 'Tenga en cuenta que los siguientes tipos y colores de ámbar birmano son extremadamente raros y difíciles de conseguir: Dorado y Naranja (limpio), Rojo, Patrón de Madera, Negro y Mila (Tipo Lechoso / Cera de Abeja). No podemos garantizar la disponibilidad total ni grandes cantidades por pedido, pero haremos todo lo posible por obtenerlos y actualizar la información de existencias en unos pocos días después de realizar su pedido.'
    },
    companyName: 'Vicky Burmese Amber & Gems Co., Ltd.',
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
    estimatorNote: 'Atención: Todos los precios indicados incluyen el impuesto de importación y los gastos de envío desde Myanmar hasta Tailandia. Sin embargo, el precio total final no incluye los gastos de envío, inspección aduanera ni los impuestos locales u otros costos adicionales que puedan aplicarse en el país de destino. El comprador es responsable de cualquier arancel o cargo de importación que se genere en su país.',
    estimatorRemark: {
      title: '💬 Observación',
      content: `El precio total mostrado aún no incluye descuentos.\nLos descuentos dependen de la cantidad y el color/tipo de ámbar:\n\n• Colores/tipos comunes: 10–25% de descuento\n• Colores/tipos raros: 5–15% de descuento\n\nLas tasas de descuento finales se confirmarán después de revisar la cantidad de su pedido y la selección de artículos.`
    },
    pdfTitle: 'Resumen de Estimación de Precios',
    pdfDate: 'Fecha de Estimación',
    pdfOrderSummaryTitle: 'Resumen del Pedido por Tipo',
    pdfCommonTypes: 'Tipos de Ámbar Comunes',
    pdfRareTypes: 'Tipos de Ámbar Raros',
    pdfTotalWeight: 'Peso Total',
    pdfAvgPrice: 'Precio Promedio',
    pdfSubtotal: 'Subtotal',
    pdfDiscountInfoTitle: 'Información de Descuentos y Disponibilidad',
    pdfEstimatedDiscount: 'Descuento Estimado',
    pdfCommonType: '(Tipo Común)',
    pdfRareType: '(Tipo Raro)',
    pdfEstimatedTotalAfterDiscount: 'Total Estimado con Descuento',
    pdfDiscountPolicyTitle: 'Política de Descuentos',
    pdfDiscountPolicyContent: 'Los descuentos dependen de la cantidad y el color/tipo de ámbar.\nLas tasas de descuento finales se confirmarán después de revisar su pedido completo y la selección de artículos.',
    pdfAvailabilityNoteTitle: 'Nota Importante sobre Disponibilidad',
    pdfAvailabilityNoteContent: 'Los siguientes tipos y colores de ámbar birmano son extremadamente raros y difíciles de encontrar: Rojo, Patrón de Madera, Negro y Mila (Tipo Lechoso/Cera de Abeja). Es posible que no haya grandes cantidades disponibles. Sin embargo, haremos todo lo posible para conseguirlos y proporcionar un informe de existencias actualizado en unos días después de realizar su pedido.',
  },
  ar: {
    title: 'دليل أسعار العنبر البورمي الخام',
    byline: 'by Vicky Burmese Amber & Gems',
    subtitle: 'دليل شامل لأسعار الجملة بالدولار الأمريكي لكل غرام من العنبر البورمي، يعتمد على اللون، نوع الشوائب، الندرة، والحجم. قد تكون أسعار التجزئة أعلى بنسبة تتراوح بين 20% إلى 40%.',
    introduction: `العنبر البورمي، المعروف أيضًا باسم بورمايت، هو أحد أقدم وأجمل أنواع العنبر الطبيعي في العالم، وتكوّن من راتنج الصنوبر المتحجر قبل أكثر من 100 مليون سنة. كل حجر خام يحتفظ بجمال الغابات القديمة، ويعكس شعورًا بالدفء والنقاء والطاقة الخالدة.

يقدّر الجامعون والحرفيون العنبر البورمي الخام لشكله الطبيعي وأصالته، وللفرص التي يقدمها لصنع قطع فريدة من نوعها. ورغم أن العنبر الخام يحمل سحره الخاص ويتميز بأسعاره المعقولة، يختار العديد من الجامعين أيضًا القطع المصقولة والمقطوعة لما توفره من وضوح أكبر، وألوان أكثر تناغمًا، ولمعان دائم. غالبًا ما يكشف العنبر المصقول عن الجمال الداخلي المخفي في الحجر، بما في ذلك الشوائب القديمة أو الألوان الغنية التي لا تظهر في الحجر الخام.

وعلى الرغم من أن سعره قد يكون أعلى بمقدار مرتين إلى ثلاث مرات، فإن القطع المصقولة جاهزة للعرض أو الاستخدام في المجوهرات، وتميل للحفاظ على قيمة إعادة بيع وجمع أقوى مع مرور الوقت. لأولئك الذين يبحثون عن الأصل الطبيعي والمظهر الأنيق، يوفر العنبر البورمي المصقول توازنًا مثاليًا بين الندرة والجمال وقيمة الاستثمار.`,
    metaTitle: 'دليل أسعار الكهرمان البورمي | الكهرمان الطبيعي من ميانمار | فيكي أمبر',
    metaDescription: 'اكتشف أسعار الكهرمان البورمي الحقيقي، وأسعاره بالجملة واستخداماته الروحية. كهرمان طبيعي 100٪ غير معالج من ميانمار.',
    metaKeywords: 'الكهرمان البورمي, أسعار الكهرمان, كهرمان ميانمار, سبحة كهرمان, كهرمان طبيعي, أحجار كريمة ميانمار',
    tabLabels: {
      overview: 'نظرة عامة',
      pricing: 'الأسعار والحاسبة',
      notes: 'ملاحظات وتفاصيل',
      gallery: 'المعرض',
      blogs: 'المدونة',
    },
    fullPriceListTitle: 'قائمة الأسعار الكاملة',
    priceListInfo: {
        title: 'توضيح حول السعر للغرام الواحد',
        content: `يرجى ملاحظة أن الأسعار المختلفة المعروضة لكل نطاق وزن تشير إلى الوزن التقريبي لكل قطعة على حدة، وليس إلى الوزن الإجمالي لجميع القطع معًا.

على سبيل المثال، إذا كنت تبحث عن قطع كبيرة يتراوح وزن كل منها بين 500 غرام و2000 غرام، فسيكون سعر الغرام الواحد أعلى مقارنة بالقطع الصغيرة، لأن الأحجام الكبيرة نادرة جدًا ويصعب العثور عليها.

أما إذا طلبت قطعًا أصغر — مثل القطع التي يتراوح وزنها من 5 غرامات إلى 15 غرامًا لكل قطعة، وكان إجمالي الطلب 3000 غرام بلون دارك كونياك (Dark Cognac)، فسيكون السعر فقط من 1.2 إلى 1.7 دولار أمريكي للغرام الواحد، دون احتساب خصم يصل إلى 25% للطلبات التي تبلغ 5000 غرام أو أكثر بنفس المواصفات.`
    },
    tableHeaders: [
      { key: 'imageUrl', label: 'الصورة' },
      { key: 'typeColor', label: 'نوع / لون العنبر' },
      { key: 'description', label: 'الوصف والندرة' },
      { key: 'inclusion', label: 'نوع الشوائب' },
      { key: 'small', label: 'صغير (1–20غ)' },
      { key: 'medium', label: 'متوسط (20–150غ)' },
      { key: 'large', label: 'كبير (150–500غ)' },
      { key: 'extraLarge', label: 'كبير جدًا (500–2000غ)' },
      { key: 'notes', label: 'ملاحظات' },
    ],
    tableData: arTableData,
    notesTitle: 'ملاحظات إضافية',
    notesData: arNotesData,
    specialNote: {
      title: 'ملاحظة هامة حول التوفر',
      content: 'يرجى الملاحظة أن الأنواع والألوان التالية من العنبر البورمي نادرة جدًا وصعبة الحصول عليها: الأصفر الذهبي والبرتقالي (نقي)، الأحمر، النقشة الخشبية، الأسود، والمِيلا (نوع حليبي/شمع النحل). لا يمكننا ضمان توفر كميات كبيرة عند الطلب، ولكننا سنبذل قصارى جهدنا لتوفيرها وتحديث حالة المخزون خلال عدة أيام بعد تأكيد الطلب.'
    },
    companyName: 'شركة فيكي للعنبر والأحجار الكريمة البورمية المحدودة.',
    estimatorTitle: 'حاسبة السعر التقديري',
    estimatorHeaders: {
      item: 'نوع / لون العنبر',
      inclusion: 'نوع الشوائب',
      size: 'نطاق الحجم',
      pricePerGram: 'السعر / غرام (دولار أمريكي)',
      quantity: 'الكمية (غرام)',
      total: 'الإجمالي التقديري'
    },
    addRowButton: 'إضافة عنصر',
    resetButton: 'إعادة التعيين',
    downloadButton: 'تحميل التقدير (PDF)',
    grandTotalLabel: 'الإجمالي الكلي',
    selectTypePlaceholder: 'اختر نوع العنبر',
    selectSizePlaceholder: 'اختر الحجم',
    estimatorNote: 'ملاحظة مهمة: جميع الأسعار المعروضة تشمل ضريبة الاستيراد وتكاليف الشحن من ميانمار إلى تايلاند. لكن الإجمالي النهائي لا يشمل رسوم الشحن إلى بلد الوجهة، أو التفتيش الجمركي، أو الضرائب المحلية، أو أي نفقات إضافية قد تترتب في بلد المستلم. يتحمل المشتري جميع الرسوم أو الضرائب المفروضة في بلده.',
    estimatorRemark: {
      title: '💬 ملاحظة حول الخصومات',
      content: `السعر الإجمالي المعروض لا يشمل الخصومات بعد.\nتعتمد الخصومات على الكمية ونوع/لون العنبر:\n\n• الألوان والأنواع الشائعة: خصم من 10% إلى 25%\n• الأنواع النادرة: خصم من 5% إلى 15%\n\nسيتم تأكيد معدل الخصم النهائي بعد مراجعة الكمية الإجمالية واختيار الأنواع المطلوبة.`
    },
    pdfTitle: 'ملخص تقدير السعر',
    pdfDate: 'تاريخ التقدير',
    pdfOrderSummaryTitle: 'ملخص الطلب حسب النوع',
    pdfCommonTypes: 'أنواع العنبر الشائعة',
    pdfRareTypes: 'أنواع العنبر النادرة',
    pdfTotalWeight: 'الوزن الإجمالي',
    pdfAvgPrice: 'متوسط السعر',
    pdfSubtotal: 'المجموع الفرعي',
    pdfDiscountInfoTitle: 'معلومات الخصومات والتوافر',
    pdfEstimatedDiscount: 'الخصم التقديري',
    pdfCommonType: '(نوع شائع)',
    pdfRareType: '(نوع نادر)',
    pdfEstimatedTotalAfterDiscount: 'الإجمالي التقديري بعد الخصم',
    pdfDiscountPolicyTitle: 'سياسة الخصومات',
    pdfDiscountPolicyContent: 'تعتمد الخصومات على الكمية ونوع/لون العنبر.\nسيتم تأكيد أسعار الخصم النهائية بعد مراجعة طلبك الكامل واختيار الأصناف.',
    pdfAvailabilityNoteTitle: 'ملاحظة هامة بشأن التوافر',
    pdfAvailabilityNoteContent: 'الأنواع والألوان التالية من العنبر البورمي نادرة للغاية ويصعب العثور عليها: الأحمر، والنقش الخشبي، والأسود، والميلا (نوع حليبي/شمع العسل). قد لا تتوفر كميات كبيرة منها بالكامل. ومع ذلك، سنبذل قصارى جهدنا لتوفيرها وتقديم تقرير مخزون محدث في غضون أيام قليلة بعد تقديم طلبك.',
  },
  hi: {
    title: 'बर्मा ऐंबर (बर्मी एंबर) का मोटा भाव मार्गदर्शन',
    byline: 'by Vicky Burmese Amber & Gems',
    subtitle: 'यूएसडी/ग्राम के आधार पर बर्मी एंबर का व्यापक थोक मूल्य मार्गदर्शन — रंग, समावेशन (inclusion), दुर्लभता और आकार के अनुसार। खुदरा मूल्य सामान्यतः 20–40% अधिक होते हैं।',
    introduction: `बर्मी एंबर, जिसे बर्माइट भी कहा जाता है, दुनिया के सबसे पुराने और आकर्षक प्राकृतिक एंबर में से एक है, जो 100 मिलियन साल से अधिक पहले जीवाश्मित पाइन रेजिन से बना है। प्रत्येक कच्चा पत्थर प्राचीन जंगलों की सुंदरता को संरक्षित करता है और इसके अंदर गर्मी, शुद्धता और समयहीन ऊर्जा का एहसास होता है।

संग्रहकर्ता और शिल्पकार कच्चे बर्मी एंबर को इसकी प्राकृतिक रूपरेखा, प्रामाणिकता और अनूठी रचनाओं की संभावना के लिए महत्व देते हैं। जबकि कच्चा एंबर अपनी विशेष खूबसूरती और किफायती होने के कारण आकर्षक है, कई संग्रहकर्ता इसके बजाय कटे और पॉलिश किए गए टुकड़े भी चुनते हैं, क्योंकि इनमें स्पष्टता, परिष्कृत रंग और दीर्घकालिक चमक बढ़ जाती है। पॉलिश किए गए एंबर अक्सर पत्थर की छिपी आंतरिक सुंदरता को प्रकट करते हैं, जिसमें प्राचीन समावेशन या कच्चे रूप में दिखाई न देने वाले गहरे रंग शामिल होते हैं।

हालांकि कीमत दो से तीन गुना अधिक हो सकती है, परिष्कृत टुकड़े प्रदर्शनी या आभूषण निर्माण के लिए तैयार होते हैं और समय के साथ पुनर्विक्रय और संग्रहणीय मूल्य को बनाए रखते हैं। जो लोग प्राकृतिक मूल और सुरुचिपूर्ण प्रस्तुति दोनों चाहते हैं, उनके लिए पॉलिश किए हुए बर्मी एंबर में दुर्लभता, सुंदरता और निवेश क्षमता का आदर्श संतुलन मिलता है।`,
    metaTitle: 'बर्मी एंबर मूल्य गाइड | म्यांमार से प्राकृतिक एंबर | Vicky Amber',
    metaDescription: 'बर्मी एंबर का संपूर्ण मूल्य गाइड — 100% प्राकृतिक और असंसाधित एंबर, सीधे म्यांमार से। थोक दरें और आध्यात्मिक उपयोग जानें।',
    metaKeywords: 'बर्मी एंबर, एंबर कीमत, प्राकृतिक एंबर, म्यांमार एंबर, प्रार्थना माला, जीवाश्म एंबर',
    tabLabels: {
      overview: 'अवलोकन',
      pricing: 'मूल्य-सूची और अनुमानक',
      notes: 'टिप्पणियाँ और विवरण',
      gallery: 'गेलरी',
      blogs: 'ब्लॉग',
    },
    fullPriceListTitle: 'पूर्ण मूल्य सूची',
    priceListInfo: {
        title: 'प्रति ग्राम मूल्य को समझना',
        content: `कृपया ध्यान दें कि विभिन्न वजन रेंज के अनुसार दिखाए गए मूल्य प्रत्येक व्यक्तिगत टुकड़े के लगभग आकार को दर्शाते हैं, न कि कुल संयुक्त वजन को।

उदाहरण के लिए:
यदि आप 500 ग्राम से 2,000 ग्राम के बीच के बड़े टुकड़ों की तलाश में हैं, तो प्रति ग्राम मूल्य अधिक होगा क्योंकि इतने बड़े आकार प्राकृतिक रूप से बहुत दुर्लभ होते हैं।

इसके विपरीत, यदि आप छोटे टुकड़े (जैसे 5 ग्राम से 15 ग्राम तक) माँगते हैं — जैसे 3,000 ग्राम का ऑर्डर डार्क कॉन्यैक रंग में — तो प्रति ग्राम मूल्य केवल यूएसडी 1.2–1.7 होगा।
यदि कुल ऑर्डर 5,000 ग्राम या उससे अधिक हो तो उसी विनिर्देशन पर 25% तक की छूट लागू हो सकती है।`
    },
    tableHeaders: [
      { key: 'imageUrl', label: 'चित्र' },
      { key: 'typeColor', label: 'एंबर प्रकार / रंग' },
      { key: 'description', label: 'विवरण और दुर्लभता' },
      { key: 'inclusion', label: 'समावेशन प्रकार' },
      { key: 'small', label: 'छोटा (1–20g)' },
      { key: 'medium', label: 'मध्यम (20–150g)' },
      { key: 'large', label: 'बड़ा (150–500g)' },
      { key: 'extraLarge', label: 'बहुत बड़ा (500–2000g)' },
      { key: 'notes', label: 'टिप्पणियाँ' },
    ],
    tableData: hiTableData,
    notesTitle: 'अतिरिक्त नोट्स',
    notesData: hiNotesData,
    specialNote: {
      title: 'उपलब्धता पर महत्वपूर्ण सूचना',
      content: 'कृपया ध्यान दें कि निम्नलिखित प्रकार और रंगों का बर्मी एंबर अत्यंत दुर्लभ और कठिनाई से मिलने वाला है: गोल्डन येलो और ऑरेंज (स्वच्छ), रेड, वुडन पैटर्न, ब्लैक, और मीला (दूधिया/बी वैक्स टाइप)। हम इनकी पूर्ण उपलब्धता या बड़ी मात्रा की गारंटी नहीं दे सकते, परंतु हम पूरी कोशिश करेंगे कि आपकी ऑर्डर के बाद कुछ दिनों में नवीनतम स्टॉक जानकारी उपलब्ध कराएँ।'
    },
    companyName: 'विक्की बर्मी एंबर एंड जेम्स कंपनी लिमिटेड',
    estimatorTitle: 'मूल्य अनुमानक',
    estimatorHeaders: {
      item: 'एंबर प्रकार / रंग',
      inclusion: 'समावेशन प्रकार',
      size: 'आकार रेंज',
      pricePerGram: 'मूल्य/ग्राम (USD)',
      quantity: 'मात्रा (ग्राम)',
      total: 'अनुमानित कुल'
    },
    addRowButton: 'आइटम जोड़ें',
    resetButton: 'सब रीसेट करें',
    downloadButton: 'अनुमान डाउनलोड करें (PDF)',
    grandTotalLabel: 'कुल योग',
    selectTypePlaceholder: 'एंबर प्रकार चुनें',
    selectSizePlaceholder: 'आकार चुनें',
    estimatorNote: 'कृपया ध्यान दें: दिखाए गए सभी मूल्यों में म्यांमार से थाईलैंड तक आयात कर और डिलीवरी शुल्क शामिल हैं। हालांकि, अंतिम कुल मूल्य में गंतव्य देश में लागू होने वाले डिलीवरी, सीमा शुल्क निरीक्षण, या किसी भी स्थानीय कर और अतिरिक्त खर्च शामिल नहीं हैं। खरीदार अपने देश में लगने वाले किसी भी आयात शुल्क या शुल्क के लिए जिम्मेदार हैं।',
    estimatorRemark: {
      title: '💬 टिप्पणी',
      content: `दिखाया गया कुल मूल्य अभी छूट शामिल नहीं करता।\nछूट मात्रा और एंबर के रंग/प्रकार पर निर्भर करती है:\n\n• सामान्य रंग/प्रकार: 10–25% छूट\n• दुर्लभ रंग/प्रकार: 5–15% छूट\n\nअंतिम छूट दर ऑर्डर की मात्रा और चयन के अनुसार पुष्टि की जाएगी।`
    },
    pdfTitle: 'मूल्य अनुमान का सारांश',
    pdfDate: 'अनुमान की तारीख',
    pdfOrderSummaryTitle: 'प्रकार के अनुसार आदेश सारांश',
    pdfCommonTypes: 'सामान्य एम्बर प्रकार',
    pdfRareTypes: 'दुर्लभ एम्बर प्रकार',
    pdfTotalWeight: 'कुल वज़न',
    pdfAvgPrice: 'औसत मूल्य',
    pdfSubtotal: 'उप-योग',
    pdfDiscountInfoTitle: 'छूट और उपलब्धता की जानकारी',
    pdfEstimatedDiscount: 'अनुमानित छूट',
    pdfCommonType: '(सामान्य प्रकार)',
    pdfRareType: '(दुर्लभ प्रकार)',
    pdfEstimatedTotalAfterDiscount: 'छूट के बाद अनुमानित कुल',
    pdfDiscountPolicyTitle: 'छूट नीति',
    pdfDiscountPolicyContent: 'छूट मात्रा और एम्बर के रंग/प्रकार पर निर्भर करती है।\nआपके पूर्ण आदेश और आइटम चयन की समीक्षा के बाद अंतिम छूट दरों की पुष्टि की जाएगी।',
    pdfAvailabilityNoteTitle: 'उपलब्धता पर महत्वपूर्ण नोट',
    pdfAvailabilityNoteContent: 'निम्नलिखित बर्मी एम्बर प्रकार और रंग अत्यंत दुर्लभ हैं और इन्हें खोजना मुश्किल है: लाल, वुडन पैटर्न, ब्लैक, और मिला (मिल्की/बी वैक्स टाइप)। इनकी बड़ी मात्रा पूरी तरह से उपलब्ध नहीं हो सकती है। हालांकि, हम उन्हें स्रोत बनाने और आपके आदेश देने के कुछ दिनों के भीतर एक अद्यतन स्टॉक रिपोर्ट प्रदान करने के लिए हर संभव प्रयास करेंगे।',
  },
  th: {
    title: 'คู่มือราคาก้อนอำพันดิบพม่า',
    byline: 'by Vicky Burmese Amber & Gems',
    subtitle: 'คู่มือราคาขายส่งอำพันพม่าแบบละเอียด (USD/กรัม) แบ่งตามสี, การมีสิ่งเจือปน, ความหายาก และขนาด แต่ราคาขายปลีกอาจสูงขึ้น 20–40%',
    introduction: `อำพันพม่า หรือที่รู้จักในชื่อ Burmite เป็นหนึ่งในอำพันธรรมชาติที่เก่าแก่ที่สุดและน่าหลงใหلที่สุดในโลก เกิดจากยางสนที่กลายเป็นฟอสซิลมากกว่า 100 ล้านปี ทุกก้อนอำพันดิบล้วนเก็บรักษาเศษซากความงดงามของป่าดึกดำบรรพ์ไว้ภายใน พร้อมด้วยพลังแห่งความอบอุ่น ความบริสุทธิ์ และพลังงานเหนือกาลเวลา

นักสะสมและช่างฝีมือให้คุณค่ากับอำพันก้อนดิบเพราะความที่มีรูปทรงหลากหลาย มีความเป็นธรรมชาติอย่างแท้จริงที่ไร้การปรุงแต่ง และศักยภาพในการสร้างสรรค์ชิ้นงานที่ไม่เหมือนใคร แม้อำพันดิบจะมีเสน่ห์เฉพาะตัวและราคาที่เข้าถึงได้ แต่นักสะสมหลายท่านก็เลือกอำพันที่ผ่านการเจียระไนและขัดเงาเพื่อความใสที่ชัดเจนยิ่งขึ้น เผยให้เห็นเฉดสีที่สวยงามสมบูรณ์ และความเงางามที่คงทนยาวนาน

อำพันขัดเงามักเผยให้เห็นความงามที่ซ่อนอยู่ภายใน เช่น ซากสิ่งมีชีวิตโบราณที่ถูกห่อหุ้มไว้ หรือเฉดสีที่เข้มข้นสดใส ซึ่งบางครั้งไม่สามารถมองเห็นได้ชัดเจนในสภาพก้อนดิบ แม้ว่าราคาจะสูงกว่า 2-3 เท่า แต่ชิ้นงานที่ขัดเงาแล้วก็พร้อมใช้งานทันที ไม่ว่าจะเป็นการจัดแสดงหรือประดับเป็นเครื่องประดับ และมักมีมูลค่าในการซื้อขายต่อและคุณค่าสะสมที่แข็งแกร่งกว่าเมื่อเวลาผ่านไป

สำหรับผู้ที่ต้องการทั้งความเป็นธรรมชาติและการนำเสนอที่สวยงามประณีต อำพันพม่าแบบขัดเงาจึงเป็นตัวเลือกที่ให้ความสมดุลอันลงตัวระหว่างความหายาก ความงดงาม และศักยภาพในการลงทุน`,
    metaTitle: 'คู่มือราคาอำพันพม่า | อำพันแท้จากพม่า | Vicky Amber',
    metaDescription: 'ค้นพบราคาขายส่งอำพันพม่าแท้, อัตราล่าสุดปี 2025, และคุณค่าทางจิตวิญญาณ. อำพันธรรมชาติ 100% ไม่ผ่านการปรับปรุงคุณภาพ ส่งตรงจากเหมืองในพม่า.',
    metaKeywords: 'อำพันพม่า, ราคาอำพัน, Burmite, อำพันดิบ, อัญมณีพม่า, ราคาอัญมณี, อัญมณีขายส่ง, วิกกี้อำพัน',
    tabLabels: {
        overview: 'ภาพรวม',
        pricing: 'การกำหนดราคาและตัวช่วยคำนวณ',
        notes: 'หมายเหตุ & รายละเอียด',
        gallery: 'แกลเลอรี่',
        blogs: 'บทความ',
    },
    fullPriceListTitle: 'รายการราคาฉบับเต็ม',
    priceListInfo: {
        title: 'การทำความเข้าใจราคา/กรัม',
        content: `
โปรดทราบว่าราคาที่แสดงในแต่ละช่วงน้ำหนักหมายถึง ขนาดโดยประมาณของแต่ละก้อน, ไม่ใช่น้ำหนักรวมทั้งหมด

* ตัวอย่าง: หากคุณต้องการก้อนใหญ่ น้ำหนัก 500–2,000 กรัมต่อก้อน ราคาต่อกรัมจะสูงกว่าก้อนเล็ก เนื่องจากหาก้อนใหญ่เช่นนี้ค่อนข้างยาก

* ในทางกลับกัน หากสั่งก้อนเล็ก เช่น 5–15 กรัมต่อก้อน รวมทั้งหมด 3,000 กรัม สี Dark Cognac ราคาจะอยู่ที่เพียง 1.2–1.7 USD/กรัม และยังไม่รวมส่วนลดสูงสุด 25% สำหรับการสั่งรวม 5,000 กรัมขึ้นไป`,
    },
    tableHeaders: [
        { key: 'imageUrl', label: 'รูป' },
        { key: 'typeColor', label: 'ประเภท / สีอำพัน' },
        { key: 'description', label: 'รายละเอียด & ความหายาก' },
        { key: 'inclusion', label: 'ประเภทสิ่งเจือปน' },
        { key: 'small', label: 'เล็ก (1–20g)' },
        { key: 'medium', label: 'กลาง (20–150g)' },
        { key: 'large', label: 'ใหญ่ (150–500g)' },
        { key: 'extraLarge', label: 'ใหญ่พิเศษ (500–2000g)' },
        { key: 'notes', label: 'หมายเหตุ' },
    ],
    tableData: thTableData,
    notesTitle: 'หมายเหตุเพิ่มเติม',
    notesData: thNotesData,
    specialNote: {
        title: 'หมายเหตุเรื่องความพร้อมของสินค้า',
        content: 'อำพันบางสี/ประเภทหายากมาก เช่น สีเหลืองทองและสีส้ม (สะอาด), สีแดง, ลายไม้, ดำ, และ Mila (Milky/Bee Wax Type) ไม่สามารถรับประกันการมีสินค้าจำนวนมากหรือขนาดใหญ่ แต่เราจะพยายามจัดหาและแจ้งอัพเดตรายการภายในไม่กี่วันหลังสั่งซื้อ',
    },
    companyName: 'VICKY BURMESE AMBER & GEMS CO., LTD.',
    estimatorTitle: 'ตัวช่วยคำนวณราคา',
    estimatorHeaders: {
        item: 'ประเภท / สีอำพัน',
        inclusion: 'ประเภทสิ่งเจือปน',
        size: 'ขนาด',
        pricePerGram: 'ราคา/กรัม (USD)',
        quantity: 'ปริมาณ (กรัม)',
        total: 'รวมโดยประมาณ',
    },
    addRowButton: 'เพิ่มรายการ',
    resetButton: 'รีเซ็ตทั้งหมด',
    downloadButton: 'ดาวน์โหลดใบประเมินราคา (PDF)',
    grandTotalLabel: 'ยอดรวมทั้งหมด',
    selectTypePlaceholder: 'เลือกประเภท/สีอำพัน',
    selectSizePlaceholder: 'เลือกขนาด',
    estimatorNote: 'หมายเหตุ: ราคาที่แสดงรวมค่าภาษีนำเข้าและค่าจัดส่งจากพม่ามายังไทย แต่ยังไม่รวมค่าขนส่งปลายทาง, ตรวจสอบศุลกากร, หรือภาษี/ค่าใช้จ่ายที่อาจเกิดขึ้นยังปลายทางประเทศผู้ซื้อ ผู้ซื้อเป็นผู้รับผิดชอบค่าธรรมเนียมนำเข้าใดๆที่อาจเกิดขึ้น',
    estimatorRemark: {
        title: '💬 หมายเหตุเพิ่มเติม',
        content: `ราคายังไม่รวมส่วนลด\nส่วนลดขึ้นอยู่กับปริมาณและสี/ประเภทอำพัน:\n\n• สี/ประเภททั่วไป: 10–25%\n• สี/ประเภทหายาก: 5–15%\n\nอัตราส่วนลดสุดท้ายจะยืนยันหลังตรวจสอบรายการและปริมาณ`,
    },
    pdfTitle: 'ใบสรุปประมาณราคา',
    pdfDate: 'วันที่ประมาณราคา',
    pdfOrderSummaryTitle: 'สรุปรายการสั่งซื้อตามประเภท',
    pdfCommonTypes: 'อำพันประเภททั่วไป',
    pdfRareTypes: 'อำพันประเภทหายาก',
    pdfTotalWeight: 'น้ำหนักรวม',
    pdfAvgPrice: 'ราคาเฉลี่ย',
    pdfSubtotal: 'ยอดรวม',
    pdfDiscountInfoTitle: 'ข้อมูลส่วนลดและความพร้อมของสินค้า',
    pdfEstimatedDiscount: 'ส่วนลดโดยประมาณ',
    pdfCommonType: '(ประเภททั่วไป)',
    pdfRareType: '(ประเภทหายาก)',
    pdfEstimatedTotalAfterDiscount: 'ยอดรวมหลังหักส่วนลดโดยประมาณ',
    pdfDiscountPolicyTitle: 'นโยบายส่วนลด',
    pdfDiscountPolicyContent: 'ส่วนลดขึ้นอยู่กับปริมาณและสี/ประเภทของอำพัน\nอัตราส่วนลดสุดท้ายจะได้รับการยืนยันหลังจากตรวจสอบรายการสั่งซื้อทั้งหมดของคุณ',
    pdfAvailabilityNoteTitle: 'หมายเหตุสำคัญเกี่ยวกับความพร้อมของสินค้า',
    pdfAvailabilityNoteContent: 'อำพันพม่าประเภทและสีต่อไปนี้หายากมาก: สีแดง, ลายไม้, สีดำ, และ Mila (Milky/Bee Wax Type) อาจไม่มีปริมาณมากพอตามที่ต้องการ อย่างไรก็ตาม เราจะพยายามอย่างเต็มที่ในการจัดหาและจะแจ้งข้อมูลสต็อกล่าสุดภายในสองสามวันหลังจากทำการสั่งซื้อ',
  }
};