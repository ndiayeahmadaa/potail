export class SidenavItem {
  name: string;
  icon?: string;
  routeOrFunction?: any;
  parent?: SidenavItem;
  subItems?: SidenavItem[];
  position?: number;
  pathMatchExact?: boolean;
  badge?: string;
  badgeColor?: string;
  type?: 'item' | 'subheading';
  customClass?: string;

  constructor(element?) {
    this.name = element.name;
    this.icon = element.icon;
    this.position = element.position;
    this.routeOrFunction = element.routeOrFunction
  }
}
