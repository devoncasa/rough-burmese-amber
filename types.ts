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
  subtitle: string;
  tableHeaders: TableHeader[];
  tableData: AmberPrice[];
  notesTitle: string;
  notesData: Note[];
  specialNote: Note;
  footerText: string;
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
}