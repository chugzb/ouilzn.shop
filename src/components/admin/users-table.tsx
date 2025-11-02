import type { User } from '@/lib/auth-types';

interface UsersTableProps {
  data: User[];
  total: number;
  pageIndex: number;
  pageSize: number;
  search: string;
  loading?: boolean;
  onSearch: (search: string) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  onSortingChange?: (sorting: unknown) => void;
}

export function UsersTable(_props: UsersTableProps) {
  return null;
}
