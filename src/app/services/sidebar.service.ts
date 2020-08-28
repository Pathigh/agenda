import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

 public menu: any [] = [
    {
      titulo: 'Home',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/'}

      ],
      titulo1: 'Usuarios',
      icono1: 'mdi mdi-bullseye',
      submenu1: [
        {titulo1: 'Crear Usuarios', url: 'users'},
        {titulo1: 'Mostrar Usuarios', url: 'viewusers'}

      ],
      titulo2: 'Clientes',
      icono2: 'mdi mdi-gauge',
      submenu2: [
        {titulo2: 'Crear Clientes', url: 'clients'},
        {titulo2: 'Mostrar Clientes', url: 'viewclients'}

      ],
      titulo3: 'Categorias',
      icono3: 'mdi mdi-gauge',
      submenu3: [
        {titulo3: 'Crear Categiria', url: 'category'},
        {titulo3: 'Mostrar Categiria', url: 'viewcategory'}


      ],
      titulo4: 'Agenda',
      icono4: 'mdi mdi-gauge',
      submenu4: [
        {titulo4: 'Crear Agenda', url: 'schedule'},
        {titulo4: 'Mostrar Agenda', url: 'viewschedule'},

      ],


    }
  ];

  constructor() { }
}
