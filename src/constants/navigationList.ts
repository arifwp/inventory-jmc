import {
  RemixiconComponentType,
  RiBookmark2Line,
  RiDownload2Line,
  RiTeamLine,
} from "@remixicon/react";

export interface SidebarItem {
  id: number;
  icon: RemixiconComponentType;
  name: string;
  to: string;
}

export const sidebarList: SidebarItem[] = [
  {
    id: 1,
    icon: RiDownload2Line,
    name: "Barang Masuk",
    to: "/barang-masuk",
  },
  {
    id: 2,
    icon: RiBookmark2Line,
    name: "Master Data",
    to: "/master-data",
  },
  {
    id: 3,
    icon: RiTeamLine,
    name: "Manajemen User",
    to: "/manajemen-user",
  },
];
