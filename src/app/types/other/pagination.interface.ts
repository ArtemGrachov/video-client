export interface IPagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  lowerPage?: number;
  upperPage?: number;
}
