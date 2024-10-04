export interface SortOption {
  field: string;
  order: "asc" | "desc";
}

export interface FilterOption {
  field: string;
  value: unknown;
  operator?: "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "nin" | "like";
}

export interface BasePaginationParams {
  page: number;
  limit: number;
  search?: string;
}

export interface PaginationParams extends BasePaginationParams {
  sort?: string;
  order?: "asc" | "desc";
  filters?: Record<string, unknown>;
}

export interface AdvancedPaginationParams extends BasePaginationParams {
  sort?: SortOption[];
  filters?: FilterOption[];
}

export interface PaginationMeta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

export interface AdvancedPaginatedResponse<T> extends PaginatedResponse<T> {
  appliedFilters?: FilterOption[];
  appliedSorts?: SortOption[];
}
