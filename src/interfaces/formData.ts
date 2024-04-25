export interface IFormData {
  id: string;
  ad: string;
  soyad: string;
  yas: number;
  cinsiyet: string;
  kanGrubu: string;
  kanGrubuRh: string;
  gelisNedeni: string;
  gelisNedeniAciklama: string;
  odadaBulunanlar: string[];
  darpDurumu: string;
  organizasyon: string;
  sikayet: string;
  doktorAdi: string;
  uygunOrtamSaglandi: boolean;
}
