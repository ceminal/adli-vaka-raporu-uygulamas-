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
  darpDurumu: boolean;
  organizasyon: string;
  sikayet: string;
  doktorAdi: string;
  uygunOrtamSaglandi: boolean;
}
