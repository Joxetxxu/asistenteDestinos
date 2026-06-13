// export interface Organo {
//   dir3: string
//   nivel: number
//   organoPadre?: OrganoPadre
//   unidadOrganica: string
// }

// export interface OrganoPadre {
//   dir3: string
//   nivel: number
//   organoPadre: any
//   unidadOrganica: string
// }


export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}
