export interface RendezVous {
    _id: string;
    idClient: string;
    idEmploye: string;
    dateheuredebut: string;
    dateheurefin: string;
    prix: number;
    service: {
      _id: string;
      nom: string;
      prix: number;
      delai: number;
      commission: number;
      etat: number;
    };
    client?:{
      nom: string;
      prenom:string;
    },
    status: number;
    etat: number;
  }
  