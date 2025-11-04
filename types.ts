export interface AmberPrice {
  typeColor: string;
  description: string;
  inclusion: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  notes: string;
  imageUrl?: string;
}

export interface Note {
    title: string;
    content: string;
}

export interface TableHeader {
  key: string;
  label: string;
}

export interface LanguageContent {
  title: string;
  byline: string;
  subtitle: string;
  introduction: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  tabLabels: {
    overview: string;
    pricing: string;
    notes: string;
    gallery: string;
    blogs: string;
  };
  tableHeaders: TableHeader[];
  tableData: AmberPrice[];
  notesTitle: string;
  notesData: Note[];
  specialNote: Note;
  fullPriceListTitle: string;
  priceListInfo: Note;
  companyName: string;
  // Properties for the Price Estimator
  estimatorTitle: string;
  estimatorHeaders: {
    item: string;
    inclusion: string;
    size: string;
    pricePerGram: string;
    quantity: string;
    total: string;
  };
  addRowButton: string;
  resetButton: string;
  downloadButton: string;
  grandTotalLabel: string;
  selectTypePlaceholder: string;
  selectSizePlaceholder: string;
  estimatorNote: string;
  estimatorRemark: Note;
  // PDF specific translations
  pdfTitle: string;
  pdfDate: string;
  pdfOrderSummaryTitle: string;
  pdfCommonTypes: string;
  pdfRareTypes: string;
  pdfTotalWeight: string;
  pdfAvgPrice: string;
  pdfSubtotal: string;
  pdfDiscountInfoTitle: string;
  pdfEstimatedDiscount: string;
  pdfCommonType: string;
  pdfRareType: string;
  pdfEstimatedTotalAfterDiscount: string;
  pdfDiscountPolicyTitle: string;
  pdfDiscountPolicyContent: string;
  pdfAvailabilityNoteTitle: string;
  pdfAvailabilityNoteContent: string;
}