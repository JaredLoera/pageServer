import { Tag } from "./tag";
import { Pdf } from "./pdf";
export interface Tutorial {
    id?: number
    title: string;
    description: string;
    is_published?: boolean;
    uniqueId?:    string;
    user_id?: number;
    created_at?: string;
    updated_at?: string;
    tags?: Tag[];
}
export interface PDFTutorial
{
    pdf_tutorial:Pdf,
    tutorial:Tutorial
}

export interface tutorialPdf{
    id?: number
    title?: string;
    description?: string;
    is_published?: boolean;
    uniqueId?:    string;
    user_id?: number;
    created_at?: string;
    updated_at?: string;
    pdfTutorial?:Pdf
}

