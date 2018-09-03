import { Iproduit } from "./iproduit";

export interface Icategorie {
  category_id: number;
  category_name: string;
  products: Iproduit[] ;
}
