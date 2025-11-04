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

const zhTableData = [
    { typeColor: '棕红珀 (Dark Cognac)', description: '常见，供应量大；深棕红色调，抛光潜力好。', inclusion: '含杂', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: '适合批量生产或新手收藏。', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: '浅金珀 (含杂)', description: '温暖的琥珀色调；净度中等；比棕红珀稍稀有。', inclusion: '含杂', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: '性价比均衡。', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: '浅金珀 (净水)', description: '透明的金黄色，包裹体极少或不可见。', inclusion: '接近无暇/净水', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: '高透明度，适合珠宝级抛光。', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: '黄金珀 (含杂)', description: '明亮的金色调，有一定包裹体；大尺寸稀有。', inclusion: '含杂', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: '丰富的金色外观，受高端饰品欢迎。', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: '黄金珀 (净水)', description: '纯净的金黄色；非常清澈（“净水”）；大块稀有。', inclusion: '净水/无包裹体', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: '优异的光线反射，稀有度增加价值。', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: '橙珀 (含杂)', description: '橙色调；中等稀有；温暖而充满活力的颜色。', inclusion: '含杂', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: '常用作佛珠和吊坠。', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: '橙珀 (净水)', description: '浓郁的橙色；高净度；优质材料。', inclusion: '接近无暇/净水', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: '非常适合雕刻或高端珠宝。', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: '血珀 (鸽血红/樱桃红)', description: '稀有色系；深红色调至半透明樱桃红。', inclusion: '含杂或净水', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: '稀有，收藏家级别。', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: '根珀 (木纹)', description: '独特的内部纹理，似木纹或树根；极具收藏价值。', inclusion: '可见纹理', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: '自然的艺术外观；每件都独一无二。', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: '翳珀 (可见棕色)', description: '不透明至深棕黑色；在强光下内部有一定光泽（显棕红色）。', inclusion: '含杂', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: '常用作护身符；外观能量感强。', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: '纯黑珀 (Solid Dark)', description: '完全不透明，纯黑色；最难抛光干净。', inclusion: '无可见', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: '稀有的天然黑色；在亚洲精神市场中备受追捧。', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: '蜜蜡 (部分蜡质)', description: '乳白色或蜡状色调（“蜜”），奶油质地；来源非常有限。', inclusion: '部分蜡质/浑浊', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: '具有高度的精神和疗愈象征意义。', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: '纯蜜蜡 / 白蜜蜡', description: '不透明的乳白色（瓷白）至金黄色蜜蜡；极其稀有。', inclusion: '纯净/无杂', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: '顶级收藏品；大件（大克重）极少。', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const zhNotesData = [
    { title: '质量说明', content: '我们精心挑选和收集状态最好的缅甸琥珀原石。我们的目标是确保每件原石的包裹体最少且无明显裂痕。但请注意，由于它们是天然原石，某些内部特征或隐藏的杂质（“内含物”）在切割或抛光前可能无法完全显现。每块石头都是独一无二的，承载着其自然的特质和美丽。' },
    { title: '批量折扣', content: '购买单批（Lot）超过5公斤的买家，根据所选料子的混合情况和尺寸均匀度，可享受10–25%的折扣。' },
    { title: '产地保证', content: '所有材料均为100%天然缅甸琥珀（白垩纪时期的化石树脂）。' },
    { title: '历史意义与价值', content: '缅甸琥珀是距今一亿年的松树树脂化石，其母体树种（源于一种已灭绝的古代松树）在6000多万年前就已灭绝。每一块琥珀都是来自白垩纪的天然“时间胶囊”。与其他宝石一样，缅甸琥珀的价值随尺寸（克重）增加而增加——尺寸越大的料子在自然界中越稀有，因此按重量比较时，其价值要高得多。' },
    { title: '尺寸参考', content: '1–20克 = 小籽料；150–500克 = 可握于掌心（“手把件”尺寸）；500–2000克 = 博物馆级标本。' },
    { title: '价格因素', content: '价格受净度、颜色稀有度、重量、包裹体和市场需求的影响。' },
    { title: '零售溢价', content: '零售商通常会加价25–40%，特别是对于切割或抛光后的成品。' },
];

const nlTableData = [
    { typeColor: 'Donker Cognac', description: 'Algemeen, hoge beschikbaarheid; diepbruine tint met goed polijstpotentieel.', inclusion: 'Deels insluitsels', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'Ideaal voor massaproductie of beginnende verzamelaars.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'Lichte Honing (Deels insluitsels)', description: 'Warme ambertint; gemiddelde helderheid; iets zeldzamer dan donker cognac.', inclusion: 'Deels insluitsels', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'Goede balans tussen kleur en prijs.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Lichte Honing (Helder)', description: 'Transparant goudgeel met minimale of onzichtbare insluitsels.', inclusion: 'Vrijwel vrij van insluitsels', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'Hoge transparantie, geschikt voor polijsten tot sieraadkwaliteit.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Goudgeel (Deels insluitsels)', description: 'Heldere goudtint met enkele insluitsels; zeldzaam in grote formaten.', inclusion: 'Deels insluitsels', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'Rijke gouden uitstraling, populair voor hoogwaardige ornamenten.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Goudgeel (Helder)', description: 'Puur goudgeel; zeer helder; zeldzaam in grote stukken.', inclusion: 'Geen insluitsels', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'Uitstekende lichtreflectie en zeldzaamheid voegen waarde toe.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Oranje Amber (Deels insluitsels)', description: 'Oranje tint; gemiddeld zeldzaam; warme en energieke kleur.', inclusion: 'Deels insluitsels', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'Geliefd voor gebedskralen en hangers.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Oranje Amber (Helder)', description: 'Sterke oranje tint; hoge helderheid; premium kwaliteit materiaal.', inclusion: 'Vrijwel vrij van insluitsels', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'Uitstekend voor houtsnijwerk of hoogwaardige sieraden.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Duivenbloedrood tot Kersrood', description: 'Zeldzaam kleurbereik; dieprode tinten tot doorschijnend kersrood.', inclusion: 'Deels of helder', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'Zeldzaam en van verzamelaarskwaliteit.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'Amber met Houtpatroon', description: 'Uniek intern patroon dat lijkt op houtnerf; zeer verzamelbaar.', inclusion: 'Zichtbaar patroon', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'Natuurlijke artistieke uitstraling; elk stuk is uniek.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'Zwarte Amber (Zichtbaar Bruinachtig)', description: 'Opaak tot diep bruinzwart; enige interne gloed.', inclusion: 'Deels insluitsels', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'Populair voor talismannen; energierijke uitstraling.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Zwarte Amber (Effen Donker)', description: 'Volledig opaak, effen zwart; het moeilijkst om schoon te polijsten.', inclusion: 'Geen zichtbaar', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'Zeldzaam natuurlijk zwart; gewild in Aziatische spirituele markten.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Mila Amber (Bijenwas-achtig, Deels)', description: 'Melkachtige of wasachtige tint, romige textuur; zeer beperkte bron.', inclusion: 'Deels troebel', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'Hoge spirituele en helende symboliek.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'Mila Amber (Puur Melkachtig / Bijenwas)', description: 'Opaak roomwit tot goud-melkachtige tint; extreem zeldzaam.', inclusion: 'Geen insluitsels', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'Topkwaliteit verzamelobject; zeer weinig grote stukken gevonden.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const nlNotesData = [
    { title: 'Opmerking over Kwaliteit', content: 'We selecteren en verzamelen zorgvuldig ruwe Birmese amber in de best mogelijke staat. Ons doel is om ervoor te zorgen dat elk stuk minimale insluitsels en geen zichtbare barsten heeft. Aangezien dit echter natuurlijke ruwe stenen zijn, zijn bepaalde interne kenmerken of verborgen insluitsels mogelijk niet volledig zichtbaar totdat het stuk wordt geslepen of gepolijst. Elke steen blijft uniek en draagt zijn natuurlijke karakter en schoonheid.' },
    { title: 'Bulkkorting', content: 'Kopers die meer dan 5 kg per partij (lot) kopen, kunnen 10–25% korting ontvangen, afhankelijk van de mix en de uniformiteit van het formaat.' },
    { title: 'Oorsprongsgarantie', content: 'Alle materialen zijn 100% natuurlijke Birmese amber (fossiele hars uit het Krijttijdperk).' },
    { title: 'Historische Betekenis & Waarde', content: 'Birmese amber is 100 miljoen jaar oude gefossiliseerde dennenhars, afkomstig van een oude boomsoort die al meer dan 60 miljoen jaar is uitgestorven. Elk stuk is een natuurlijke tijdcapsule uit het Krijttijdperk. Net als bij andere edelstenen, neemt de waarde van Birmese amber toe met de grootte — grotere stukken zijn veel zeldzamer in de natuur, waardoor ze aanzienlijk waardevoller zijn in vergelijking per gewicht.' },
    { title: 'Formaatindicatie', content: '1–20g = kleine kiezelstukjes; 150–500g = handpalmformaat; 500–2000g = exemplaren van museumkwaliteit.' },
    { title: 'Prijsfactoren', content: 'Prijzen worden beïnvloed door helderheid, zeldzaamheid van kleur, gewicht, insluitsels en vraag.' },
    { title: 'Retail Multiplicators', content: 'Detailhandelaren (winkeliers) verhogen de prijs vaak met 25–40%, vooral voor geslepen of gepolijste stukken.' },
];

const jaTableData = [
    { typeColor: 'ダークコニャック', description: '一般的、供給量多。深みのある茶色で、研磨のポテンシャルが高い。', inclusion: '一部内包物あり', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: '大量生産や初心者のコレクターに最適。', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'ライトハニー (一部内包物あり)', description: '温かみのある琥珀色。中程度の透明度。ダークコニャックよりやや希少。', inclusion: '一部内包物あり', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: '色と価格のバランスが良い。', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'ライトハニー (クリーン)', description: '透明なゴールデンイエローで、内包物は最小限または目に見えない。', inclusion: 'ほぼ内包物なし', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: '宝飾品グレードの研磨に適した高い透明度。', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'ゴールドイエロー (一部内包物あり)', description: '鮮やかな金色で、一部内包物あり。大きいサイズは希少。', inclusion: '一部内包物あり', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: '豊かな金色の外観で、高級装飾品として人気。', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'ゴールドイエロー (クリーン)', description: '純粋なゴールドイエロー。非常に透明度が高い。大きいものは希少。', inclusion: '内包物なし', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: '優れた光の反射と希少性が価値を高めます。', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'オレンジアンバー (一部内包物あり)', description: 'オレンジ色。中程度の希少性。温かくエネルギッシュな色。', inclusion: '一部内包物あり', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: '念珠やペンダントに好まれます。', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'オレンジアンバー (クリーン)', description: '強いオレンジ色。高い透明度。プレミアムグレードの素材。', inclusion: 'ほぼ内包物なし', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: '彫刻やハイエンドジュエリーに最適。', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'ピジョンブラッドレッド～チェリーレッド', description: '希少なカラーレンジ。深みのある赤色から半透明のチェリーレッドまで。', inclusion: '一部またはクリーン', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: '希少なコレクターズグレード。', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: '木目調アンバー', description: '木目に似たユニークな内部模様。高い収集価値。', inclusion: '模様あり', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: '自然な芸術的外観。一点もの。', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'ブラックアンバー (茶色みあり)', description: '不透明～深みのある茶黒色。内部に若干の輝きあり。', inclusion: '一部内包物あり', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'お守りとして人気。エネルギー豊かな外観。', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'ブラックアンバー (ソリッドダーク)', description: '完全に不透明な黒。きれいに磨くのが最も困難。', inclusion: '不透明', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: '希少な天然の黒。アジアのスピリチュアル市場で人気。', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'ミラアンバー (蜜蝋タイプ・一部)', description: 'ミルキーまたはワックス状（蜜蝋）の色調。クリーミーな質感。供給源が非常に限定的。', inclusion: '一部曇りあり', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: '非常にスピリチュアルで癒しの象徴。', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'ミラアンバー (純白蜜蝋タイプ)', description: '不透明なクリーミーホワイトからゴールデンミルキー。極めて希少。', inclusion: '内包物なし', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'トップグレードの収集品。大きなものはごくわずか。', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const jaNotesData = [
    { title: '品質について', content: '私たちは、可能な限り最良の状態のビルマ産琥珀原石を慎重に選別・収集しています。各ピースの内包物が最小限であり、目に見えるひび割れがないことを確認することを目標としています。ただし、これらは天然の原石であるため、カットや研磨を行うまで、特定の内部特徴や隠れた内包物が完全には見えない場合があることをご了承ください。すべての石はユニークであり、その自然な個性と美しさを持っています。' },
    { title: '大量購入割引', content: '1ロットあたり5kg以上ご購入のバイヤー様は、内容の組み合わせやサイズの均一性に応じて、10～25%の割引を受けられる場合があります。' },
    { title: '原産地保証', content: 'すべての素材は100%天然のビルマ産琥珀（白亜紀の化石樹脂）です。' },
    { title: '歴史的意義と価値', content: 'ビルマ産琥珀は、6000万年以上前に絶滅した古代の樹種から生まれた、1億年前の松脂の化石です。各ピースは、白亜紀からの天然のタイムカプセルです。他の宝石と同様に、ビルマ産琥珀の価値はサイズ（重量）とともに増加します — 自然界ではより大きなピースほど稀であり、重量で比較した場合、その価値は著しく高くなります。' },
    { title: 'サイズ参考', content: '1–20g = 小さな小石サイズ。 150–500g = 手のひらサイズ。 500–2000g = 博物館級の標本。' },
    { title: '価格要因', content: '価格は、透明度、色の希少性、重量、内包物、および需要によって左右されます。' },
    { title: '小売マージン', content: '小売業者は、特にカットまたは研磨された作品（研磨品）に対して、25～40%の価格を上乗せして販売することが一般的です。' },
];

const frTableData = [
    { typeColor: 'Cognac Foncé', description: 'Courant, haute disponibilité ; teinte brunâtre profonde avec un bon potentiel de polissage.', inclusion: 'Inclusions partielles', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'Idéal pour la production de masse ou les collectionneurs débutants.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'Miel Clair (Inclusions Partielles)', description: 'Ton ambré chaud ; clarté modérée ; légèrement plus rare que le cognac foncé.', inclusion: 'Inclusions partielles', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'Bon équilibre entre couleur et prix.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Miel Clair (Pur)', description: 'Jaune doré transparent avec des inclusions minimes ou invisibles.', inclusion: 'Presque sans inclusions', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'Haute transparence adaptée au polissage de qualité joaillerie.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Jaune Or (Inclusions Partielles)', description: 'Ton doré brillant avec quelques inclusions ; rare dans les grandes tailles.', inclusion: 'Inclusions partielles', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'Aspect doré riche, populaire pour les ornements haut de gamme.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Jaune Or (Pur)', description: 'Jaune or pur ; très clair ; rare en grosses pièces.', inclusion: 'Sans inclusions', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'Excellente réflexion de la lumière et rareté ajoutent de la valeur.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Ambre Orange (Inclusions Partielles)', description: 'Ton orange ; modérément rare ; couleur chaude et énergique.', inclusion: 'Inclusions partielles', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'Préféré pour les perles de prière et les pendentifs.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Ambre Orange (Pur)', description: 'Teinte orange forte ; haute clarté ; matériau de première qualité.', inclusion: 'Presque sans inclusions', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'Excellent pour les sculptures ou la joaillerie haut de gamme.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Rouge Sang de Pigeon à Rouge Cerise', description: 'Gamme de couleurs rare ; tons rouges profonds à rouge cerise translucide.', inclusion: 'Partiel ou pur', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'Rare et de qualité collectionneur.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'Ambre à Motif de Bois', description: 'Motif interne unique ressemblant à du grain de bois ; très collectionnable.', inclusion: 'Motif visible', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'Apparence artistique naturelle ; chaque pièce est unique.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'Ambre Noir (Reflets Brunâtres)', description: 'Opaque à noir brunâtre profond ; légère lueur interne.', inclusion: 'Inclusions partielles', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'Populaire pour les talismans ; aspect riche en énergie.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Ambre Noir (Uni Opaque)', description: 'Entièrement opaque, noir uni ; le plus difficile à polir proprement.', inclusion: 'Aucune visible', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'Noir naturel rare ; recherché sur les marchés spirituels asiatiques.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Ambre Mila (Type Cire d\'Abeille, Partiel)', description: 'Ton laiteux ou cireux, texture crémeuse ; source très limitée.', inclusion: 'Partiellement trouble', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'Haute symbolique spirituelle et de guérison.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'Ambre Mila (Laiteux Pur / Type Cire)', description: 'Opaque, blanc crème à ton laiteux doré ; extrêmement rare.', inclusion: 'Sans inclusions', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'Pièce de collection de premier choix ; très peu de grosses pièces trouvées.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const frNotesData = [
    { title: 'Note sur la Qualité', content: 'Nous sélectionnons et collectons méticuleusement l\'ambre brut de Birmanie dans le meilleur état possible. Notre objectif est de garantir que chaque pièce ait un minimum d\'inclusions et aucune fissure visible. Cependant, s\'agissant de pierres brutes naturelles, certaines caractéristiques internes ou inclusions cachées peuvent ne pas être entièrement visibles avant que la pièce ne soit taillée ou polie. Chaque pierre reste unique, portant son caractère naturel et sa beauté.' },
    { title: 'Remise sur Volume', content: 'Les acheteurs achetant plus de 5 kg par lot peuvent bénéficier d\'une remise de 10 à 25 % en fonction du mélange et de l\'uniformité de la taille.' },
    { title: 'Garantie d\'Origine', content: 'Tous les matériaux sont 100% ambre naturel de Birmanie (résine fossile de la période du Crétacé).' },
    { title: 'Signification Historique & Valeur', content: 'L\'ambre de Birmanie est une résine de pin fossilisée vieille de 100 millions d\'années, provenant d\'une ancienne espèce d\'arbre disparue depuis plus de 60 millions d\'années. Chaque pièce est une capsule temporelle naturelle de la période du Crétacé. Comme d\'autres pierres précieuses, la valeur de l\'ambre de Birmanie augmente avec la taille — les pièces plus grandes sont beaucoup plus rares dans la nature, ce qui les rend nettement plus précieuses en comparaison au poids.' },
    { title: 'Référence de Taille', content: '1–20g = pièces de la taille d\'un petit galet ; 150–500g = tient dans la paume de la main ; 500–2000g = spécimens de qualité musée.' },
    { title: 'Facteurs de Prix', content: 'Les prix sont influencés par la clarté, la rareté de la couleur, le poids, les inclusions et la demande.' },
    { title: 'Multiplicateurs de Détail', content: 'Les vendeurs au détail appliquent souvent une majoration de 25 à 40 %, en particulier pour les pièces taillées ou polies.' },
];

const viTableData = [
    { typeColor: 'Nâu Cognac Đậm', description: 'Phổ biến, số lượng nhiều; màu nâu sẫm, tiềm năng đánh bóng tốt.', inclusion: 'Có bao thể một phần', small: '1.2–1.7', medium: '1.4–2.3', large: '2.9–3.5', extraLarge: '3.5–4.0', notes: 'Lý tưởng để sản xuất hàng loạt hoặc cho người mới sưu tầm.', imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep_cognac_amber.webp' },
    { typeColor: 'Vàng Mật Ong Nhạt (Có bao thể)', description: 'Tông màu hổ phách ấm; độ trong vừa phải; hiếm hơn Nâu Cognac một chút.', inclusion: 'Có bao thể một phần', small: '1.7–2.3', medium: '2.3–3.2', large: '3.5–4.4', extraLarge: '4.4–5.2', notes: 'Cân bằng tốt giữa màu sắc và giá cả.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Vàng Mật Ong Nhạt (Hàng trong)', description: 'Màu vàng kim trong suốt, bao thể rất ít hoặc không thể nhìn thấy.', inclusion: 'Gần như không có bao thể', small: '2.3–3.5', medium: '3.2–4.6', large: '4.6–6.3', extraLarge: '5.8–6.9', notes: 'Độ trong cao, thích hợp để đánh bóng cấp độ trang sức.', imageUrl: 'https://i.postimg.cc/MZ1fB25b/light_cognac_amber.webp' },
    { typeColor: 'Vàng Kim (Có bao thể)', description: 'Tông vàng sáng, có lẫn bao thể; hiếm ở kích thước lớn.', inclusion: 'Có bao thể một phần', small: '2.9–4.0', medium: '3.5–5.2', large: '5.2–6.9', extraLarge: '6.9–8.6', notes: 'Vẻ ngoài vàng rực rỡ, phổ biến cho các đồ trang trí cao cấp.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Vàng Kim (Hàng trong)', description: 'Màu vàng kim tinh khiết; rất trong; hàng to rất hiếm.', inclusion: 'Không có bao thể', small: '3.5–5.2', medium: '5.2–7.5', large: '7.5–9.2', extraLarge: '9.2–10.4', notes: 'Phản xạ ánh sáng tuyệt vời và độ hiếm làm tăng giá trị.', imageUrl: 'https://i.postimg.cc/t44s81j2/golden_yellow.webp' },
    { typeColor: 'Hổ Phách Cam (Có bao thể)', description: 'Tông màu cam; tương đối hiếm; màu sắc ấm áp và tràn đầy năng lượng.', inclusion: 'Có bao thể một phần', small: '3.5–4.6', medium: '4.6–6.3', large: '6.3–8.1', extraLarge: '8.1–9.2', notes: 'Ưa chuộng để làm chuỗi hạt cầu nguyện và mặt dây chuyền.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Hổ Phách Cam (Hàng trong)', description: 'Sắc cam mạnh; độ trong cao; vật liệu cao cấp.', inclusion: 'Gần như không có bao thể', small: '4.6–6.3', medium: '6.3–8.6', large: '8.6–10.4', extraLarge: '10.4–12.1', notes: 'Tuyệt vời để tạc tượng hoặc làm trang sức cao cấp.', imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange_amber.webp' },
    { typeColor: 'Đỏ Huyết Bồ Câu đến Đỏ Anh Đào', description: 'Dải màu hiếm; tông màu đỏ đậm đến đỏ anh đào trong mờ.', inclusion: 'Có bao thể hoặc hàng trong', small: '6.9–9.2', medium: '9.2–13.8', large: '13.8–18.4', extraLarge: '18.4–21.9', notes: 'Hàng hiếm và đạt cấp độ sưu tầm.', imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp' },
    { typeColor: 'Hổ Phách Vân Gỗ (Rễ Cây)', description: 'Hoa văn bên trong độc đáo giống như vân gỗ; có giá trị sưu tầm cao.', inclusion: 'Nhìn rõ hoa văn', small: '8.1–10.4', medium: '10.4–13.2', large: '13.2–16.1', extraLarge: '16.1–19.6', notes: 'Vẻ đẹp nghệ thuật tự nhiên; mỗi viên là độc nhất.', imageUrl: 'https://i.postimg.cc/hvRJYpDd/root_amber.webp' },
    { typeColor: 'Hổ Phách Đen (Ánh Nâu)', description: 'Đục đến đen nâu sẫm; có chút ánh sáng bên trong.', inclusion: 'Có bao thể một phần', small: '4.6–5.8', medium: '5.8–7.5', large: '7.5–9.2', extraLarge: '9.2–10.9', notes: 'Phổ biến làm bùa hộ mệnh; vẻ ngoài giàu năng lượng.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Hổ Phách Đen (Đen Đặc)', description: 'Đen đặc, hoàn toàn không xuyên sáng; khó đánh bóng sạch sẽ nhất.', inclusion: 'Không thấy bao thể', small: '5.8–7.5', medium: '7.5–9.8', large: '9.8–11.5', extraLarge: '11.5–13.8', notes: 'Màu đen tự nhiên hiếm có; được săn lùng ở thị trường tâm linh châu Á.', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black_onyx.webp' },
    { typeColor: 'Hổ Phách Sáp Ong (Mila, Đục/Mây)', description: 'Tông màu sữa hoặc sáp, kết cấu kem; nguồn hàng rất hạn chế.', inclusion: 'Có mây/đục một phần', small: '6.9–9.2', medium: '9.2–11.5', large: '11.5–13.8', extraLarge: '13.8–16.1', notes: 'Mang ý nghĩa tâm linh và chữa lành cao.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
    { typeColor: 'Hổ Phách Sáp Ong (Mila, Sáp đặc/Trắng Sữa)', description: 'Màu trắng kem đục đến vàng sữa; cực kỳ hiếm.', inclusion: 'Không có bao thể (Sáp đặc)', small: '9.2–11.5', medium: '11.5–16.1', large: '16.1–19.6', extraLarge: '19.6–23.0', notes: 'Hàng sưu tầm cao cấp; rất ít viên lớn được tìm thấy.', imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp' },
];

const viNotesData = [
    { title: 'Lưu ý về Chất lượng', content: 'Chúng tôi lựa chọn và thu thập cẩn thận hổ phách thô Miến Điện ở điều kiện tốt nhất có thể. Mục tiêu của chúng tôi là đảm bảo mỗi viên có ít bao thể nhất và không có vết nứt (vết rạn) có thể nhìn thấy. Tuy nhiên, xin lưu ý rằng vì đây là đá thô tự nhiên, một số đặc điểm bên trong hoặc các bao thể ẩn có thể không nhìn thấy rõ hoàn toàn cho đến khi viên đá được cắt hoặc đánh bóng. Mỗi viên đá đều là độc nhất, mang đặc tính và vẻ đẹp tự nhiên của riêng nó.' },
    { title: 'Chiết khấu Mua Sỉ', content: 'Người mua mua trên 5 kg mỗi lô có thể nhận được chiết khấu 10–25% tùy thuộc vào sự đa dạng và đồng đều về kích thước của lô hàng.' },
    { title: 'Đảm bảo Nguồn gốc', content: 'Tất cả vật liệu đều là 100% hổ phách tự nhiên của Miến Điện (nhựa hóa thạch từ Kỷ Phấn trắng).' },
    { title: 'Ý nghĩa Lịch sử & Giá trị', content: 'Hổ phách Miến Điện là nhựa thông hóa thạch 100 triệu năm tuổi từ một loài cây cổ thụ đã tuyệt chủng hơn 60 triệu năm. Mỗi mảnh là một "cỗ máy thời gian" tự nhiên từ Kỷ Phấn trắng. Giống như các loại đá quý khác, giá trị của hổ phách Miến Điện tăng theo kích thước — những viên lớn hơn hiếm hơn nhiều trong tự nhiên, khiến chúng có giá trị cao hơn đáng kể khi so sánh theo trọng lượng.' },
    { title: 'Tham chiếu Kích thước', content: '1–20g = các viên nhỏ (size sỏi); 150–500g = kích thước vừa lòng bàn tay (hàng cầm tay); 500–2000g = hàng mẫu cấp độ bảo tàng.' },
    { title: 'Các yếu tố về giá', content: 'Giá cả bị ảnh hưởng bởi độ trong, độ hiếm của màu sắc, trọng lượng, bao thể và nhu cầu thị trường.' },
    { title: 'Hệ số Bán lẻ', content: 'Người bán lẻ thường tăng giá 25–40%, đặc biệt đối với các sản phẩm đã cắt mài hoặc đánh bóng (thành phẩm).' },
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
      content: `Discounts depend on quantity and color/type of amber:\n\n• Common colors/types: 10–25% discount\n• Rare colors/types: 5–15% discount\n\nFinal discount rates will be confirmed after reviewing your order quantity and item selection.`
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
  vi: {
    title: 'Bảng Giá Hổ Phách Thô Miến Điện (Myanmar)',
    byline: 'Thực hiện bởi Vicky Burmese Amber & Gems',
    subtitle: 'Bảng hướng dẫn toàn diện về giá bán sỉ (USD/gram) cho hổ phách Miến Điện, dựa trên màu sắc, bao thể (tạp chất), độ hiếm và kích thước. Giá bán lẻ có thể cao hơn từ 20-40%.',
    introduction: `Hổ phách Miến Điện, còn được gọi là Burmite, là một trong những loại hổ phách tự nhiên lâu đời và quyến rũ nhất thế giới—được hình thành từ nhựa thông hóa thạch cách đây hơn 100 triệu năm. Mỗi viên đá thô đều lưu giữ vẻ đẹp của những khu rừng tiền sử, mang trong mình cảm giác ấm áp, tinh khiết và nguồn năng lượng vượt thời gian.

Các nhà sưu tầm và nghệ nhân đánh giá cao hổ phách thô Miến Điện vì hình dạng tự nhiên, tính nguyên bản và tiềm năng mà nó mang lại cho những sáng tạo độc đáo. Mặc dù hổ phách thô có sức hấp dẫn riêng và giá cả phải chăng, nhiều nhà sưu tầm cũng lựa chọn những sản phẩm đã được cắt mài và đánh bóng (thành phẩm) vì độ trong được nâng cao, màu sắc tinh tế và độ sáng bóng bền lâu. Hổ phách đã qua đánh bóng thường làm lộ rõ vẻ đẹp tiềm ẩn bên trong viên đá, bao gồm các bao thể cổ đại hoặc các tông màu đậm đặc mà ở dạng thô không thể nhìn thấy.

Mặc dù giá có thể cao hơn gấp hai đến ba lần, các sản phẩm thành phẩm đã sẵn sàng để trưng bày hoặc dùng làm đồ trang sức và có xu hướng giữ giá trị bán lại cũng như giá trị sưu tầm cao hơn theo thời gian. Đối với những người tìm kiếm cả nguồn gốc tự nhiên lẫn vẻ ngoài thanh lịch, hổ phách Miến Điện đã đánh bóng mang đến sự cân bằng lý tưởng về độ hiếm, vẻ đẹp và tiềm năng đầu tư.`,
    metaTitle: 'Bảng Giá Hổ Phách Miến Điện (Burmite) | Hổ Phách Tự Nhiên | Vicky Amber',
    metaDescription: 'Khám phá bảng giá sỉ hổ phách thô Miến Điện (Burmite). Giá cập nhật dựa trên màu sắc, độ hiếm và kích thước. 100% hổ phách tự nhiên từ Myanmar.',
    metaKeywords: 'hổ phách Miến Điện, Burmite, giá hổ phách, hổ phách thô, hổ phách tự nhiên, đá quý Myanmar, Vicky Amber',
    tabLabels: {
      overview: 'Tổng quan',
      pricing: 'Bảng giá & Công cụ ước tính',
      notes: 'Ghi chú & Chi tiết',
      gallery: 'Thư viện ảnh',
      blogs: 'Blog',
    },
    fullPriceListTitle: 'Bảng Giá Chi Tiết',
    priceListInfo: {
      title: 'Hiểu về Đơn Giá (Giá/Gram)',
      content: `Xin lưu ý rằng các mức giá khác nhau được hiển thị cho mỗi khoảng trọng lượng là đề cập đến kích thước gần đúng của từng viên riêng lẻ, chứ không phải tổng trọng lượng cộng dồn.

Ví dụ, nếu bạn đang tìm kiếm những viên lớn, mỗi viên nặng từ 500 gram đến 2.000 gram, thì đơn giá mỗi gram sẽ cao hơn so với những viên nhỏ, vì kích thước lớn như vậy rất hiếm.

Ngược lại, nếu bạn yêu cầu những viên nhỏ hơn — ví dụ, mỗi viên từ 5 gram đến 15 gram, với tổng đơn hàng là 3.000 gram màu Nâu Cognac Đậm — thì đơn giá sẽ chỉ là 1.2–1.7 USD/gram. Mức giá này chưa bao gồm chiết khấu lên đến 25% cho các đơn hàng từ 5.000 gram trở lên với cùng quy cách.`
    },
    tableHeaders: [
      { key: 'imageUrl', label: 'Hình ảnh' },
      { key: 'typeColor', label: 'Loại / Màu Hổ Phách' },
      { key: 'description', label: 'Mô tả & Độ hiếm' },
      { key: 'inclusion', label: 'Loại Bao thể' },
      { key: 'small', label: 'Nhỏ (1–20g)' },
      { key: 'medium', label: 'Vừa (20–150g)' },
      { key: 'large', label: 'Lớn (150–500g)' },
      { key: 'extraLarge', label: 'Cực Lớn (500–2000g)' },
      { key: 'notes', label: 'Ghi chú' },
    ],
    tableData: viTableData,
    notesTitle: 'Các Ghi Chú Bổ Sung',
    notesData: viNotesData,
    specialNote: {
      title: 'Lưu ý Quan trọng về Hàng Hóa',
      content: 'Xin lưu ý rằng các loại và màu hổ phách Miến Điện sau đây cực kỳ hiếm và khó tìm: Vàng Kim và Cam (ít bao thể), Đỏ, Vân Gỗ, Đen, và Mila (Sáp Ong/Trắng Sữa). Chúng tôi không thể đảm bảo luôn có sẵn hàng hoặc cung cấp số lượng lớn theo yêu cầu. Tuy nhiên, chúng tôi sẽ cố gắng hết sức để tìm nguồn hàng và cung cấp thông tin tồn kho cập nhật trong vòng vài ngày sau khi bạn đặt hàng.'
    },
    companyName: 'Vicky Burmese Amber & Gems Co., Ltd.',
    estimatorTitle: 'Công Cụ Ước Tính Giá',
    estimatorHeaders: {
      item: 'Loại / Màu Hổ Phách',
      inclusion: 'Loại Bao thể',
      size: 'Kích Thước',
      pricePerGram: 'Giá/Gram (USD)',
      quantity: 'Số lượng (gram)',
      total: 'Tổng Ước Tính'
    },
    addRowButton: 'Thêm mục',
    resetButton: 'Đặt lại tất cả',
    downloadButton: 'Tải báo giá (PDF)',
    grandTotalLabel: 'Tổng cộng',
    selectTypePlaceholder: 'Chọn Loại Hổ Phách',
    selectSizePlaceholder: 'Chọn Kích Thước',
    estimatorNote: 'Xin lưu ý: Tất cả giá hiển thị đã bao gồm thuế nhập khẩu và phí vận chuyển từ Myanmar đến Thái Lan. Tuy nhiên, tổng giá cuối cùng không bao gồm phí giao hàng, phí kiểm tra hải quan, hoặc bất kỳ khoản thuế địa phương và chi phí bổ sung nào có thể phát sinh tại quốc gia đến. Người mua chịu trách nhiệm thanh toán mọi khoản thuế nhập khẩu hoặc chi phí phát sinh tại đầu nhận.',
    estimatorRemark: {
      title: '💬 Ghi chú',
      content: `Chiết khấu phụ thuộc vào số lượng và màu sắc/loại hổ phách:\n\n• Các loại/màu phổ biến: chiết khấu 10–25%\n• Các loại/màu hiếm: chiết khấu 5–15%\n\nMức chiết khấu cuối cùng sẽ được xác nhận sau khi xem xét số lượng đặt hàng và các mặt hàng bạn chọn.`
    },
    pdfTitle: 'Báo Giá Ước Tính',
    pdfDate: 'Ngày báo giá',
    pdfOrderSummaryTitle: 'Tóm Tắt Đơn Hàng Theo Loại',
    pdfCommonTypes: 'Loại Hổ Phách Phổ Biến',
    pdfRareTypes: 'Loại Hổ Phách Hiếm',
    pdfTotalWeight: 'Tổng Trọng Lượng',
    pdfAvgPrice: 'Giá Trung Bình',
    pdfSubtotal: 'Tổng Phụ',
    pdfDiscountInfoTitle: 'Thông Tin Chiết Khấu & Tồn Kho',
    pdfEstimatedDiscount: 'Chiết Khấu Ước Tính',
    pdfCommonType: '(Loại Phổ Biến)',
    pdfRareType: '(Loại Hiếm)',
    pdfEstimatedTotalAfterDiscount: 'Tổng Ước Tính Sau Chiết Khấu',
    pdfDiscountPolicyTitle: 'Chính Sách Chiết Khấu',
    pdfDiscountPolicyContent: 'Chiết khấu phụ thuộc vào số lượng và màu sắc/loại hổ phách.\nMức chiết khấu cuối cùng sẽ được xác nhận sau khi xem xét toàn bộ đơn hàng và các mặt hàng bạn chọn.',
    pdfAvailabilityNoteTitle: 'Lưu ý Quan trọng về Hàng Hóa',
    pdfAvailabilityNoteContent: 'Các loại hổ phách Miến Điện sau đây cực kỳ hiếm và khó tìm: Vàng Kim và Cam (trong), Đỏ, Vân Gỗ, Đen, và Mila (Sáp Ong/Trắng Sữa). Số lượng lớn có thể không có sẵn. Tuy nhiên, chúng tôi sẽ cố gắng hết sức để tìm nguồn hàng và cung cấp báo cáo tồn kho cập nhật sau vài ngày kể từ khi bạn đặt hàng.',
  },
  fr: {
    title: 'Guide des Prix de l\'Ambre Brut de Birmanie',
    byline: 'par Vicky Burmese Amber & Gems',
    subtitle: 'Un guide complet des prix de gros (USD/gramme) pour l\'ambre de Birmanie, basé sur la couleur, les inclusions, la rareté et la taille. Les prix de détail peuvent être 20 à 40% plus élevés.',
    introduction: `L'ambre de Birmanie, également connu sous le nom de Burmite, est l'un des ambres naturels les plus anciens et les plus captivants au monde. Il s'est formé à partir de résine de pin fossilisée il y a plus de 100 millions d'années. Chaque pierre brute préserve la beauté des forêts préhistoriques, portant en elle une sensation de chaleur, de pureté et d'énergie intemporelle.

Les collectionneurs et les artisans apprécient l'ambre brut de Birmanie pour sa forme naturelle, son authenticité et le potentiel qu'il offre pour des créations uniques. Bien que l'ambre brut de Birmanie possède un grand charme et un prix abordable, de nombreux collectionneurs choisissent également des pièces taillées et polies pour leur clarté accrue, leur couleur raffinée et leur éclat durable. L'ambre poli révèle souvent la beauté intérieure cachée de la pierre, y compris des inclusions anciennes ou des tons riches invisibles à l'état brut.

Bien que le prix puisse être deux à trois fois plus élevé, les pièces polies (raffinées) sont prêtes à être exposées ou utilisées en joaillerie et tendent à conserver une valeur de revente et de collection plus forte au fil du temps. Pour ceux qui recherchent à la fois l'origine naturelle et une présentation élégante, l'ambre de Birmanie poli offre un équilibre idéal entre rareté, beauté et potentiel d'investissement.`,
    metaTitle: 'Guide des Prix de l\'Ambre de Birmanie | Ambre Naturel de Myanmar | Vicky Amber',
    metaDescription: 'Découvrez les prix de l\'ambre brut de Birmanie. Tarifs de gros pour l\'ambre 100% naturel du Myanmar, classés par couleur, rareté et taille.',
    metaKeywords: 'ambre de Birmanie, Burmite, prix ambre, ambre brut, ambre naturel, gemmes Myanmar, Vicky Amber',
    tabLabels: {
        overview: 'Aperçu',
        pricing: 'Prix & Estimateur',
        notes: 'Notes & Détails',
        gallery: 'Galerie',
        blogs: 'Blog',
    },
    fullPriceListTitle: 'Grille Tarifaire Complète',
    priceListInfo: {
        title: 'Comprendre le Prix au Gramme',
        content: `Veuillez noter que les différents prix indiqués pour chaque gamme de poids font référence à la taille approximative de chaque pièce individuelle, et non au poids total combiné.\n
Par exemple, si vous recherchez de grosses pièces pesant entre 500 et 2 000 grammes chacune, le prix au gramme sera plus élevé que celui des petites pièces, car de telles tailles sont très rares à trouver.\n
À l'inverse, si vous demandez des pièces plus petites – par exemple, de 5 à 15 grammes chacune, pour une commande totale de 3 000 grammes de couleur Cognac Foncé – le prix ne sera que de 1,2–1,7 USD par gramme. Ce prix n'inclut pas la remise pouvant aller jusqu'à 25% pour les commandes de 5 000 grammes ou plus sous la même spécification.`
    },
    tableHeaders: [
        { key: 'imageUrl', label: 'Image' },
        { key: 'typeColor', label: 'Type / Couleur de l\'Ambre' },
        { key: 'description', label: 'Description & Rareté' },
        { key: 'inclusion', label: 'Type d\'Inclusion' },
        { key: 'small', label: 'Petit (1–20g)' },
        { key: 'medium', label: 'Moyen (20–150g)' },
        { key: 'large', label: 'Grand (150–500g)' },
        { key: 'extraLarge', label: 'Très Grand (500–2000g)' },
        { key: 'notes', label: 'Remarques' },
    ],
    tableData: frTableData,
    notesTitle: 'Notes Supplémentaires',
    notesData: frNotesData,
    specialNote: {
        title: 'Note Importante sur la Disponibilité',
        content: 'Veuillez noter que les types et couleurs suivants d\'ambre de Birmanie sont extrêmement rares et difficiles à trouver : le Jaune Or et l\'Orange avec un minimum d\'inclusions, le Rouge, le Motif de Bois, le Noir et le Mila (Type Laiteux/Cire). Nous ne pouvons pas garantir la disponibilité complète ou de grandes quantités sur demande. Cependant, nous ferons de notre mieux pour les trouver et vous fournirons des informations de stock à jour quelques jours après votre commande.'
    },
    companyName: 'Vicky Burmese Amber & Gems Co., Ltd.',
    estimatorTitle: 'Estimateur de Prix',
    estimatorHeaders: {
        item: 'Type / Couleur de l\'Ambre',
        inclusion: 'Type d\'Inclusion',
        size: 'Gamme de Taille',
        pricePerGram: 'Prix/Gramme (USD)',
        quantity: 'Quantité (grammes)',
        total: 'Total Estimé',
    },
    addRowButton: 'Ajouter l\'article',
    resetButton: 'Tout Réinitialiser',
    downloadButton: 'Télécharger l\'estimation (PDF)',
    grandTotalLabel: 'Total Général',
    selectTypePlaceholder: 'Sélectionnez le Type d\'Ambre',
    selectSizePlaceholder: 'Sélectionnez la Taille',
    estimatorNote: 'Veuillez noter : Tous les prix indiqués incluent les taxes d\'importation et les frais de livraison du Myanmar vers la Thaïlande. Cependant, le prix total final n\'inclut pas la livraison, l\'inspection douanière, ni les taxes locales et frais supplémentaires pouvant s\'appliquer dans le pays de destination. Les acheteurs sont responsables de tous les droits d\'importation ou frais encourus à leur charge.',
    estimatorRemark: {
        title: '💬 Remarque',
        content: `Les remises dépendent de la quantité et de la couleur/type d'ambre :\n\n• Couleurs/types courants : 10–25% de remise\n• Couleurs/types rares : 5–15% de remise\n\nLes taux de remise finaux seront confirmés après examen de la quantité de votre commande et de la sélection d'articles.`
    },
    pdfTitle: 'Résumé de l\'Estimation de Prix',
    pdfDate: 'Date de l\'estimation',
    pdfOrderSummaryTitle: 'Résumé de la Commande par Type',
    pdfCommonTypes: 'Types d\'Ambre Courants',
    pdfRareTypes: 'Types d\'Ambre Rares',
    pdfTotalWeight: 'Poids Total',
    pdfAvgPrice: 'Prix Moyen',
    pdfSubtotal: 'Sous-total',
    pdfDiscountInfoTitle: 'Informations sur les Remises et la Disponibilité',
    pdfEstimatedDiscount: 'Remise Estimée',
    pdfCommonType: '(Type Courant)',
    pdfRareType: '(Type Rare)',
    pdfEstimatedTotalAfterDiscount: 'Total Estimé Après Remise',
    pdfDiscountPolicyTitle: 'Politique de Remise',
    pdfDiscountPolicyContent: 'Les remises dépendent de la quantité et du type/couleur de l\'ambre.\nLes taux de remise finaux seront confirmés après examen de votre commande complète et de la sélection d\'articles.',
    pdfAvailabilityNoteTitle: 'Note Importante sur la Disponibilité',
    pdfAvailabilityNoteContent: 'Les types et couleurs d\'ambre de Birmanie suivants sont extrêmement rares et difficiles à trouver : Jaune Or et Orange (purs), Rouge, à Motif de Bois, Noir et Mila (Type Cire). De grandes quantités pourraient ne pas être disponibles. Cependant, nous nous efforcerons de les trouver et de fournir un rapport de stock à jour quelques jours après votre commande.',
  },
  ja: {
    title: 'ビルマ産琥珀（バーマイト）原石 価格ガイド',
    byline: 'by Vicky Burmese Amber & Gems',
    subtitle: '色、内包物、希少性、サイズ（重量）に基づいた、ビルマ産琥珀の包括的な卸売価格（USD/グラム）ガイドです。小売価格は、卸売価格より20～40%高くなる場合があります。',
    introduction: `ビルマ産琥珀（バーマイト）は、1億年以上前の松脂の化石から形成された、世界で最も古く、最も魅力的な天然琥珀の一つです。一つ一つの原石が太古の森の美しさを保存しており、その内には温もり、純粋さ、そして悠久のエネルギーが秘められています。

コレクターや職人たちは、ビルマ産琥珀の原石が持つ自然なフォルム、真正性、そしてユニークな作品を生み出す可能性を高く評価しています。
原石には素晴らしい魅力と手頃な価格がありますが、多くのコレクターは、より高い透明度、洗練された色合い、そして持続する輝きを求めて、カット・研磨された研磨品を選びます。研磨された琥珀は、原石の状態では見えなかった古代の内包物や豊かな色調など、石に秘められた内面の美しさを明らかにすることがよくあります。

価格は原石の2倍から3倍になることもありますが、研磨品はそのまま観賞用やジュエリーとして使用でき、時間が経つにつれてより強力な再販価値とコレクター価値を持つ傾向があります。自然な起源と洗練された外観の両方を求める方にとって、研磨されたビルマ産琥珀は、希少性、美しさ、そして投資可能性の理想的なバランスを提供します。`,
    metaTitle: 'ビルマ産琥珀（バーマイト）価格ガイド | Vicky Amber | 天然琥珀卸売',
    metaDescription: 'ビルマ産琥珀（バーマイト）の包括的な卸売価格ガイド。色、希少性、サイズに基づいた100%天然原石の最新価格をご確認ください。ミャンマーから直送、タイへの送料・税金込み。',
    metaKeywords: 'ビルマ産琥珀, バーマイト, 琥珀価格, 琥珀原石, 宝石卸売, 琥珀, Vicky Amber, 天然琥珀',
    tabLabels: {
        overview: '概要',
        pricing: '価格と見積もり',
        notes: '注記と詳細',
        gallery: 'ギャラリー',
        blogs: 'ブログ',
    },
    fullPriceListTitle: '価格全表',
    priceListInfo: {
        title: 'グラム単価（1グラムあたりの価格）について',
        content: `各重量範囲に示されている異なる価格は、合計重量ではなく、**個々の石のおおよそのサイズ（1個あたりの重量）**を指しますのでご注意ください。\n
例えば、「1個あたり500グラムから2,000グラム」の大きな石をお探しの場合、そのような大きなサイズは非常に稀であるため、小さな石と比較してグラム単価は高くなります。\n
対照的に、「1個あたり5グラムから15グラム」の小さな石を、ダークコニャック色で合計3,000グラムご注文いただく場合、グラム単価はわずか1.2～1.7米ドルです。これには、同一仕様で5,000グラム以上ご注文いただいた場合の最大25%の割引はまだ含まれていません。`
    },
    tableHeaders: [
        { key: 'imageUrl', label: '画像' },
        { key: 'typeColor', label: '琥珀のタイプ / 色' },
        { key: 'description', label: '説明と希少性' },
        { key: 'inclusion', label: '内包物のタイプ' },
        { key: 'small', label: 'S (1–20g)' },
        { key: 'medium', label: 'M (20–150g)' },
        { key: 'large', label: 'L (150–500g)' },
        { key: 'extraLarge', label: 'XL (500–2000g)' },
        { key: 'notes', label: '備考' },
    ],
    tableData: jaTableData,
    notesTitle: '追加事項',
    notesData: jaNotesData,
    specialNote: {
        title: '在庫に関する重要なお知らせ',
        content: '以下のタイプおよび色のビルマ産琥珀は、極めて希少で入手困難です：ゴールドイエローおよびオレンジ（内包物が最小限のもの）、レッド、木目調、ブラック、およびミラ（ミルキー/蜜蝋タイプ）。ご要望に応じて、十分な在庫や大量の供給を保証することはできません。しかし、弊社はそれらを調達するために最善を尽くし、ご注文後数日以内に最新の在庫情報をご提供いたします。'
    },
    companyName: 'Vicky Burmese Amber & Gems Co., Ltd.',
    estimatorTitle: '価格シミュレーター（見積もり）',
    estimatorHeaders: {
        item: '琥珀のタイプ / 色',
        inclusion: '内包物のタイプ',
        size: 'サイズ範囲',
        pricePerGram: 'グラム単価 (USD)',
        quantity: '数量 (グラム)',
        total: '見積合計',
    },
    addRowButton: '項目を追加',
    resetButton: 'すべてリセット',
    downloadButton: '見積書をダウンロード (PDF)',
    grandTotalLabel: '総計',
    selectTypePlaceholder: 'タイプを選択',
    selectSizePlaceholder: 'サイズを選択',
    estimatorNote: 'ご注意ください： 表示されているすべての価格には、ミャンマーからタイへの輸入税と配送料が含まれています。ただし、最終的な合計金額には、最終仕向国での配送料、税関検査料、または適用される可能性のある現地の税金や追加費用は含まれていません。仕向国で発生する輸入関税や諸費用は、購入者のご負担となります。',
    estimatorRemark: {
        title: '💬 補足',
        content: `割引は、ご注文の数量と琥珀の色/タイプによって異なります。\n\n• 一般的な色/タイプ： 10–25% 割引\n• 希少な色/タイプ： 5–15% 割引\n\n最終的な割引率は、ご注文数量と選択された商品を確認した後に確定されます。`
    },
    pdfTitle: '価格見積もり概要',
    pdfDate: '見積もり作成日',
    pdfOrderSummaryTitle: 'タイプ別注文概要',
    pdfCommonTypes: '一般的な琥珀タイプ',
    pdfRareTypes: '希少な琥珀タイプ',
    pdfTotalWeight: '総重量',
    pdfAvgPrice: '平均価格',
    pdfSubtotal: '小計',
    pdfDiscountInfoTitle: '割引と在庫に関する情報',
    pdfEstimatedDiscount: '推定割引',
    pdfCommonType: '(一般的なタイプ)',
    pdfRareType: '(希少なタイプ)',
    pdfEstimatedTotalAfterDiscount: '割引後の推定合計金額',
    pdfDiscountPolicyTitle: '割引ポリシー',
    pdfDiscountPolicyContent: '割引は、ご注文の数量と琥珀の色/タイプによって異なります。\n最終的な割引率は、ご注文の全内容を確認した上で確定されます。',
    pdfAvailabilityNoteTitle: '在庫に関する重要なお知らせ',
    pdfAvailabilityNoteContent: '以下のビルマ産琥珀タイプおよび色は極めて希少で入手が困難です：ゴールドイエローおよびオレンジ（クリーン）、レッド、木目調、ブラック、ミラ（蜜蝋タイプ）。これらの大量供給は保証できかねます。しかし、ご注文後に最善を尽くして調達し、数日以内に在庫状況を報告いたします。',
  },
  nl: {
    title: 'Prijsgids voor Ruwe Birmese Amber',
    byline: 'door Vicky Burmese Amber & Gems',
    subtitle: 'Een uitgebreide groothandelsprijsgids (USD/gram) voor Birmese amber, gebaseerd op kleur, insluitsels, zeldzaamheid en formaat. Winkelprijzen kunnen 20-40% hoger liggen.',
    introduction: `Birmese amber, ook bekend als Burmiet, is een van 's werelds oudste en meest fascinerende natuurlijke ambersoorten. Het is gevormd uit gefossiliseerde dennenhars van meer dan 100 miljoen jaar geleden. Elke ruwe steen bewaart de schoonheid van prehistorische bossen en draagt een gevoel van warmte, zuiverheid en tijdloze energie in zich.

Verzamelaars en ambachtslieden waarderen ruwe Birmese amber om zijn natuurlijke vorm, authenticiteit en het potentieel dat het biedt voor unieke creaties. Hoewel ruwe Birmese amber veel charme en een toegankelijke prijs heeft, kiezen veel verzamelaars ook voor geslepen en gepolijste stukken vanwege hun verbeterde helderheid, verfijnde kleur en blijvende schittering. Gepolijste amber onthult vaak de verborgen innerlijke schoonheid van de steen, inclusief eeuwenoude insluitsels of rijke tinten die in ruwe vorm onzichtbaar zijn.

Hoewel de prijs twee tot drie keer hoger kan liggen, zijn de verfijnde stukken klaar voor uitstalling of gebruik in sieraden en behouden ze doorgaans een sterkere wederverkoop- en verzamelwaarde op de lange termijn. Voor wie op zoek is naar zowel een natuurlijke oorsprong als een elegante presentatie, biedt gepolijste Birmese amber een ideale balans tussen zeldzaamheid, schoonheid en investeringspotentieel.`,
    metaTitle: 'Prijsgids voor Birmese Amber | Natuurlijke Amber uit Myanmar | Vicky Amber',
    metaDescription: 'Ontdek authentieke prijzen van Birmese amber, groothandelstarieven en spirituele toepassingen. 100% natuurlijke en onbehandelde amber rechtstreeks uit Myanmar.',
    metaKeywords: 'Birmese amber, Burmiet, amber prijsgids, natuurlijke amber, amber groothandel, fossiele amber, Myanmar amber',
    tabLabels: {
        overview: 'Overzicht',
        pricing: 'Prijzen & Calculator',
        notes: 'Notities & Details',
        gallery: 'Galerij',
        blogs: 'Blog',
    },
    fullPriceListTitle: 'Volledige Prijslijst',
    priceListInfo: {
        title: 'Uitleg van de Prijs per Gram',
        content: `Let op: de verschillende prijzen die voor elke gewichtsklasse worden getoond, verwijzen naar de geschatte grootte van elk afzonderlijk stuk, niet naar het totale gecombineerde gewicht.

Als u bijvoorbeeld op zoek bent naar grote stukken die elk tussen de 500 en 2.000 gram wegen, zal de prijs per gram hoger zijn dan voor kleinere stukken, omdat zulke grote formaten zeer zeldzaam zijn.

Als u daarentegen kleinere stukken aanvraagt - bijvoorbeeld van elk 5 tot 15 gram, met een totale bestelling van 3.000 gram in de kleur Donker Cognac - is de prijs slechts USD 1.2–1.7 per gram. Dit is exclusief een korting tot 25% voor bestellingen van 5.000 gram of meer met dezelfde specificatie.`,
    },
    tableHeaders: [
        { key: 'imageUrl', label: 'Afbeelding' },
        { key: 'typeColor', label: 'Amber Type / Kleur' },
        { key: 'description', label: 'Beschrijving & Zeldzaamheid' },
        { key: 'inclusion', label: 'Type Insluitsel' },
        { key: 'small', label: 'Klein (1–20g)' },
        { key: 'medium', label: 'Medium (20–150g)' },
        { key: 'large', label: 'Groot (150–500g)' },
        { key: 'extraLarge', label: 'Extra Groot (500–2000g)' },
        { key: 'notes', label: 'Notities' },
    ],
    tableData: nlTableData,
    notesTitle: 'Aanvullende Notities',
    notesData: nlNotesData,
    specialNote: {
        title: 'Belangrijke Mededeling over Beschikbaarheid',
        content: 'Houd er rekening mee dat de volgende types en kleuren Birmese amber extreem zeldzaam en moeilijk te vinden zijn: Goudgeel en Oranje met minimale insluitsels, Rood, Houtpatroon, Zwart, en Mila (Melkachtig/Bijenwas Type). We kunnen geen volledige beschikbaarheid of grote hoeveelheden op aanvraag garanderen. We zullen echter ons best doen om deze te verkrijgen en u binnen enkele dagen na uw bestelling van bijgewerkte voorraadinformatie te voorzien.',
    },
    companyName: 'Vicky Burmese Amber & Gems Co., Ltd.',
    estimatorTitle: 'Prijscalculator',
    estimatorHeaders: {
        item: 'Amber Type / Kleur',
        inclusion: 'Type Insluitsel',
        size: 'Formaat',
        pricePerGram: 'Prijs/Gram (USD)',
        quantity: 'Hoeveelheid (gram)',
        total: 'Geschat Totaal',
    },
    addRowButton: 'Item Toevoegen',
    resetButton: 'Alles Resetten',
    downloadButton: 'Download Schatting (PDF)',
    grandTotalLabel: 'Totaalbedrag',
    selectTypePlaceholder: 'Selecteer Amber Type',
    selectSizePlaceholder: 'Selecteer Formaat',
    estimatorNote: 'Let op: Alle getoonde prijzen zijn inclusief importbelastingen en leveringskosten van Myanmar naar Thailand. De uiteindelijke totaalprijs is echter exclusief levering, douane-inspectie, of enige lokale belastingen en extra kosten die van toepassing kunnen zijn in het land van bestemming. Kopers zijn verantwoordelijk voor alle invoerrechten of kosten die in hun land van bestemming ontstaan.',
    estimatorRemark: {
        title: '💬 Opmerking',
        content: `Kortingen zijn afhankelijk van de hoeveelheid en het type/kleur amber:\n\n• Gangbare kleuren/types: 10–25% korting\n• Zeldzame kleuren/types: 5–15% korting\n\nDe definitieve kortingspercentages worden bevestigd na beoordeling van uw bestelhoeveelheid en itemselectie.`,
    },
    pdfTitle: 'Prijsschatting Overzicht',
    pdfDate: 'Datum van Schatting',
    pdfOrderSummaryTitle: 'Besteloverzicht per Type',
    pdfCommonTypes: 'Gangbare Amber Types',
    pdfRareTypes: 'Zeldzame Amber Types',
    pdfTotalWeight: 'Totaal Gewicht',
    pdfAvgPrice: 'Gemiddelde Prijs',
    pdfSubtotal: 'Subtotaal',
    pdfDiscountInfoTitle: 'Kortingen & Beschikbaarheidsinformatie',
    pdfEstimatedDiscount: 'Geschatte Korting',
    pdfCommonType: '(Gangbaar Type)',
    pdfRareType: '(Zeldzaam Type)',
    pdfEstimatedTotalAfterDiscount: 'Geschat Totaal na Korting',
    pdfDiscountPolicyTitle: 'Kortingsbeleid',
    pdfDiscountPolicyContent: 'Kortingen zijn afhankelijk van de hoeveelheid en het type/kleur amber.\nDe definitieve kortingspercentages worden bevestigd na beoordeling van uw volledige bestelling en itemselectie.',
    pdfAvailabilityNoteTitle: 'Belangrijke Mededeling over Beschikbaarheid',
    pdfAvailabilityNoteContent: 'Houd er rekening mee dat de volgende types en kleuren Birmese amber extreem zeldzaam en moeilijk te vinden zijn: Goudgeel en Oranje met minimale insluitsels, Rood, Houtpatroon, Zwart, en Mila (Melkachtig/Bijenwas Type). We kunnen geen volledige beschikbaarheid of grote hoeveelheden op aanvraag garanderen. We zullen echter ons best doen om deze te verkrijgen en u binnen enkele dagen na uw bestelling van bijgewerkte voorraadinformatie te voorzien.',
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
      content: `Los descuentos dependen de la cantidad y el color/tipo de ámbar:\n\n• Colores/tipos comunes: 10–25% de descuento\n• Colores/tipos raros: 5–15% de descuento\n\nLas tasas de descuento finales se confirmarán después de revisar la cantidad de su pedido y la selección de artículos.`
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
      content: `تعتمد الخصومات على الكمية ونوع/لون العنبر:\n\n• الألوان والأنواع الشائعة: خصم من 10% إلى 25%\n• الأنواع النادرة: خصم من 5% إلى 15%\n\nسيتم تأكيد معدل الخصم النهائي بعد مراجعة الكمية الإجمالية واختيار الأنواع المطلوبة.`
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
      content: `छूट मात्रा और एंबर के रंग/प्रकार पर निर्भर करती है:\n\n• सामान्य रंग/प्रकार: 10–25% छूट\n• दुर्लभ रंग/प्रकार: 5–15% छूट\n\nअंतिम छूट दर ऑर्डर की मात्रा और चयन के अनुसार पुष्टि की जाएगी।`
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
    introduction: `อำพันพม่า หรือที่รู้จักในชื่อ Burmite เป็นหนึ่งในอำพันธรรมชาติที่เก่าแก่ที่สุดและน่าหลงใหลที่สุดในโลก เกิดจากยางสนที่กลายเป็นฟอสซิลมากกว่า 100 ล้านปี ทุกก้อนอำพันดิบล้วนเก็บรักษาเศษซากความงดงามของป่าดึกดำบรรพ์ไว้ภายใน พร้อมด้วยพลังแห่งความอบอุ่น ความบริสุทธิ์ และพลังงานเหนือกาลเวลา

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
        content: `ส่วนลดขึ้นอยู่กับปริมาณและสี/ประเภทอำพัน:\n\n• สี/ประเภททั่วไป: 10–25%\n• สี/ประเภทหายาก: 5–15%\n\nอัตราส่วนลดสุดท้ายจะยืนยันหลังตรวจสอบรายการและปริมาณ`,
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
  },
  zh: {
    title: '缅甸琥珀原石价格指南',
    byline: '由 Vicky Burmese Amber & Gems (Vicky 缅甸琥珀与宝石) 诚献',
    subtitle: '一份详尽的缅甸琥珀批发价格指南（单位：美元/克），基于颜色、包裹体、稀有度和尺寸（克重）。零售价可能高出20-40%。',
    introduction: `缅甸琥珀（Burmite），是世界上最古老、最迷人的天然琥珀之一——由一亿多年前的松树树脂石化而成。每一块原石都保存着史前森林之美，蕴藏着温暖、纯净和永恒的能量。

收藏家和工匠们珍视缅珀原石的自然形态、原真性及其为独特创作提供的无限可能。虽然缅珀原石具有独特的魅力和相对实惠的价格，但许多收藏家也选择经过切割和抛光的成品，以追求其更高的净度、精致的色彩和持久的光彩。抛光后的琥珀（成品）常常能揭示出原石内部隐藏的美感，包括在原石形态下难以察觉的古老包裹体或浓郁的色调。

尽管成品的价格可能比原石高出两到三倍，但它们可直接用于展示或珠宝镶嵌，并且随着时间的推移，往往具有更强的转售价值和收藏价值。对于那些既追求自然起源又注重优雅呈现的买家而言，成品缅珀在稀有性、美观度和投资潜力之间提供了理想的平衡。`,
    metaTitle: '缅甸琥珀原石价格指南 | Vicky 琥珀 & 宝石 | 天然琥珀批发',
    metaDescription: '探索缅甸琥珀（缅珀）的综合批发价格。按颜色、稀有度和尺寸查找100%纯天然原石的最新价格。从缅甸直供，含税运至泰国。',
    metaKeywords: '缅甸琥珀, 缅珀, 琥珀价格, Burmite, 天然琥珀, 琥珀原石, 宝石批发, 琥珀, Vicky Amber',
    tabLabels: {
      overview: '概览',
      pricing: '价格与估算',
      notes: '备注与详情',
      gallery: '图库',
      blogs: '博客',
    },
    fullPriceListTitle: '完整价目表',
    priceListInfo: {
      title: '理解“克价”（每克价格）',
      content: `请注意，每个重量范围所示的不同价格，指的是单件原石的大致尺寸（克重），而不是订单的总重量。\n
例如，如果您正在寻找每件重量在500克到2000克之间的大块料子，其“克价”将会远高于小件料子，因为如此大的尺寸非常罕见。\n
相反，如果您需要的是小件料子——例如，每件5克到15克，订购总重3000克的“棕红珀”——那么克价仅为1.2-1.7美元。这还不包括针对同一规格订单满5000克或以上、高达25%的折扣。`
    },
    tableHeaders: [
      { key: 'imageUrl', label: '图片' },
      { key: 'typeColor', label: '琥珀类型 / 颜色' },
      { key: 'description', label: '描述与稀有度' },
      { key: 'inclusion', label: '包裹体类型' },
      { key: 'small', label: '小件 (1–20克)' },
      { key: 'medium', label: '中件 (20–150克)' },
      { key: 'large', label: '大件 (150–500克)' },
      { key: 'extraLarge', label: '特大件 (500–2000克)' },
      { key: 'notes', label: '备注' },
    ],
    tableData: zhTableData,
    notesTitle: '附加说明',
    notesData: zhNotesData,
    specialNote: {
      title: '关于库存的重要说明',
      content: '请注意，以下类型和颜色的缅甸琥珀极其稀有且难以寻获：净水的黄金珀和橙珀、血珀、根珀、黑珀和蜜蜡（尤其是白蜜蜡）。我们不能保证能立即足量供应或提供大量现货。但是，我们将尽最大努力为您寻源，并在您下单后几天内提供最新的库存信息。'
    },
    companyName: 'Vicky Burmese Amber & Gems Co., Ltd.',
    estimatorTitle: '价格估算',
    estimatorHeaders: {
      item: '琥珀类型 / 颜色',
      inclusion: '包裹体类型',
      size: '尺寸范围',
      pricePerGram: '价格/克 (USD)',
      quantity: '数量 (克)',
      total: '估算总计'
    },
    addRowButton: '添加项目',
    resetButton: '全部重置',
    downloadButton: '下载估价单 (PDF)',
    grandTotalLabel: '总计',
    selectTypePlaceholder: '选择琥珀类型',
    selectSizePlaceholder: '选择尺寸',
    estimatorNote: '请注意： 所有显示价格均已包含从缅甸到泰国的进口税和运费。然而，最终总价不包括送达最终目的地国家的运费、海关查验费或任何当地税费及额外费用。买方需自行承担在目的地产生的任何进口关税或费用。',
    estimatorRemark: {
      title: '💬 备注',
      content: `折扣取决于订单数量和琥珀的颜色/类型：\n\n• 常见颜色/类型 (如棕红珀): 10–25% 折扣\n• 稀有颜色/类型 (如血珀, 蜜蜡): 5–15% 折扣\n\n最终折扣率将在审核您的订单数量和所选商品后确认。`
    },
    pdfTitle: '价格估算摘要',
    pdfDate: '估价日期',
    pdfOrderSummaryTitle: '按类型订单摘要',
    pdfCommonTypes: '常见琥珀类型',
    pdfRareTypes: '稀有琥珀类型',
    pdfTotalWeight: '总重量',
    pdfAvgPrice: '平均价格',
    pdfSubtotal: '小计',
    pdfDiscountInfoTitle: '折扣与库存信息',
    pdfEstimatedDiscount: '预估折扣',
    pdfCommonType: '(常见类型)',
    pdfRareType: '(稀有类型)',
    pdfEstimatedTotalAfterDiscount: '折扣后预估总价',
    pdfDiscountPolicyTitle: '折扣政策',
    pdfDiscountPolicyContent: '折扣取决于订单数量和琥珀的颜色/类型。\n最终折扣率将在审核您的完整订单和所选商品后确认。',
    pdfAvailabilityNoteTitle: '关于库存的重要说明',
    pdfAvailabilityNoteContent: '请注意，以下类型和颜色的缅甸琥珀极其稀有且难以寻获：净水的黄金珀和橙珀、血珀、根珀、黑珀和蜜蜡（尤其是白蜜蜡）。我们不能保证能立即足量供应或提供大量现货。但是，我们将尽最大努力为您寻源，并在您下单后几天内提供最新的库存信息。',
  }
};